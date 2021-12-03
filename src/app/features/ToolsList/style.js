import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Layout = styled(Box)`
  font-family: 'Source Sans Pro';
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;

  .navigate-back {
    margin: 38px 278.5px 7px 7.7px;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.35;
    text-align: left;
    color: #0099ba;
  }
  .navigate-back .back-desc {
    margin-left: 16px;
  }

  .track-login-btn {
    margin: 61px 0 75px 0;

    > button {
      font-size: 25px !important;
      font-weight: 600 !important;
      line-height: 1.01 !important;
      text-align: center !important;
      color: #ffffff !important;
      height: 82.5px;
      border-radius: 39.2px !important;
    }
    max-width: 650px;
  }
  .track-login-btn .MuiButton-root {
    text-transform: unset;
  }
  .track-login-btn .MuiButton-label {
    font-weight: 600;
  }

  .what-to-do {
    margin-top: 75px;
    text-align: left;
    color: #09425a;
  }
  .what-to-do .what-to-do-title {
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
  }
  .what-to-do .what-to-do-list {
    font-size: 25px;
    font-weight: normal;
    line-height: 1.28;
    margin: 26px 0 26px 0;
  }

  @media only screen and (max-width: 480px) {
    .navigate-back {
      margin: -15px 0 10px 0;
      font-size: 13px;
      line-height: 1.27;
    }

    .navigate-back .back-desc {
      margin-left: 0;
    }

    .track-login-btn {
      margin: 30px 0px 32px 0;
      max-width: 100%;

      > button {
        font-size: 14px !important;
        line-height: 1.43 !important;
        height: 36.5px;
      }
    }

    .what-to-do {
      margin-top: 28px;
      line-height: 1.88;
    }

    .what-to-do .what-to-do-title {
      font-size: 17px;
      line-height: 1.88;
    }

    .what-to-do .what-to-do-list {
      font-size: 14px;
      line-height: 1.29;
      margin: 15px 0 12px 0;
    }
  }
`;

export const BackLink = styled(Box)`
  * {
    margin-right: 8px;
  }

  span {
    margin-bottom: 2px;
    display: inline;
  }
`;

export const SeparatorLine = styled.hr`
  height: 2px;
  background-color: #a9bdc5;
  opacity: 0.3;
`;

export const ToolsCardContainer = styled(Box)`
  margin-top: 55px;
  color: #0099ba;

  .toolsCardTitle {
    display: flex;
    direction: row;
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
      font-size: 16px;
      justify-content: space-between;
    }
  }

  .toolsTitle {
    margin-bottom: 20px;
    margin: 10px 0 20px 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    font-size: 38px;

    @media only screen and (max-device-width: 768px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 480px) {
      margin: 0;
      font-size: 16px;
    }
  }
  .right-arrow {
    margin: 20px 0px 0px 18px;
    font-size: 23px;
    @media only screen and (max-device-width: 768px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 480px) {
      margin: 0 0 0 18px;
      font-size: 16px;
    }
  }
  .subTitle {
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    margin-top: -15px;
    color: #09425a;
    @media only screen and (max-device-width: 768px) {
      font-size: 14px;
      margin-top: 0px;
    }
  }
  .toolTimeDuration {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #a9bdc5;
    margin-top: 7px;
    @media only screen and (max-device-width: 768px) {
      font-size: 10px;
    }

    @media only screen and (max-width: 480px) {
      margin-top: 3px;
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 45px;
  }
`;

export const ToolContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 45px;

  > div {
    margin-right: 68px;
    margin-bottom: 20px;

    @media only screen and (max-width: 480px) {
      margin-left: 0px;
      margin-right: 0px;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const ToolsContainerSection = styled.section`
  width: 100%;


  .MuiGrid-root {
    justify-content: space-around;

    @media (max-width: 767px){
      height: 40px;
    }
  }
`;

export const ToolsBottomButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;


  padding-top: 0px;

  @media(max-width: 767px){
    padding-top: 0px;

  }

  div {
    width: 100%;

    @media (max-width: 992px) {
      width: 100%;
      padding: 0px 0px;
    }
  }
`;
