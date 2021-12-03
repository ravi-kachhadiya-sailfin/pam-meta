import { StyledFooter } from "common/layout/footer/Footer.styles";
import "common/assets/css/styles.css";

export const Footer = ({ copyrightYear, buildVersion }) => {
  return (
    <StyledFooter>
      <div id="footer" role="contentinfo">
        <div className="footer-primary">
          <footer className="container footer-local">
            <div className="content">
              <div className="simple-footer">
                <div className="legal-text">
                  &copy;<span id="footerCurrentYear">{copyrightYear}</span>{" "}
                  Stanford Medicine. Revision: {buildVersion}
                </div>
                <div className="footer-links" />
              </div>
            </div>
          </footer>
        </div>
        <div className="footer-secondary" />
      </div>
    </StyledFooter>
  );
};
