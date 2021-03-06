/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-use-before-define */
/* eslint-disable one-var */
/* eslint-disable react/prop-types */
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DisplayText from './DisplayText'
import Event from './Event'
import { weekdays, months, cellWidthDayView } from '../utils/constants'
import compareDate from '../utils/compareDate'

import { NavArrow, Li } from '../styles/styled'
import DayCalendarDiv from '../styles/DayCalendar.styled'

export const addSuffix = date => {
  const moduloTen = date % 10,
    moduloHundred = date % 100
  if (moduloTen === 1 && moduloHundred !== 11) {
    return `${date}st`
  }
  if (moduloTen === 2 && moduloHundred !== 12) {
    return `${date}nd`
  }
  if (moduloTen === 3 && moduloHundred !== 13) {
    return `${date}rd`
  }
  return `${date}th`
}

class DayCalendar extends Component {
  constructor(props) {
    super(props)
    this.calendarBody = createRef()
  }

  componentDidMount = () => {
    const { day } = this.props
    this.startOn(day)
  };

  startOn = hour => {
    this.calendarBody.current.scrollBy({
      top: 0,
      left: hour * cellWidthDayView
    })
  };

  formatHours = hour => {
    if (hour > 12) return `${hour - 12}PM`
    if (hour === 12) return `${hour}PM`
    return `${hour}AM`
  };

  next = () => {
    const { onDayChange, setDay, day } = this.props
    const newDay = new Date(moment(day).add(1, 'day'))
    setDay(newDay)
    onDayChange(day, newDay)
  };

  prev = () => {
    const { onDayChange, setDay, day } = this.props
    const newDay = new Date(moment(day).add(-1, 'day'))
    setDay(newDay)
    onDayChange(day, newDay)
  };

  nextMonth = () => {
    const { onDayChange, setDay, day } = this.props
    const newDay = new Date(moment(day).add(1, 'month'))
    setDay(newDay)
    onDayChange(day, newDay)
  };

  prevMonth = () => {
    const { onDayChange, setDay, day } = this.props
    const newDay = new Date(moment(day).add(-1, 'month'))
    setDay(newDay)
    onDayChange(day, newDay)
  };

  render() {
    const { events, day } = this.props

    events.sort((a, b) => a.startTime.getHours() - b.startTime.getHours())

    const history = []

    return (
      <DayCalendarDiv id='day-calendar'>
        <div className='calendar-header'>
          <div className='month' style={{ marginLeft: '430px' }}>
            <ul>
              <NavArrow
                className='navigation'
                onClick={() => this.prev()}
                role='button'
              >
                &#10094;
              </NavArrow>
              <Li>
                <DisplayText
                  text={`${weekdays[day.getDay()]} ${addSuffix(day.getDate())}`}
                />
              </Li>
              <NavArrow
                role='button'
                className='navigation'
                onClick={() => this.next()}
              >
                &#10095;
              </NavArrow>
            </ul>
          </div>
          <div className='month'>
            <ul>
              <NavArrow className='navigation' onClick={() => this.prevMonth()}>
                &#10094;
              </NavArrow>
              <Li className=''>
                <DisplayText
                  text={`${months[day.getMonth()]} ${day.getFullYear()}`}
                />
              </Li>
              <NavArrow className='navigation' onClick={() => this.nextMonth()}>
                &#10095;
              </NavArrow>
            </ul>
          </div>
        </div>
        <div className='calendar-body' ref={this.calendarBody}>
          <ul id='day-time'>
            {[...Array(24)].map((el, index) => (
              <Li key={Math.random()}>
                <DisplayText text={this.formatHours(index)} />
              </Li>
            ))}
          </ul>

          <ul id='days'>
            {events.map(event => {
              if (!compareDate(event.startTime, day)) return null
              event.startTime = new Date(event.startTime)
              const time = event.startTime.getHours()
              const minutPush =
                event.startTime.getMinutes() * (cellWidthDayView / 60)
              const duration =
                ((event.endTime.getTime() - event.startTime.getTime()) /
                  60000) *
                (cellWidthDayView / 60)
              const exist = history.filter(
                el =>
                  el.time === time ||
                  (el.time * cellWidthDayView + el.minutPush <
                    time * cellWidthDayView + minutPush &&
                    time * cellWidthDayView + minutPush <
                      el.time * cellWidthDayView + el.minutPush + el.duration)
              )

              history.push({ time, duration, minutPush })
              return (
                <Event
                  key={Math.random()}
                  style={{
                    left: `${time * cellWidthDayView}px`,
                    top: `${exist.length * 32}px`,
                    marginLeft: `${minutPush}px`,
                    width: `${duration}px`
                  }}
                  ttitle={event.title}
                />
              )
            })}
            {[...Array(24 * 18)].map(() => (
              <Li style={{}} key={Math.random()} />
            ))}
          </ul>
        </div>
      </DayCalendarDiv>
    )
  }
}

DayCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.object,
      fontSize: PropTypes.number
    })
  ),
  onDayChange: PropTypes.func,
  day: PropTypes.instanceOf(Date),
  setDay: PropTypes.func
}

DayCalendar.defaultProps = {
  events: [],
  onDayChange: () => null,
  day: new Date(),
  setDay: () => null
}

export default DayCalendar
