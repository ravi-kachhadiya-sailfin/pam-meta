import React from 'react';
import { FooterSectionWrapper, FooterImage } from '../../tamComponents/footer/Footer.styles'
import logo1 from "app/shared/assets/images/logos/logo1.svg";
import logo2 from "app/shared/assets/images/logos/logo2.svg";


const Footer = (props) => {

  return (
    // <footer class="app-footer" style={{position: "fixed",bottom: "0",width:"100%",textAlign:"center"}}>
    <FooterSectionWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6" >
            <FooterImage onClick={() => { window.location.href = "/" }} src={logo1} alt="pam" height="100px" />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-6 col-xs-6 footer-link-menu">
            <div>
              <a href="/tools" className="">
                All Tools
              </a>
            </div>
            {/* <div>
              <a href="/resources">Resources</a>
            </div> */}
            <div>
              <a href="/about">About PAM</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6" target="_blank" rel="noreferrer" href={"https://med.stanford.edu/ "}>
            <FooterImage src={logo2} alt="pam" height="60px" />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6 footer-link-menu">
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
        <div className="bottom-line" style={{ borderTop: "1px solid #fff" }}>
          <div className="col-md-6 col-xs-8 p-0" style={{ color: "white" }}>
            Copyright 2021. Stanford Healthcare.
          </div>
          <div className="col-md-6 col-xs-4 text-right  p-0">
            <a href="/privacypolicy">Privacy</a>
            <a href="/tnc" className="mr-0">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </FooterSectionWrapper>
    //       }; 
    //  </footer>   
  );

}
Footer.propTypes = {};

export default Footer;
