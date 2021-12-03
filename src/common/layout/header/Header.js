import { StyledHeader } from "common/layout/header/Header.styles";
import { Logo } from "common/layout/header/Logo";
import "common/assets/css/styles.css";

export const Header = ({ logoTitle, logoSubtitle, userDisplayName }) => {
  return (
    <StyledHeader>
      <header id="header" className="header-local" role="banner">
        <div className="container">
          <span className="skip-to-links">
            <a href="#mainContent" className="sr-only sr-only-focusable">
              Skip to Content
            </a>
            <a href="#navigationLocal" className="sr-only sr-only-focusable">
              Skip to Local Navigation
            </a>
          </span>
          <Logo logoTitle={logoTitle} logoSubtitle={logoSubtitle} />
          <div id="headerContent" />
        </div>
        <div className="display-name">{userDisplayName}</div>
      </header>
    </StyledHeader>
  );
};
