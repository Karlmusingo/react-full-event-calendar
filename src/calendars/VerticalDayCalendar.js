/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DisplayText from "./DisplayText";
import Event from "./Event";
import {
  weekdays,
  months,
  cellHeightVerticalDayView
} from "../utils/constants";
import compareDate from "../utils/compareDate";

import { NavArrow, Li } from "../styles/styled";
import VerticalDayCalendarDiv from "../styles/VerticalDayCalendar.styled";

export const addSuffix = date => {
  const moduloTen = date % 10;
  const moduloHundred = date % 100;
  if (moduloTen === 1 && moduloHundred !== 11) {
    return `${date}st`;
  }
  if (moduloTen === 2 && moduloHundred !== 12) {
    return `${date}nd`;
  }
  if (moduloTen === 3 && moduloHundred !== 13) {
    return `${date}rd`;
  }
  return `${date}th`;
};

class DayCalendar extends Component {
  constructor(props) {
    super(props);
    this.calendarBody = createRef();
  }

  componentDidMount = () => {
    const { day } = this.props;
    this.startOn(day.getHours());
  };

  componentDidUpdate = prevProps => {
    const { day } = this.props;
    if (!compareDate(day, prevProps.day)) {
      let i = 0;
      const allEvents = document.querySelectorAll(".event");
      for (i = 0; i < allEvents.length; i++) {
        allEvents[i].style.width = `${98 / allEvents.length}%`;
      }
      this.startOn(day.getHours());
    }
  };

  formatHours = hour => {
    if (hour > 12) return `${hour - 12}PM`;
    if (hour === 12) return `${hour}PM`;
    return `${hour}AM`;
  };

  startOn = hour => {
    this.calendarBody.current.scrollBy({
      top: hour * cellHeightVerticalDayView,
      left: 0
    });
  };

  next = () => {
    const { onDayChange, day, setDay } = this.props;
    const newDay = new Date(moment(day).add(1, "day"));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  prev = () => {
    const { onDayChange, day, setDay } = this.props;
    const newDay = new Date(moment(day).add(-1, "week"));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  nextMonth = () => {
    const { onDayChange, day, setDay } = this.props;
    const newDay = new Date(moment(day).add(1, "month"));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  prevMonth = () => {
    const { onDayChange, day, setDay } = this.props;
    const newDay = new Date(moment(day).add(-1, "month"));
    setDay(newDay);
    onDayChange(day, newDay);
  };

  render() {
    const { events = [], day } = this.props;
    events.sort((a, b) => a.startTime.getHours() - b.startTime.getHours());
    const history = [];

    return (
      <VerticalDayCalendarDiv id="vertical-day-calendar">
        <div className="calendar-header">
          <div className="month" style={{ marginLeft: "196px" }}>
            <ul>
              <NavArrow
                className="navigation"
                onClick={() => this.prev()}
                role="button"
              >
                &#10094;
              </NavArrow>
              <Li>
                <DisplayText
                  text={`${weekdays[day.getDay()]} ${addSuffix(day.getDate())}`}
                />
              </Li>
              <NavArrow
                role="button"
                className="navigation"
                onClick={() => this.next()}
              >
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
                <DisplayText
                  text={`${months[day.getMonth()]} ${day.getFullYear()}`}
                />
              </Li>
              <NavArrow className="navigation" onClick={() => this.nextMonth()}>
                &#10095;
              </NavArrow>
            </ul>
          </div>
        </div>
        <div className="calendar-body" ref={this.calendarBody}>
          <ul id="days">
            {[...Array(24 * 2)].map((value, index) => {
              if (index % 2 === 0) {
                return (
                  <Li className="hour" key={Math.random()}>
                    <DisplayText text={this.formatHours(index / 2)} />
                  </Li>
                );
              }
              return (
                <Li className="events-cells" style={{}} key={Math.random()}>
                  {events.map(event => {
                    if (!compareDate(event.startTime, day)) return null;
                    event.startTime = new Date(event.startTime);
                    const time = event.startTime.getHours();
                    if (index !== time * 2 + 1) return null;
                    const minutPush =
                      event.startTime.getMinutes() *
                      (cellHeightVerticalDayView / 60);
                    const duration =
                      ((event.endTime.getTime() - event.startTime.getTime()) /
                        60000) *
                      (cellHeightVerticalDayView / 60);
                    const exist = history.filter(
                      el =>
                        el.time === time ||
                        (el.time * cellHeightVerticalDayView + el.minutPush <
                          time * cellHeightVerticalDayView + minutPush &&
                          time * cellHeightVerticalDayView + minutPush <
                            el.time * cellHeightVerticalDayView +
                              el.minutPush +
                              el.duration)
                    );
                    history.push({ time, duration, minutPush });
                    return (
                      <Event
                        key={Math.random()}
                        style={{
                          height: `${duration}px`,
                          marginTop: `${minutPush}px`
                        }}
                        title={event.title}
                      />
                    );
                  })}
                </Li>
              );
            })}
          </ul>
        </div>
      </VerticalDayCalendarDiv>
    );
  }
}

DayCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date)
    })
  )
};

export default DayCalendar;
