/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { weekdays, months, cellHeight, monthsShort } from "../utils/constants";
import displayHours from "../utils/displayHours";
import Event from "./Event";
import DisplayText from "./DisplayText";

import WeekCalendarDiv from "../styles/WeekCalendar.styled";
import { NavArrow, Li } from "../styles/styled";

const today = new Date();

class WeekCalendar extends Component {
  state = {
    month: today.getMonth(),
    year: today.getFullYear(),
    firstDayOfTheWeek: 0,
    lastDayOfTheWeek: 7
  };

  componentDidMount = () => {
    const { day = today } = this.props;

    const monthDefault = day.getMonth();
    const yearDefault = day.getFullYear();
    const firstDayOfTheWeekDefault = day.getDate() - day.getDay();
    const lastDayOfTheWeekDefault = new Date(
      yearDefault,
      monthDefault,
      firstDayOfTheWeekDefault + 6
    ).getDate();

    this.setState({
      month: monthDefault,
      year: yearDefault,
      firstDayOfTheWeek: firstDayOfTheWeekDefault,
      lastDayOfTheWeek: lastDayOfTheWeekDefault
    });
  };

  componentDidUpdate = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const firstDayOfTheWeekDefault = day.getDate() - day.getDay();
    const monthDefault = day.getMonth();
    const yearDefault = day.getFullYear();

    if (firstDayOfTheWeekDefault !== firstDayOfTheWeek) {
      this.setState(
        {
          month: monthDefault,
          year: yearDefault,
          firstDayOfTheWeek: firstDayOfTheWeekDefault,
          lastDayOfTheWeek: new Date(
            year,
            month,
            firstDayOfTheWeekDefault + 6
          ).getDate()
        },
        () => {
          const startOfTheWeek = new Date(
            this.state.year,
            this.state.month,
            day.getDate() - day.getDay()
          );
          const endOfTheWeek = new Date(
            this.state.year,
            this.state.month,
            this.state.firstDayOfTheWeekDefault + 6
          );

          onWeekChange(startOfTheWeek, endOfTheWeek);
        }
      );
    }
  };

  displayMonth = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const firstDayOfTheWeekDefault = day.getDate() - day.getDay();

    const startOfTheWeek = new Date(year, month, day.getDate() - day.getDay());
    const endOfTheWeek = new Date(year, month, firstDayOfTheWeekDefault + 6);
    if (startOfTheWeek.getMonth() !== endOfTheWeek.getMonth()) {
      if (startOfTheWeek.getFullYear() !== endOfTheWeek.getFullYear()) {
        return `${
          monthsShort[startOfTheWeek.getMonth()]
        } ${startOfTheWeek.getFullYear()} - 
                        ${
                          monthsShort[endOfTheWeek.getMonth()]
                        } ${endOfTheWeek.getFullYear()}`;
      }
      return `${monthsShort[startOfTheWeek.getMonth()]} - ${
        monthsShort[endOfTheWeek.getMonth()]
      } ${year}`;
    }
    return `${months[month]} ${year}`;
  };

  next = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const newDay = new Date(moment(day).add(1, "week"));
    setDay(newDay);
  };

  prev = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const newDay = new Date(moment(day).add(-1, "week"));
    setDay(newDay);
  };

  nextMonth = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const newDay = new Date(moment(day).add(1, "month"));
    setDay(newDay);
  };

  prevMonth = () => {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    const newDay = new Date(moment(day).add(-1, "month"));
    setDay(newDay);
  };

  render() {
    const { events = [], onWeekChange, day, setDay } = this.props;
    const { month, year, firstDayOfTheWeek, lastDayOfTheWeek } = this.state;
    return (
      <WeekCalendarDiv id="week-calendar">
        <div className="calendar-header">
          <div className="month day">
            <ul>
              <NavArrow className="navigation" onClick={() => this.prev()}>
                &#10094;
              </NavArrow>
              <Li>
                <DisplayText
                  text={`Sun ${new Date(
                    year,
                    month,
                    firstDayOfTheWeek
                  ).getDate()} - Sat ${lastDayOfTheWeek}`}
                />
              </Li>
              <NavArrow className="navigation" onClick={() => this.next()}>
                &#10095;
              </NavArrow>
            </ul>
          </div>
          <div className="month">
            <ul>
              <NavArrow className="navigation" onClick={() => this.prevMonth()}>
                &#10094;
              </NavArrow>
              <Li className="">
                <DisplayText text={this.displayMonth()} />
              </Li>
              <NavArrow className="navigation" onClick={() => this.nextMonth()}>
                &#10095;
              </NavArrow>
            </ul>
          </div>
        </div>
        <ul id="weekdays">
          <Li>Time</Li>
          {weekdays.map((weekday, index) => (
            <Li key={Math.random()}>
              <span
                className={
                  weekday &&
                  weekday === today.toDateString().slice(0, 3) &&
                  day.getDate() === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear()
                    ? "currentDay"
                    : " "
                }
              >
                {`${weekday} ${new Date(
                  year,
                  month,
                  firstDayOfTheWeek + index
                ).getDate()}`}
              </span>
            </Li>
          ))}
        </ul>
        <ul id="days">
          {[...Array(188)].map((value, index) => (
            <Li key={Math.random()}>
              {index % 8 === 0 ? (
                <span className="hours">{displayHours(index / 8)}</span>
              ) : null}
              {events.map(event => {
                const startOfTheWeek = new Date(
                  year,
                  month,
                  firstDayOfTheWeek
                ).getTime();
                const endOfTheWeek = new Date(
                  year,
                  month,
                  lastDayOfTheWeek
                ).getTime();
                if (
                  startOfTheWeek <= event.startTime.getTime() &&
                  event.startTime.getTime() <= endOfTheWeek
                ) {
                  if (index % 7 === event.startTime.getDay()) {
                    if (event.startTime.getHours() === Math.trunc(index / 7)) {
                      const minutPush =
                        event.startTime.getMinutes() * (cellHeight / 60);
                      const duration =
                        ((event.endTime.getTime() - event.startTime.getTime()) /
                          60000) *
                        (cellHeight / 60);
                      return (
                        <div>
                          <Event
                            key={Math.random()}
                            ttitle={event.title}
                            title={`${event.startTime.getHours()}:${event.startTime.getMinutes()} PM`}
                            style={{
                              marginTop: `${minutPush}px`,
                              height: `${duration}px`
                            }}
                          />
                        </div>
                      );
                    }
                  }
                  return null;
                }
                return null;
              })}
            </Li>
          ))}
        </ul>
      </WeekCalendarDiv>
    );
  }
}

WeekCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.object,
      fontSize: PropTypes.number
    })
  )
};

export default WeekCalendar;
