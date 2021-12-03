import React from "react";
import btn from '../../shared/assets/images/preopt.svg'
const Member = (props) => {
  return (
    <>
      <div className="row example_listing_block_1" onClick={() => { props.updateText(props.text) }} style={{ cursor: "pointer" }}>
        <div className="list_img_1"><img src={btn} alt={"img"} /></div>
        <div className="example_listing_1">{props.text}</div>
      </div>
    </>
  )
}

Member.propTypes = {};

export default Member;
