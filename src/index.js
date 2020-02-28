import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Calendar from "./calendars/index";

import "./styles.css";

const ExampleComponent = ({ text }) => {
  return (
    <div className="">
      {new Date(moment()).getDate()} Example Component: {text}
      <Calendar />
    </div>
  );
};

ExampleComponent.propTypes = {
  text: PropTypes.string
};

export default ExampleComponent;
