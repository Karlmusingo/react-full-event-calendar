/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import moment from 'moment'
import { weekdays, months } from '../utils/constants'
import DisplayText from './DisplayText'
import DisplayEvent from './DisplayEvent'

import MonthCalendarDiv from '../styles/MonthCalendar.styled'
import { NavArrow, Li } from '../styles/styled'

const today = new Date()

class MonthCalendar extends Component {
  state = { month: today.getMonth(), year: today.getFullYear() };

  componentDidMount = () => {
    const { onMonthChange, day = today, setDay } = this.props
    this.setState({
      month: day.getMonth(),
      year: day.getFullYear()
    })
  };

  componentDidUpdate = () => {
    const { onMonthChange, day, setDay } = this.props
    const { month, year } = this.state
    if (day.getMonth() !== month || day.getFullYear() !== year) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(
        {
          month: day.getMonth(),
          year: day.getFullYear()
        },
        () => onMonthChange(this.state.month, this.state.year)
      )
    }
  };

  next = () => {
    const { day, setDay } = this.props
    const newDay = new Date(moment(day).add(1, 'month'))
    setDay(newDay)
  };

  prev = () => {
    const { day, setDay } = this.props
    const newDay = new Date(moment(day).add(-1, 'month'))
    setDay(newDay)
  };

  render() {
    const { events } = this.props
    const { month, year } = this.state

    const numberOfDays = new Date(year, month + 1, 0).getDate()
    const numberOfDaysPreviousMonth = new Date(year, month, 0).getDate()
    const skipDays = new Date(year, month).getDay()

    return (
      <MonthCalendarDiv id='month-calendar'>
        <div className='calendar-header'>
          <div className='month'>
            <ul>
              <NavArrow
                id='prev'
                className='navigation'
                onClick={() => this.prev()}
              >
                &#10094;
              </NavArrow>
              <Li id='month'>
                <DisplayText text={`${months[month]} ${year}`} />
              </Li>
              <NavArrow
                id='next'
                className='navigation'
                onClick={() => this.next()}
              >
                &#10095;
              </NavArrow>
            </ul>
          </div>
        </div>

        <ul id='weekdays'>
          {// eslint-disable-next-line no-shadow
            weekdays.map(day => (
              <Li key={Math.random()}>{day}</Li>
            ))}
        </ul>

        <ul id='days'>
          {[
            ...Array(skipDays).fill('*'),
            ...Array(numberOfDays).keys(),
            ...Array(42 - (skipDays + numberOfDays)).keys()
            // eslint-disable-next-line no-shadow
          ].map((day, index) =>
            day === '*' ? (
              <Li className='empty-cells' key={Math.random()}>
                {numberOfDaysPreviousMonth - (skipDays - 1) + index}
              </Li>
            ) : (
              <Li
                className={
                  index > numberOfDays + skipDays - 1 ? 'empty-cells' : ' '
                }
                key={Math.random()}
              >
                {day + 1 &&
                day + 1 === today.getDate() &&
                today.getMonth() === month &&
                today.getFullYear() === year &&
                index < skipDays + numberOfDays ? (
                  <span className='currentDay'>{day + 1}</span>
                  ) : (
                    day + 1
                  )}
                &nbsp;
                <br />
                {events.map(event => {
                  if (
                    day + 1 === event.startTime.getDate() &&
                    month === event.startTime.getMonth() &&
                    year === event.startTime.getFullYear() &&
                    index < skipDays + numberOfDays
                  ) {
                    return (
                      <DisplayEvent
                        className='event-month-calendar'
                        key={Math.random()}
                        text={`${event.startTime.getHours()}:${event.startTime.getMinutes()}`}
                        name={event.title}
                      />
                    )
                  }
                })}
              </Li>
            )
          )}
        </ul>
      </MonthCalendarDiv>
    )
  }
}

export default MonthCalendar
