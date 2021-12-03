import propTypes from "prop-types";
import { useHistory } from 'react-router-dom';

// import NavBar from "./tamComponents/navbar/NavBar";
// import Footer from "./tamComponents/footer/Footer";
import NavBar from '../../tamComponents/navbar/NavBar';
import Footer from '../../tamComponents/footer/Footer'
import { ROUTES } from 'app/Routes';

const Layout = (props) => {
  const history = useHistory();
  // const { setModal } = useContext(AppStoreContext);

  const MENU_ITEMS = [
    {
      title: "Dashboard",
      isAllow: true,
      onClick: () => {
        history.push(ROUTES.default);
      },
    },
    {
      title: "Users",
      isAllow: props.isLoggedIn ? true : false,
      onClick: () => {
        history.push(ROUTES.my_progress);
      },
    },
    {
      title: "Users",
      isAllow: true,
      onClick: () => history.push(ROUTES.tools),
    },
    {
      title: "Content/Tools",
      isAllow: true,
    },
    {
      title: "Assessment/Survey",
      isAllow: true,
      onClick: () => history.push(ROUTES.faq),
    },
    // {
    //   title: "About",
    //   isAllow: true,
    //   onClick: () => history.push(ROUTES.team),
    // },
    // {
    //   title: getUserInfo("name"),
    //   isAllow: true,
    //   openProfilePopup: props.isLoggedIn ? true : false,
    //   onClick: () => setModal({ modalId: 1 }),
    // },
    // {
    //   title: "Donate",
    //   isAllow: true,
    //   isDonateButton: true,
    // },
  ];

  return (
    <>
      <NavBar menuItems={MENU_ITEMS} />
      {props.children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default Layout;