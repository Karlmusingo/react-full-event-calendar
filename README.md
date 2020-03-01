# react-full-event-calendar

> React component for events

[![NPM](https://img.shields.io/npm/v/react-full-event-calendar.svg)](https://www.npmjs.com/package/react-full-event-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-full-event-calendar
```

or

```bash
yarn add react-full-event-calendar
```

## Usage

```jsx
import Calendar from "react-full-event-calendar";

const events = [
  {
    startTime: new Date(moment().add(2, "hour")),
    endTime: new Date(moment().add(3, "hour")),
    title: "working in the weekend"
  },
  {
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
    title: "working in the weekend"
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, "hour")),
    title: "working in the weekend"
  }
];

<Calendar events={events} />;
```

## Props

| Property            | Type                                      | Default    | Description                                                                |
| ------------------- | ----------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| events              | Array                                     | Required   | Events to display on the calendar                                          |
| dayOrientation      | String                                    | horizontal | The orientation of the day calendar, either `'vertical'` or `'horizontal'` |
| defautlCalendarView | String                                    | week       | The default calendar to show, either `'day'`, `'week'` or `'month'`        |
| defaultDate         | Date                                      | new Date() | The date to start on when mounted                                          |
| onDayChange         | func(day, newDay)                         |            | Callback when the day change on day calendar                               |
| onWeekChange        | func(newStartOfTheWeek, newEendOfTheWeek) |            | Callback when the week change on week calendar                             |
| onMonthChange       | func(newMonth, newYear)                   |            | Callback when the month change on month calendar                           |

## Event Objects

| Key       | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| title     | String | true     | The title of the event      |
| startTime | Date   | true     | The start time of the event |
| endTime   | Date   | true     | The end time of the event   |

## DEMO

[Demo](https://karlmusingo.github.io/react-calendar-from-scratch/)

## Authors

- [Karl Musingo](https://github.com/karlmusingo/)
- [Emmanuel Rukundo](https://github.com/EmyRukundo/)

See the list of all [contributors](https://github.com/Karlmusingo/react-full-event-calendar/contributors) who participated in this project.

## License

MIT © [Karlmusingo](https://github.com/Karlmusingo) [Emmanuel Rukundo](https://github.com/EmyRukundo/)
