import styled from "styled-components";

const white000 = "#ffffff";
const minWidth = "720px";
const primaryColor = "#3359db";

const DayCalendarDiv = styled.div`
background: ${white000}
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
    border: 1px solid #f1f0f0;
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
    color: #333a3f;
    font-size: 14px;
    font-family: Verdana, sans-serif;
    line-height: 17px;
    text-align: center;
}
.calendar-body {
    width: 100%;
    overflow-x: scroll;
    height: 650px !important;
}
.calendar-body::-webkit-scrollbar {
    height: 7px;
    box-sizing: border-box;
    border: 1px solid #E3E6E7;
    border-radius: 5.5px;
    background-color: #E3E6E7;
}
.calendar-body::-webkit-scrollbar-thumb {
    &:horizontal{
        height: 6px;
        border-radius: 5.5px;
        background-color: #2c7cf1;
    }
}

#day-time {
    margin: 0;
    padding: 0;
    border-bottom: 1px dashed #E3E6E7;
}
#day-time li {
    color: map-get($color-gray, 0);
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    padding: 8px 0 16px 8px;
    border-left: 1px solid #E3E6E7;
    overflow: auto;
    border-top: 1px solid #E3E6E7;
}
#days {
    padding: 0;
    margin: 0;
}
#days li {
    list-style-type: none;
    font-size: 12px;
    font-weight: 500;
    color: map-get($color-white, 600);
    height: 32px;
    border-left: 1px solid #E3E6E7;
    border-bottom: 1px dashed #E3E6E7;
    
}
#days li.active {
    background: $color-green-light;
    color: #ffffff !important;
}

.event {
    margin: 0.2rem 0rem;
    border-radius: 5px;
    background-color: rgba(44,124,241,0.11);
    padding: 5px 10px;
    color: #333a3f;
    position: absolute;
    font-family: Verdana, sans-serif;
    font-size: 12px;
    line-height: 15px;

    span {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.event span a{
color: #333a3f;
}
#days,
#day-time {
    display: grid;
    grid-template-columns: repeat(24, [col] 150px);
    grid-template-rows: 1fr;
    position: relative;
}
`;

export default DayCalendarDiv;
