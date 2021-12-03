import React from "react";
import { HeaderSection } from "./Header.styles";
import PropType from "prop-types";
import { Grid } from '@material-ui/core';
import { useAuth as TAMAuth } from 'app/features/registration/authService';
// import Popup from './Popup'
//Header component which is divided into 2 parts
// 2) Header Title
// 3) Header Banner
const Header = (props) => {
  const auth = TAMAuth();
  // console.log(auth);

  // function scrollDown(e){
  //   e.preventDefault();
  //   document.querySelector('html, body').animate({ scrollTop: document.querySelector(document.querySelector(this).attr('href')).offset().top}, 500, 'linear');
  // }
  return (
    <HeaderSection>
      {/*Header Title*/}
      <div className="banner-content-wrapper">
        <Grid className={`${auth.isAuthenticated && "welcome_title_auth"} welcome_title`} item lg={auth.isAuthenticated ? 7 : 4} md={auth.isAuthenticated ? 7 : 3} sm={12} xs={12} >
          {props.headerTitle}
        </Grid>
        {/*Header Content*/}
        <Grid item lg={auth.isAuthenticated ? 5 : 12} md={auth.isAuthenticated ? 5 : 12} sm={12} xs={12} >
          {props.headerBanner}
        </Grid>
      </div>
      <div className={`${auth.isAuthenticated && "login_scroll_down"} scroll_down`} >
        <a href="#find-right-tools"><span></span></a>
      </div>
      {/* <Popup /> */}
    </HeaderSection>
  );
};

Header.propTypes = {
  //navigationBar: PropType.element.isRequired,
  headerTitle: PropType.element.isRequired,
  headerBanner: PropType.element,
};

export default Header;
