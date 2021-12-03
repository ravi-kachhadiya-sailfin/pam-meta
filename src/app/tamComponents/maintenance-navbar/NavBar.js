import React, { useEffect, useState } from "react";
import {
  DefaultNavBar,
  NavBarBrand,
  NavBarSubBrand,
  NavBarDonateButtonMobile,
  NavBarSection,
  NavBarHeadline,
} from "./NavBar.styles";
import PopUp from "./Popup";

import { handleOpen } from 'app/shared/Utils/index';

import logo1 from "app/shared/assets/images/logos/logo1.svg";
import stanfordMedLogo from "app/shared/assets/images/logos/logo2.svg";
import logomobile from "app/shared/assets/images/logos/logomobile.svg";
import heart from "app/shared/assets/images/logos/heart.svg";
import NavBarMenuList from "./NavBarMenuList";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { MetaContext } from "app/shared/context/MetaProvider";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "react-router-dom";



/*Navigation Bar for the application.
 *
 */
const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { meta } = React.useContext(MetaContext);
  const [isDonate, setIsDonate] = useState(false)
  const { pathname: currentPathname } = useLocation();


  const menuItems = {
    home: false,
    myProgress: false,
    tools: false,
    resources: false,
    aboutme: false,
    myProfile: false,
    faqs: false,
    about: false,
    profile: false,
    feedback: false,
    donate: false
  }

  const [selectedMenu, setSelectedMenu] = React.useState(menuItems)
  const [selectedMenuItem, setSelectedMenuItem] = useState();
  const [, setFeedback] = useState(false);

  useEffect(() => {
    setSelectedMenuItem(Object.keys(selectedMenu).find(key => selectedMenu[key]));
  }, [selectedMenu])


  const handleDonate = () => {
    setSelectedMenu({ ...selectedMenu, [selectedMenuItem]: false, donate: true })
    // window.open('https://medicalgiving.stanford.edu/', '_blank');

    setIsDonate(true);
  };
  const openPopup = (event) => {
    console.log("event", event)
    setAnchorEl(event.currentTarget);
  };

  const feedbackPopUpClose = (value) => {
    console.log("feedback:", value)
    setFeedback(value);
    setSelectedMenu({ ...selectedMenu, "feedback": value });
  }

  const donatePopupClose = () => {
    setSelectedMenu({ ...selectedMenu, "donate": false });
  }




  useEffect(() => {
    if (anchorEl) {
      handleOpen();
    }
  }, [anchorEl]);

  console.log("path", currentPathname);
  return (
    <NavBarSection className={["/", "/home", "/faq"].includes(props?.location?.pathname) && "header-over-banner"}>
      <Helmet>

        {/* Primary Meta Tags */}
        <title>{meta.title}</title>
        <link rel="canonical" href={meta.url} />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Helmet>


      <NavBarHeadline>Crisis Help Lines: For immediate help Text <Link to="#">HOME</Link> to <Link to="#">741741</Link> or Call <a href={"tel:1-800-273-8255"} style={{ cursor: "pointer" }}>1-800-273-8255</a> International numbers can be found <a href="https://www.opencounseling.com/suicide-hotlines" target="_blank" rel="noreferrer" style={{ cursor: "pointer" }}>here</a></NavBarHeadline>
      <section
        style={{
          width: "100%",
        }}
      >
        <DefaultNavBar style={{ padding: 5 }}>
          <div className="container-fluid">
            <div className="header_wrapper">
              <div className="navbar-header">
                <NavBarBrand>
                  <img src={logo1} alt="PAM Pause A Moment" />
                  <img className="mobile-logo" src={logomobile} alt="PAM Pause A Moment" />
                </NavBarBrand>
                <NavBarSubBrand>
                  <img src={stanfordMedLogo} alt="Stanford medicine" />
                </NavBarSubBrand>
                <div className="search_btn_donate">
                  <NavBarDonateButtonMobile onClick={handleDonate}>
                    <img src={heart} alt="PAM Pause A Moment" />
                    Donate</NavBarDonateButtonMobile>
                </div>
              </div>
              <NavBarMenuList
                searchBar={false}
                menuItems={props.menuItemsHorizontal}
                popupOpenHandler={openPopup}
                donatePopupClose={donatePopupClose}
                setFeedback={feedbackPopUpClose}
              />
            </div>

          </div>
        </DefaultNavBar>
      </section>
      {isDonate && <PopUp setShowPopup={(bl) => { setIsDonate(bl) }} donatePopupClose={donatePopupClose} />}
    </NavBarSection >
  );
};
NavBar.propTypes = {
  /* List of items which needs to be in Menu*/
  menuItems: PropTypes.array,
};
export default withRouter(NavBar);
