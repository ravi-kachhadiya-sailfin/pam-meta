import React from "react";
import {
  DefaultNavBar,
  NavBarBrand,
  NavBarButton,
  NavBarBrandMobile,
  NavBarSearchMobile,
  NavBarDonateButtonMobile,
  NavBarSection,
  ProfilePopoverBox,
  BoxContainerWrapper,
} from "../../tamComponents/navbar/NavBar.styles";
import logo1 from "app/shared/assets/images/logos/logo1.svg";
import NavBarMenuList from "../../tamComponents/navbar/NavBarMenuList";
import { Popover, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { getUserInfo } from "../../shared/Utils/userInfo";
import { ROUTES } from "app/Routes";
import { AppStoreContext } from "app/shared/store/AppStoreProvider";

/*Navigation Bar for the application.
 *
 */
const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setModal } = React.useContext(AppStoreContext);

  const openPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopup = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    props.history.push(ROUTES.default);
    props.history.go(0);
  };

  const profilePopoverItemClick = (item) => {
    setAnchorEl(null);

    switch (item) {
      case "/profile":
      case "/aboutme":
        props.history.push(item);
        break;

      case "logout":
        logOut();
        break;
      default: ;
    }
  };

  return (
    <NavBarSection className="admin-navbar">
      {/* <NavBarHeadline>Crisis Help Lines: For immediate help Text <span style={{ textDecoration: "underline", cursor: "pointer" }}>HOME</span> to <span style={{ textDecoration: "underline", cursor: "pointer" }}>741741</span> or Call <span style={{ textDecoration: "underline", cursor: "pointer" }}>1-800-273-8255</span> International numbers can be found here</NavBarHeadline> */}
      <section className="navbar-section" >
        <DefaultNavBar className="navar-default-section">
          <div className="container-fluid admin-container-fuild">
            <div className="navbar-header">
              <NavBarButton data-toggle="collapse" data-target="#navbar2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </NavBarButton>
              <NavBarBrand onClick={() => { window.location.href = "/" }}>
                <img src={logo1} alt="PAM Pause A Moment" />
              </NavBarBrand>
              <NavBarBrandMobile onClick={() => setModal({ modalId: 1 })}>Login</NavBarBrandMobile>
              <NavBarSearchMobile>
                <i className="fa fa-search"></i>
              </NavBarSearchMobile>
              <NavBarDonateButtonMobile>Donate</NavBarDonateButtonMobile>
            </div>
            <NavBarMenuList
              // searchBar={true}
              menuItems={props.menuItems}
              popupOpenHandler={openPopup}
            />
          </div>
        </DefaultNavBar>
      </section>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closePopup}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{ style: { minWidth: 275 } }}
      >
        <BoxContainerWrapper>
          <Box className="popover-close">
            <i
              className="fa fa-times-circle"
              onClick={closePopup}
              aria-hidden="true"
            ></i>
          </Box>
          <Box className="popover-username">{getUserInfo("name")}</Box>
          <Box>
            <ProfilePopoverBox
              onClick={() => profilePopoverItemClick("/profile")}
            >
              <Box>My Profile - Personal</Box>
              <Box>
                <i className="fa fa-chevron-right"></i>
              </Box>
            </ProfilePopoverBox>
            <ProfilePopoverBox
              onClick={() => profilePopoverItemClick("/aboutme")}
            >
              <Box>My Profile - healthcare</Box>
              <Box>
                <i className="fa fa-chevron-right"></i>
              </Box>
            </ProfilePopoverBox>
            <ProfilePopoverBox
              className="bb"
              onClick={() => profilePopoverItemClick("logout")}
            >
              <Box>Logout</Box>
            </ProfilePopoverBox>
          </Box>
        </BoxContainerWrapper>
      </Popover>
    </NavBarSection>
  );
};
NavBar.propTypes = {
  /* List of items which needs to be in Menu*/
  menuItems: PropTypes.array,
};
export default withRouter(NavBar);
