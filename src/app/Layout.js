import { useContext } from 'react';
import propTypes from "prop-types";
import { useHistory } from 'react-router-dom';

import NavBar from "./tamComponents/navbar/NavBar";
import Footer from "./tamComponents/footer/Footer";
import { getUserInfo } from 'app/shared/Utils/userInfo';
import { AppStoreContext } from "app/shared/store/AppStoreProvider";
import { ROUTES } from 'app/Routes';

const Layout = (props) => {
  const history = useHistory();
  const { setModal } = useContext(AppStoreContext);

  const MENU_ITEMS_HORIZANTAL = [
    {
      title: "Home",
      isAllow: true,
      onClick: () => {
        history.push(ROUTES.default);
      },
    },
    {
      title: "My Progress",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => {
        history.push(ROUTES.my_progress);
      },
    },
    {
      title: "Tools",
      isAllow: true,
      onClick: () => history.push(ROUTES.tools),
    },
    // {
    //   title: "Resources",
    //   isAllow: true,
    // },
    {
      title: "FAQ",
      isAllow: true,
      onClick: () => history.push(ROUTES.faq),
    },
    {
      title: "About",
      isAllow: true,
      onClick: () => history.push(ROUTES.team),
    },
    {
      title: "Feedback",
      isAllow: true,
    },
    {
      title: getUserInfo("name"),
      isAllow: true,
      openProfilePopup: props.isLoggedIn ? true : false,
      onClick: () => setModal({ modalId: 1 }),
    },
    {
      title: "Donate",
      isAllow: true,
      isDonateButton: true,
    },
  ];

  // const menuItems = {
  //   home: false,
  //   myProgress: false,
  //   tools: false,
  //   resources: false,
  //   aboutMe: false,
  //   myProfile: false,
  //   faqs: false,
  //   about: false,
  //   donate: false
  // }


  const MENU_ITEMS_VERTICAL = [
    {
      title: "Home",
      isAllow: true,
      onClick: () => {
        history.push(ROUTES.default);
      },
      routeName: "home"
    },

    {
      title: "My Progress",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => {
        history.push(ROUTES.my_progress);
      },
      routeName: "myProgress"
    },
    {
      title: "Tools",
      isAllow: true,
      onClick: () => history.push(ROUTES.tools),
      routeName: "tools"
    },
    {
      title: "Resources",
      isAllow: false,
      onClick: () => { return },
      routeName: "resources"
    },
    {
      title: "FAQs",
      isAllow: true,
      onClick: () => history.push(ROUTES.faq),
      routeName: "faqs"
    },
    {
      title: "About",
      isAllow: true,
      onClick: () => history.push(ROUTES.team),
      routeName: "about"
    },
    {
      title: "Feedback",
      isAllow: true,
      onClick: () => {
      },
      routeName: "feedback"
    },
    {
      title: "My Profile",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => {
        // history.push(ROUTES.my_progress);
      },
      routeName: "myProfile"
    },
    {
      title: "Donate",
      isAllow: false,
      isDonateButton: true,
    },
  ];

  const SUB_MENU_ITEMS_VERTICAL = [
    {
      title: "General Profile",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => history.push(ROUTES.profile),
      routeName: "profile"
    },
    {
      title: "Professional Profile",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => history.push(ROUTES.aboutme),
      routeName: "aboutme"
    },
  ];

  return (
    <>
      <NavBar menuItemsHorizontal={MENU_ITEMS_HORIZANTAL} menuItemsVertical={MENU_ITEMS_VERTICAL} subMenuItemsVertical={SUB_MENU_ITEMS_VERTICAL} />
      {props.children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default Layout;
