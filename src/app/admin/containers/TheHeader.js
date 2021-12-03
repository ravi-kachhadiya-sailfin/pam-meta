import React  from 'react';
import propTypes from "prop-types";
import {  useHistory } from 'react-router-dom';
import NavBar from '../admin_navbar/NavBar';
// import { AppStoreContext } from "app/shared/store/AppStoreProvider";
import { ROUTES } from 'app/Routes';

const Header = (props) => {
  const history = useHistory();


  const MENU_ITEMS = [
    {
      title: "Dashboard",
      isAllow: true,
      onClick: () => {
        history.push(ROUTES.Dashboard);
      },
    },
    {
      title: "Users",
      isAllow: true,
      onClick: () => history.push(ROUTES.Users),
    },
    {
      title: "Content/Tools",
      isAllow: true,
      onClick: ()=>history.push(ROUTES.ContentAndTools)
    },
    {
      title: "Assessment/Survey",
      isAllow: true,
      onClick: () => history.push(ROUTES.AssessmentsAndSurvey),
    },
    {
      title: "Web Analytics",
      isAllow: true,
      onClick: () => history.push(window.open('https://analytics.google.com/analytics/web/')),
    },
  ];

  return (
    <>
      <NavBar menuItems={MENU_ITEMS} />
      {props.children}
      {/* <Footer /> */}
    </>
  );
}

Header.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default Header;