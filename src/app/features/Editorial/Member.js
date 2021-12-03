import React from "react";
import { Para } from "./Editorial";
const Member = (props) => {
  return (
    <div className="member-card">
      <img alt={"member"} src={props.img} />
      <Para className="normal-primary-text font-weight-bold">{props.name}</Para>
      <Para className="normal-primary-text member-details">{props.details}</Para>
      {/* <div style={{ width: "80%", fontSize: "20px", color: "#09425A" }}>{props.details}</div> */}
    </div>
  )
}

Member.propTypes = {};

export default Member;
