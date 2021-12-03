/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PropTypes from "prop-types";

const NavBarMenuItem = (props) => {
  // console.log(props.title, props.onClick)
  let arr = ["Home", "About", "My Progress", "Tools", "FAQ"]
  return props.isDonateButton ? (
    <li className="donate-button" onClick={() => { props.toggleDonet(true) }}>
      <a target="_blank" rel="noreferrer">Donate</a>
    </li>
  ) : (
    <li className={props.isActive ? "active" : ""} id={props.id}>
      <a onClick={(event) => { props.title.toLowerCase() === "feedback" ? props.setFeedback(true) : props.onClick(event) }} href={props.href ? props.href : arr.indexOf(props.title) === -1 ? "#" : ""}>
        {props.title}
      </a>
    </li>
  );
};

NavBarMenuItem.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  href: PropTypes.func,
  isDonateButton: PropTypes.bool,
};

export default NavBarMenuItem;
