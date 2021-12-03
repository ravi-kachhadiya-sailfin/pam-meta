import styled from "styled-components";
import {
  MenuItem as MuiMenuItem,
  Popper as MuiPopper,
  Tab as MuiTab,
} from "@material-ui/core";

const navbarColors = {
  tabColor: "#ffffff",
  tabBackground: "#333333",
  tabHoverBackground: "#666666",
  tabHoverColor: "#ffffff",
  desktopMenuListItemBackground: "#333333",
  desktopMenuListItemColor: "#ffffff",
  mobileMenuListItemBackground: "#666666",
  mobileMenuListItemColor: "#ffffff",
  menuListItemHoverBackground: "#666666",
  menuListItemHoverColor: "#ffffff",
  menuListItemSelectedBackground: "#999999",
  menuListItemSelectedColor: "#ffffff",
};

export const NavbarTopDiv = styled.div`
  .MuiAppBar-root {
    box-shadow: none;

    .MuiIconButton-root {
      height: 40px;
      width: 25px;
      margin: 0px 20px 0px auto;
      padding-top: 12px;
    }
  }

  .MuiAppBar-colorPrimary {
    background: ${navbarColors.tabBackground};
  }

  .MuiTab-root {
    display: ${(props) => (props.isMobileView ? "block" : "inline-flex")};
    width: ${(props) => (props.isMobileView ? "100%" : "auto")};
    max-width: ${(props) => (props.isMobileView ? "100%" : "264px")};
    text-align: ${(props) => (props.isMobileView ? "left" : "center")};
    flex-direction: row-reverse;
    min-width: 0px;
    min-height: 0px;
    padding: 6px 0px;
    justify-content: flex-end;

    &: hover {
      background: ${(props) =>
    props.isMobileView ? "" : navbarColors.tabHoverBackground};
      color: ${(props) =>
    props.isMobileView ? "" : navbarColors.tabHoverColor};
    }

    .arrowIcon {
      display: inline-flex;
      vertical-align: middle;
      margin-left: ${(props) => (props.isMobileView ? "1.5%" : "")};
    }
  }

  .MuiTab-wrapper {
    display: contents;
    font-size: 15px;
    font-family: "Source sans pro";
    text-transform: none;
  }

  .MuiTabs-indicator {
    background-color: ${(props) =>
    props.isMobileView ? "transparent" : navbarColors.tabColor};
    border: 0px solid;
    height: ${(props) => (props.isMobileView ? "0px" : "3px")};
  }

  && .MuiMuiMenuItem-root {
    font-size: 15px;
    font-family: "Source sans pro";
  }

  .MuiTabs-root {
    min-height: 0px;
    max-height: ${(props) => (props.isMobileView ? "50vh" : "40px")};

    .MuiTabs-scroller {
      height: ${(props) => (props.isMobileView ? "auto" : "40px")};
      display: flex;
    }
  }

  && .hoverClass {
    background: ${navbarColors.tabHoverBackground};
  }

  .MuiPaper-root {
    background: ${navbarColors.tabBackground};
    color: ${navbarColors.tabColor};
  }

  .MuiTabs-flexContainer {
    justify-content: space-evenly;
    ${(props) => props.isMobileView && "width: 100%;"};
    overflow-y: ${(props) => (props.isMobileView ? "scroll" : "hidden")};

    ::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
    flex-flow: wrap;
  }

  .MuiTab-textColorInherit.Mui-selected {
    margin-left: 24px;
    margin-right: 16px;
    padding-left: 8px;
    padding-right: 8px;
  }

  .show {
    display: flex;
  }

  .hide {
    display: none;
  }
`;

export const NavbarTab = styled(MuiTab)`
  && .MuiTouchRipple-root {
    border-bottom: ${(props) =>
    props.opened ? "4px solid" + navbarColors.tabColor : ""};
  }
`;

export const NavbarPopper = styled(MuiPopper)`
  display: ${(props) => (props.mobile ? "contents" : "")};
  margin-top: ${(props) => (props.mobile ? "" : "6px")};
  z-index: 1;

  .MuiPaper-root {
    border-radius: 0;
    border-top: ${(props) =>
    props.mobile ? "2px solid" + navbarColors.tabColor : "0"};
    background: ${(props) =>
    props.mobile
      ? navbarColors.mobileMenuListItemBackground
      : navbarColors.desktopMenuListItemBackground};
  }

  &.MuiList-root {
    background: ${(props) =>
    props.mobile
      ? navbarColors.mobileMenuListItemBackground
      : navbarColors.desktopMenuListItemBackground};
  }
`;

export const NavbarMenuItem = styled(MuiMenuItem)`
  && {
    display: flex;
    justify-content: flex-start;
    padding: 6px 18px;
    color: ${navbarColors.desktopMenuListItemColor};
    background: ${(props) =>
    props.submenu === 1
      ? navbarColors.menuListItemSelectedBackground
      : props.mobile
        ? navbarColors.mobileMenuListItemBackground
        : navbarColors.desktopMenuListItemBackground};
    color: ${navbarColors.menuListItemSelectedColor};
    font-size: 15px;
    font-family: "Source sans pro";

    &:focus,
    &:hover {
      background: ${navbarColors.menuListItemHoverBackground};
      color: ${navbarColors.menuListItemHoverColor};
    }
  }
`;
