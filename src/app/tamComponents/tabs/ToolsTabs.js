import React from "react";
import PropTypes from "prop-types";
import { ToolsDiscoverTitle } from "./ToolsTabs.styles";

import ToolTab from "./ToolTab";

/*
 * Tools Tabs. Section of tabs which contains specific ToolTab component
 *
 */
function ToolsTabs(props) {
  return (
    <>
      <ToolsDiscoverTitle>{props.title}</ToolsDiscoverTitle>
      {props.tabsList.map((tab, i) => (
        <ToolTab
          label={<>{tab.label}</>}
          icon={tab.icon}
          altText={tab.altText}
          onClick={tab.clickEvent}
          key={i}
        />
      ))}
    </>
  );
}

ToolsTabs.propTypes = {
  /* List of tab*/
  tabsList: PropTypes.array.isRequired,
  /* Title of the section*/
  title: PropTypes.string.isRequired,
};

export default ToolsTabs;
