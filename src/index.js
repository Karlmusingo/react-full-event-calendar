import React from "react";
import PropTypes from "prop-types";

import Calendar from "./calendars/index";

const CalendarComponent = props => {
  return <Calendar {...props} />;
};

CalendarComponent.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      startTime: PropTypes.instanceOf(Date),
      endTime: PropTypes.instanceOf(Date)
    })
  ),
  dayOrientation: PropTypes.oneOf(["horizontal", "vertical"]),
  defaultCalendarView: PropTypes.oneOf(["day", "week", "month"]),
  onDayChange: PropTypes.func,
  onWeekChange: PropTypes.func,
  onMonthChange: PropTypes.func
};

CalendarComponent.defaultProps = {
  events: [],
  dayOrientation: "horizontal",
  defaultCalendarView: "week",
  defaultDate: new Date(),

  onDayChange: () => null,
  onWeekChange: () => null,
  onMonthChange: () => null
};

export default CalendarComponent;
