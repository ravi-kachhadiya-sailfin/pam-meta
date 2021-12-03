import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavBarListContentWrapper } from "./NavBarMenuList.styles";
import NavBarMenuItem from "./NavBarMenuItem";
import search from "app/shared/assets/images/search.svg";
import PopUp from "./Popup";

/*
 * Navigation Bar Menu list. Responsible to render specific items to menu
 */
const NavBarMenuList = (props) => {
  const [text, setText] = useState("")
  const [isDonate, setIsDonate] = useState(false)
  const submitSearch = () => {
    if (text) {
      sessionStorage.setItem("search", text)
      window.location.href = "/search/" + text
    }
  }
  return (
    <div id="navbar2" className="navbar-collapse collapse">
      <NavBarListContentWrapper>
        <ul className="nav navbar-nav navbar-right">
          {props.searchBar ? (
            <li>
              <div className="search-box">
                <input type="search" onKeyUp={(e) => { if (e.keyCode === 13) { submitSearch() } }} value={text} onChange={(e) => { setText(e.target.value) }} id="search" autoComplete="off" />
                {/* <i onClick={() => { submitSearch() }} className="fa fa-search" /> */}
                <img src={search} alt="search" onClick={() => { submitSearch() }} />
              </div>
            </li>
          ) : null}
          {props.menuItems.map((item, i) => (
            <>
              {item.isAllow === true && <NavBarMenuItem
                title={item.title}
                isDonateButton={item.isDonateButton}
                onClick={item.openProfilePopup ? props.popupOpenHandler : item.onClick}
                isActive={item.isActive}
                key={item.title + i}
                toggleDonet={(bl) => { setIsDonate(bl) }}
                setFeedback={props.setFeedback}
              />}
            </>
          ))}
        </ul>
      </NavBarListContentWrapper>
      {isDonate && <PopUp setShowPopup={(bl) => { setIsDonate(bl) }} donatePopupClose={props.donatePopupClose} />}
    </div>
  );
};

NavBarMenuList.propTypes = {
  /*Menu Items*/
  menuItems: PropTypes.array.isRequired,
  /*True if menu requires search bar*/
  searchBar: PropTypes.bool.isRequired,
  popupOpenHandler: PropTypes.func,
};

export default NavBarMenuList;
