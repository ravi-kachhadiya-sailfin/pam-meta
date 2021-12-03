import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const BackLink = styled(Box)`
font-size: 20px;
  font-weight: normal;
  line-height: 27px;
  display: flex;
  align-items: center;
  font-weight: 400;
  img {
    margin-right: 15px;
  }
  span {
    margin-bottom: 2px;
    display: inline;
  }

  @media(max-width: 992px){
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    margin-bottom: 10px;
      img {
        margin-right: 10px;
        width: 6px;
      }
  }
  @media(max-width:767px){
    font-size: 12px;
    font-weight: normal;
    line-height: 14px;
    margin-bottom: 10px;
      img {
        margin-right: 10px;
        width: 6px;
      }
  }
`;
export const ToolsBody = styled.div`
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 28px 12px;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;

  .container {
    width: 100%;
    max-width: 1550px;
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }

  // Small devices (landscape phones, 576px and up)
  @media screen and (max-width: 576px) {
   padding: 5px 0px 50px 0px;
  }

  // Medium devices (tablets, 768px and up)
  @media screen and (min-width: 768px) {
    padding: 5px 0px 50px 0px;
  }


  // Large devices (desktops, 992px and up)
  @media screen and (min-width: 992px) {
    padding: 28px 0px 120px 0px;
   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
      padding: 38px 0px 194px 0px;
  }

  .no-Tool-found {
    display: flex;
    justify-content: center;
    max-width: 100%;
    color: #0099ba;

    > span {
      font-size: 25px;
    }
  }
`;
export const ToolPageTitle = styled.div`
  color: #0099ba;
  margin-bottom: 32px;
  font-size: 110px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: 7px;

  &.recommend_title{
    line-height: 105px;
    margin-left: -10px;

    @media (max-width: 1366px){
      margin-left: -7px;
    }
    @media (max-width: 1200px){
      line-height: 60px;
      margin-left: -5px;
    }
    @media (max-width: 767px){
      line-height: 40px;
      margin-left: 00px;
    }
  }

  padding-right: 50px;

  @media (max-width: 1366px){
    font-size: 80px;
    margin-bottom: 28px;
  }
  @media (max-width: 1200px){
    padding-right: 0px;
    font-size: 70px;
    margin-bottom: 25px;
    margin-right: 25px;
    margin-top: 7px;
  }
  @media (max-width: 992px){
    font-size: 55px;
    margin-bottom: 25px;
    margin-top: 0x;
    margin-right: 0px;
  }
  @media (max-width: 767px){
    font-size: 45px;
    margin-bottom: 10px;
    margin-right: 0px;
    margin-top: 8px;
    letter-spacing: -0.9px;
  }
`;

export const ToolPageDescription = styled.div`
   color: #09425a;
  max-width: 80%;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  margin-bottom: 42px;

   padding-right: 50px;

    @media (max-width: 1366px){
        font-size: 22px;
        max-width: 100%;
        margin-bottom: 36px;
    }
    @media (max-width: 1200px){
      padding-right: 00px;
      font-size: 20px;
      margin-right: 25px;
      margin-bottom: 30px;
  }
    @media (max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom: 24px;
  }
    @media (max-width: 767px){
      font-size: 14px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom:12px;

      .last-description{
        margin-bottom:10px;
      }
  }
`;


export const CustomButton = styled(Button)`
  display: inline-block !important;
  width: 650px !important;
  padding: 12px 24px !important;
  min-width: 155px !important;
  border-radius: 40px !important;
  box-shadow: none  !important;
  border: none !important;
  outline: none !important;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 25px !important;
  font-stretch: normal !important;
  font-style: normal !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  text-align: center !important;
  color: #ffffff !important;
  text-transform: unset !important;
  font-weight: 600 !important;
  min-height: 82px;

  &.full-width{
    width: 100% !important;
  }

  @media (max-width:1200px){
    min-height: 72px;
  }

  @media (max-width: 992px){
    width:100% !important;
    font-size: 18px !important;
    min-height: 45px;
  }

  @media (max-width: 767px){
     min-height: 36px;
     font-size: 14px !important;
     padding: 6px 15px !important;
  }

  background-color:  ${(props) => props.color}!important;
`;

