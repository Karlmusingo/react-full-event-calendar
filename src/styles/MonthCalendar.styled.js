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

const MonthCalendarDiv = styled.div`
  background: ${white000};
  min-width: ${minWidth};

  .calendar-header {
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
  }
  .month {
    padding: 10px 15px;
    width: 198px;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid ${white100};
    border-radius: 21px;
    margin: 15px;
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
  }
  #weekdays {
    margin: 0;
    padding: 0;
    border-bottom: 1px dashed ${white500};
    border-top: 1px solid ${white500};
    border-right: 1px solid ${white500};
  }
  #weekdays li {
    color: ${gray0};
    padding: 8px 0 16px 0px;
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    border-left: 1px solid ${white500};
    font-family: Verdana, sans-serif;
    font-size: 12px;
    font-weight: 500;
    // letter-spacing: 2px;
    line-height: 15px;
  }
  #days {
    padding: 0;
    margin: 0;
    overflow: auto;
  }

  .empty-cells {
    color: ${white400} !important;
  }

  #days li {
    list-style-type: none;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    // font-weight: 500;
    color: ${gray0};
    padding: 5px 0 0 0px;
    border-left: 1px solid ${white500};
    border-right: 1px solid ${white500};
    border-bottom: 1px dashed #e3e6e7;
    height: 100px;
  }
  .currentDay {
    color: white !important;
    font-size: 14px !important;
    border-radius: 6px;
    background-color: rgb(8, 8, 243);
    text-align: center;
    padding: 0 4px 0 4px;
  }

  #days span {
    color: ${black900};
  }
  #days span ul {
    margin: 0 0 0 -32px;
    position: sticky;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: space-between;
  }
  #days span ul a {
    padding: 1px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    font-size: 6px;
    font-family: Verdana, sans-serif;
  }
  span ul a::before {
    color: blue;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  #days li.active {
    background: ${greenLight};
    color: #ffffff !important;
  }

  #days,
  #weekdays {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export default MonthCalendarDiv;
