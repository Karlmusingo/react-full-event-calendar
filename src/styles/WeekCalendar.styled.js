import styled from "styled-components";

const white000 = "#ffffff";
const minWidth = "720px";
const primaryColor = "#3359db";
const white100 = "#f1f0f0";
const white500 = "#E3E6E7";
const white400 = "#c3c1c1";
const white700 = "#c7c6c6";
const black700 = "#333a3f";
const black900 = "#000000";
const gray0 = "#333a3f";
const gray1300 = "rgba(51,58,63,0.53)";
const greenLight = "#4aa071";

// const dayWidth = 100% / 8

const WeekCalendarDiv = styled.div`
  background: ${white000};
  min-width: ${minWidth};

  .calendar-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    height: 42px;
    margin-bottom: 20px;
  }
  .day {
    justify-self: end !important;
    margin-right: 14px;
  }
  .month {
    padding: 10px 15px;
    width: 198px;
    justify-self: start;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid ${white100};
    border-radius: 21px;
    margin: 8px;
  }
  .month ul {
    margin: 0;
    padding: 0;
    width: 198px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .month ul li {
    color: ${black700};
    font-size: 14px;
    // letter-spacing: 3px;
    font-family: Verdana, sans-serif;
    line-height: 17px;
    text-align: center;
  }
  #weekdays {
    margin: 0;
    padding: 0;
    border-bottom: 1px dashed ${white500};
  }
  #weekdays li {
    color: map-get($color-gray, 0);
    padding: 8px 0 16px 8px;
    font-size: 12px;
    text-transform: uppercase;
    border-left: 1px solid ${white500};
    font-family: Verdana, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    border-top: 1px solid ${white500};
  }
  #days {
    padding: 0;
    margin: 0;
    height: 600px;
  }

  #days li {
    list-style-type: none;
    font-size: 12px;
    font-weight: 500;
    color: ${gray1300};
    height: 32px;
    border-left: 1px solid ${white500};
    border-bottom: 1px dashed ${white500};
  }

  #days li.active {
    background: $color-green-light;
    color: ${white000} !important;
  }
  .currentDay {
    color: ${white000} !important;
    font-size: 15px !important;
    border-radius: 6px;
    background-color: rgb(8, 8, 243);
    text-align: center;
    padding: 4px;
  }

  .event {
    padding: 5px 10px;
    color: ${black700};
    font-family: Verdana, sans-serif;
    font-size: 12px;
    line-height: 15px;

    span {
      display: grid;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: rgba(44, 124, 241, 0.11);
      justify-content: space-between;
      border-radius: 5px;
    }
  }
  .event span a {
    color: ${white700};
  }

  #weekdays {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  #weekdays li {
    text-align: center;
  }

  #days {
    display: flex;
    flex-wrap: wrap;
    overflow: overlay !important;
    z-index: -1;

    li {
      width: calc(99% / 8);
      display: flex;
      text-align: center;
    }

    .hours {
      padding: 0.6em 0 0 0.5em;
    }
  }
`;

export default WeekCalendarDiv;