export const RecommandedPageButtonSection = styled.div`
 width:100%;
 margin-top:60px;

  @media (max-width: 992px){
    display:flex;
    justify-content:center;
    margin-top:42px;
  }
  @media (max-width: 767px){
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:31px;
  }
`;


export const ToolPageSubDescription = styled.div`
  color: #09425a;
  max-width: 70%;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  margin-bottom: 25px;

   padding-right: 50px;

  &.last-description{
     margin-bottom: 0px;
  }

    @media (max-width: 1366px){
      font-size: 22px;
      max-width: 100%;
      margin-bottom: 22px;
    }
    @media (max-width: 1200px){
      padding-right: 00px;
      font-size: 20px;
      margin-right: 25px;
  }
    @media (max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-right: 0px;
  }
    @media (max-width: 767px){
      font-size: 14px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom:7px;
  }
`;

export const ToolPageSubTitleDescription = styled.div`
  color: #09425a;
  max-width: 80%;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 28px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  font-weight:bold;
  margin-bottom: 28px;
  color:#09425A;
  padding-right: 50px;

    @media (max-width: 1366px){
      font-size: 22px;
      max-width: 100%;
      margin-bottom: 26px;
    }
    @media (max-width: 1200px){
      padding-right: 00px;
      font-size: 21px;
      margin-right: 25px;
      margin-bottom: 26px;
  }
    @media (max-width: 992px){
      font-size: 19px;
      line-height: 28px;
      margin-right: 0px;
      margin-bottom: 24px;
  }
    @media (max-width: 767px){
      font-size: 18px;
      line-height: 22px;
      margin-right: 0px;
      margin-bottom:7px;
  }
`;


export const HorizonatalLine = styled.div`
  margin: 72px 0px;
  hr{
    margin:0px;
  }

  @media (max-width: 992px){
    margin: 45px 0px 35px 0px;
  }
  @media (max-width: 767px){
     margin: 32px 0px 28px 0px;
  }
`;

export const WhatToDoTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;
  font-size: 16px;
  font-weight: bold;
  color: #09425a;
  margin-bottom: 20px;
`;

export const WhatToDoUL = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  list-style: none;
  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    font-size: 12.5px;
    margin-bottom: 12px;
    position: relative;
    padding-left: 15px;
    :before {
      content: '';
      position: absolute;
      left: -20px;
      top: 7px;
      height: 13px;
      width: 13px;
      background: #0099ba;
      border-radius: 50%;
    }
  }
`;

export const ToolsContainerSection = styled.section`
  width: 100%;

  .no-Tool-found {
    display: flex;
    justify-content: center;
    max-width: 100%;
    color: #0099ba;

    > span {
      font-size: 25px;
    }
  }

  &.btn-normal{
    margin-top: 30px;
  }
`;

export const ToolsCardContainer = styled(Box)`
  margin-top: 50px;

  h1 {
    margin-bottom: 20px;
    margin: 0px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    font-size: 19px;
    .right-arrow {
      border: solid #0099ba;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      margin-left: 16px;
      margin-bottom: 3px;
    }
  }
  h5 {
    color: #09425a;
    font-size: 10.5px;
  }
  .time {
    color: #a9bdc5;
    font-size: 10px;
  }
`;

export const ToolsBottomButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 40px;

  div {
    width: 40%;

    @media only screen and (max-device-width: 1024px) {
      width: 45%;
    }
  }

  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;

    div {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const ToolContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -35px;
  margin-left: -35px;

  @media(max-width: 1366px){
    margin-right: -25px;
    margin-left: -25px;
  }

  @media(max-width: 992px){
    margin-right: -10px;
    margin-left: -10px;
  }

  @media(max-width: 767px){
    margin-right: 0px;
    margin-left: 0px;
  }

  > div {
    padding-left: 35px;
    margin-bottom: 60px;
    padding-right: 35px;
    width: 33.333%;
    float:left;

      @media (max-width: 1366px){
        padding-left: 25px;
        padding-right: 25px;
      }
      @media (max-width: 1200px) {
         width: 50%;
      }

      @media (max-width: 992px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
      }

      @media (max-width: 767px){
        margin-bottom: 16px;
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
      }

    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 0px;
      justify-content: center;
    }
  }
`;
