import React from "react";
import PropTypes from "prop-types";
import { DiscoverToolsTool } from "./ToolTab.styles";

/* Individual tab component*/
function ToolTab(props) {
  return (
    <DiscoverToolsTool className="main_discover_tools">
      <div className="tool" onClick={props.onClick}>
        <img src={props.icon} width="70px" alt={props.altText} />
        <div className="label">{props.label}</div>
      </div>
    </DiscoverToolsTool>
  );
}

ToolTab.propTypes = {
  /*Icon for the Tab*/
  icon: PropTypes.string,
  /*Lable for the Tab*/
  label: PropTypes.element,
  /*Alternative text for the Tab*/
  altText: PropTypes.string,
  /*Onclick event rendering*/
  onClick: PropTypes.func,
};

export default ToolTab;
