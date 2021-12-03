import React from "react";
import btn from '../../shared/assets/images/preopt.svg'
const Member = (props) => {
  return (
    <>
      <div className="row" onClick={() => { props.selectText(props.text) }} style={{ paddingLeft: "15px", cursor: "pointer" }}>
        <img src={btn} alt={"img"} />
        <span style={{ marginLeft: 15, fontSize: 20, color: "#0099BA" }}>{props.text}</span>
      </div>
    </>
  )
}

Member.propTypes = {};

export default Member;
