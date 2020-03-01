/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DayCalendar from './DayCalendar'
import WeekCalendar from './WeekCalendar'
import MonthCalendar from './MonthCalendar'
import VerticalDayCalendar from './VerticalDayCalendar'

import { Button } from '../styles/styled'

const DivSetting = styled.div`
  display: flex;
  position: absolute;
  padding: 7px;
`

class Calendar extends Component {
  state = { calendarView: 'day', day: new Date() };

  componentDidMount = () => {
    const { defaultCalendarView, defaultDate } = this.props
    this.setState({
      calendarView: defaultCalendarView,
      day: defaultDate
    })
  };

  calendarSetting = view => {
    this.setState({
      calendarView: view
    })
  };

  setDay = day => {
    this.setState({
      day
    })
  };

  render() {
    const {
      events,
      dayOrientation,
      onDayChange,
      onWeekChange,
      onMonthChange
    } = this.props

    const { calendarView, day } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <DivSetting>
          <Button
            className={calendarView === 'day' ? 'active' : 'day'}
            onClick={() => this.calendarSetting('day')}
          >
            D
          </Button>
          <Button
            className={calendarView === 'week' ? 'active' : ''}
            onClick={() => this.calendarSetting('week')}
          >
            W
          </Button>
          <Button
            className={calendarView === 'month' ? 'active' : ''}
            onClick={() => this.calendarSetting('month')}
          >
            M
          </Button>
        </DivSetting>
        {calendarView === 'day' ? (
          dayOrientation === 'horizontal' ? (
            <DayCalendar
              events={events}
              onDayChange={onDayChange}
              day={day}
              setDay={this.setDay}
            />
          ) : (
            <VerticalDayCalendar
              events={events}
              onDayChange={onDayChange}
              day={day}
              setDay={this.setDay}
            />
          )
        ) : null}
        {calendarView === 'week' ? (
          <WeekCalendar
            events={events}
            onWeekChange={onWeekChange}
            day={day}
            setDay={this.setDay}
          />
        ) : null}
        {calendarView === 'month' ? (
          <MonthCalendar
            events={events}
            onMonthChange={onMonthChange}
            day={day}
            setDay={this.setDay}
          />
        ) : null}
      </div>
    )
  }
}

Calendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date)
    })
  ).isRequired,
  dayOrientation: PropTypes.oneOf(['horizontal', 'vertical']),
  defaultCalendarView: PropTypes.oneOf(['day', 'week', 'month']),
  onDayChange: PropTypes.func,
  onWeekChange: PropTypes.func,
  onMonthChange: PropTypes.func
}

Calendar.defaultProps = {
  dayOrientation: 'horizontal',
  defaultCalendarView: 'week',
  defaultDate: new Date(),

  onDayChange: () => null,
  onWeekChange: () => null,
  onMonthChange: () => null
}

export default Calendar
