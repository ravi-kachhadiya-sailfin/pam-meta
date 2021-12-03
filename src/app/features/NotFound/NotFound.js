import React, { useEffect } from "react";
//import PropTypes from "prop-types";
//import HeaderTitle from "app/tamComponents/header/HeaderTitle";
// import { FAQ_HEADER_CONTENT, FAQ_HEADER_TITLE } from "app/shared/constants";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Typography,
// } from "@material-ui/core";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NotFoundSectionWrapper } from "./NotFound.styles";
// import notFoundIcon from 'app/shared/assets/images/404.png';
import pageNotFound from 'app/shared/assets/images/page-not-found.svg';

const NotFound = ({ title, banner }) => {
  useEffect(() => {
  }, []);
  return (
    <NotFoundSectionWrapper>
      <div className="container">
        <div className="error-container">
          <div className="text-404">404</div>
          <img className="Path-10787" alt="Page Not Found" src={pageNotFound} />
          <span className="details-text">
            We are sorry, but the page you requested was not found.
          </span>
        </div>
      </div>
    </NotFoundSectionWrapper>
  );
};

NotFound.propTypes = {};

export default NotFound;
