import styled from "styled-components";

const white000 = "#ffffff";
const minWidth = "720px";
const primaryColor = "#3359db";
const white100 = "#f1f0f0";
const white500 = "#E3E6E7";
const white400 = "#c3c1c1";
const black700 = "#333a3f";
const black900 = "#000000";
const gray0 = "#333a3f";
const greenLight = "#4aa071";
const colorNextButton = "#2c7cf1";

const VerticalDayCalendarDiv = styled.div`
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
  .calendar-body {
    width: 100%;
    overflow-y: scroll;
    height: 600px;
  }
  .calendar-body::-webkit-scrollbar {
    width: 7px;
    box-sizing: border-box;
    border: 1px solid ${white500};
    border-radius: 5.5px;
    background-color: ${white500};
  }
  .calendar-body::-webkit-scrollbar-thumb {
    &:vertical {
      height: 6px;
      border-radius: 5.5px;
      background-color: ${colorNextButton};
    }
  }

  #day-time {
    margin: 0;
    padding: 0;
    border-bottom: 1px dashed ${white500};
  }
  #day-time li {
    color: ${gray0});
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    // letter-spacing: 2px;
    padding: 8px 0 16px 8px;
    border-left: 1px solid ${white500};
    overflow: auto;
    border-top: 1px solid ${white500};
  }
  #days {
    padding: 0;
    margin: 0;
  }
  #days li {
    list-style-type: none;
    font-size: 12px;
    font-weight: 500;
    color: ${gray0};
    height: 48px;
    text-align: right;
    border-left: 1px solid ${white500};
    border-top: 1px dashed ${white500};
  }

  .hour {
    // width: 50px;
    padding-right: 10px;
  }

  .events-cells {
    display: flex;
    flex-wrap: wrap;
  }

  #days li.active {
    background: ${greenLight};
    color: ${white000} !important;
  }

  .event {
    margin: 0 0 0 2px;
    border-radius: 5px;
    background-color: rgba(44, 124, 241, 0.11);
    padding: 5px 10px;
    color: ${black700};
    font-family: Verdana, sans-serif;
    font-size: 12px;
    line-height: 15px;
    flex: 1;
    text-align: left;
    span {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .event span a {
    color: ${black700};
  }
  #days,
  #day-time {
    display: grid;
    grid-template-columns: 0.07fr 1fr;
    grid-template-rows: 1fr;
    position: relative;
  }
`;

export default VerticalDayCalendarDiv;
