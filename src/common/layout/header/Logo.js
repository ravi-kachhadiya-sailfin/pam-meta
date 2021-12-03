import { StyledLogo } from "common/layout/header/Logo.styles";
import "common/assets/css/styles.css";

export const Logo = ({ logoTitle, logoSubtitle }) => {
  return (
    <StyledLogo>
      <div className="brand">
        <a className="brand-logo" href="https://med.stanford.edu/">
          Stanford Medicine
        </a>
        <div className="brand-sitename">
          <span className="wrap">
            <span className="brand-sitename-title">
              {logoTitle && <span>{logoTitle}</span>}
              {!logoTitle && <span>Site Name not specified</span>}
            </span>
            {logoSubtitle && (
              <span className="brand-sitename-subtitle">{logoSubtitle}</span>
            )}
          </span>
        </div>
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Site Nav</span>
          <span className="navbar-toggle-icon" />
        </button>
      </div>
    </StyledLogo>
  );
};
