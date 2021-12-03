import React, { useState } from "react";
import { FooterSectionWrapper, FooterImage } from "./Footer.styles";
import logo1 from "app/shared/assets/images/logos/logo1.svg";
import logo2 from "app/shared/assets/images/logos/logo2.svg";
import FeedbackPopUp from "app/features/FeedbackPopup";
/*Standared footer with appropriate links
 *
 */
const Footer = (props) => {
  const [feedback, setFeedback] = useState(false);

  const feedbackPopUpClose = (value) => {
    setFeedback(value);
  }

  return (
    <FooterSectionWrapper className={props.adminClassName}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <FooterImage className="footer_logo" src={logo1} alt="pam" height="100px" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-link-menu">

          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <FooterImage className="footer_logo_stanford" src={logo2} alt="pam" height="60px" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer-link-menu standford_card">
            <div>
              <div>
                <a target="_blank" rel="noreferrer" href={"https://med.stanford.edu/ "} className="">
                  Stanford Medicine
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={"https://www.stanford.edu/"}>Stanford University</a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href={"https://www.stanford.edu/site/privacy/"}>Stanford Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-line" style={{ borderTop: "1px solid #78E0FA" }}>
          <div className="col-md-6 col-xs-8 p-0 copy_right_text" style={{ color: "#78E0FA" }}>
            Copyright 2021. Stanford Healthcare.
          </div>
        </div>
      </div>
      {feedback && <FeedbackPopUp feedback={feedback} setFeedback={feedbackPopUpClose} />}
    </FooterSectionWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
