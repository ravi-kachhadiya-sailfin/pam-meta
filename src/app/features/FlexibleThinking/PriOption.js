import React from "react";
import btn from '../../shared/assets/images/preopt.svg'
const Member = (props) => {
  return (
    <>
      <div className="example_listing_block" onClick={() => { props.selectText(props.text) }} style={{ cursor: "pointer" }}>
        <div className="list_img">
          <img src={btn} alt={"img"} />
        </div>
        <div className="example_listing">
          {props.text}
        </div>
      </div>
    </>
  )
}

Member.propTypes = {};

export default Member;
