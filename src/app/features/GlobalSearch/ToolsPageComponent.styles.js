import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const ToolsBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 28px 12px;
  width: 100%;
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
   padding: 4px 0px 38px 0px;
  }

  // Medium devices (tablets, 768px and up)
  @media screen and (min-width: 768px) {
    padding: 10px 0px 45px 0px;
  }


  // Large devices (desktops, 992px and up)
  @media screen and (min-width: 992px) {
    padding: 28px 0px 100px 0px;
   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
      padding: 41px 0px 190px 0px;
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
  margin-bottom: 30px;
  font-size: 55px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
`;

export const ToolPageDescription = styled.div`
  color: #09425a;
  max-width: 70%;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  margin-bottom: 45px;
  padding-right: 50px;

  &.searched-msg{
     margin-bottom: 36px;
     
  }

  .searched-text{
    font-weight:700;
  }

    @media (max-width: 1366px){
        font-size: 22px;
        max-width: 100%;
        line-height: 32px;
    }
    @media (max-width: 1200px){
      padding-right: 00px;
      font-size: 20px;
      line-height: 32px;
      margin-right: 25px;
      margin-bottom: 32px;

       &.searched-msg{
        margin-bottom: 20px;
      }
  }
    @media (max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom: 25px;

      &.searched-msg{
        margin-bottom: 18px;
      }
  }
    @media (max-width: 767px){
      font-size: 14px;
      line-height: 14px;
      margin-right: 0px;
      margin-bottom:20px;

      &.searched-msg{
        margin-bottom: 14px;
        font-size:12px;
      }
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
`;

export const ToolsCardContainer = styled(Box)`
  margin-top: 20px;






  h1 {
    ${'' /* margin: 0px; */}
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 30px;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    font-size: 38px;
    margin-bottom: 14px;

    &.mt-0{
      margin-top: 0px !important;
    }

    @media(max-width: 1366px){
      {
        font-size: 35px;
      }
    }

    img {
      color:#0099BA;
      padding-bottom:0px;
      margin-left:20px;
      width:13px;
      height:21px;
    }
  }

  .special-tool-title{
    margin-top: 70px;
    
    @media(max-width: 1366px){
      font-size: 35px;
    }
    @media(max-width: 992px){
      font-size: 32px;
      line-height: 30px;
      margin-bottom: 10px;
    }
    @media(max-width: 767px){
      margin-top: 30px;
      font-size: 20px;
      line-height: 23px;
    }
  }
  h5 {
    color: #09425a;
    font-size: 10.5px;
  }
  .time {
    color: #A9BDC5;
    font-size: 20px;
    margin-bottom: 45px;
    line-height: 27px;

    @media(max-width: 1366px){
      font-size: 18px;
    }

  }

  .discription{
    font-size: 21px;
    font-weight:normal;
    line-height: 32px;
    margin-bottom:7px;
    color:#09425A;
  }

  @media (max-width: 1200px){
    .special-tool-title{
      margin-top: 60px;
    }
  }

  @media (max-width: 992px) {
    margin-top: 15px;

    h1{
      margin-top:30px;
      font-size: 32px;
      margin-bottom: 8px;

      img{
         margin-top: 0px;
         margin-bottom: 5px;
      }
    }

    .discription{
      font-size:20px;
      font-weight:normal;
      margin-bottom: 3px;
    }

    .time {
      font-size: 19px;
      margin-bottom:30px;
    }

    .special-tool-title{
      margin-top: 40px;
    }
  }

  @media (max-width: 767px){
    margin-bottom: 16px;
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 0px;

    h1{
      margin-top:30px;
      font-size: 20px;
      line-height:23px;
      margin-bottom: 6px;

       img {
        ${'' /* color:#0099BA;
        padding-bottom:3px;
        margin-left:20px; */}
        width:8px;
        height:18px;
        right: 28px;
        position: absolute;
        margin-top: 5px;
        
      }
    }

    .discription{
      font-size:14px;
      line-height: 18px;
      font-weight:normal;
      margin-bottom: 3px;
    }

    .time {
      font-size: 10px;
      margin-bottom:20px;
      line-height:14px;
    }

    .special-tool-title{
      margin-top: 40px;
    }
  }
`;

export const RecomamndedPageToolDiscription = styled.div`
  font-size:21px;
  color:#09425A;
  font-weight:normal;
  line-height:32px;
  margin-bottom:15px;
  max-width: 70%;

  > div{
    padding:0px;
    margin:0px;
  }

  @media (max-width:1366px){
      font-size: 18px;
      line-height:30px;
        max-width: 100%;
  }
  @media (max-width:767px){
    font-size:14px;
    line-height:18px;
    margin-bottom:4px;

    .mb-7{
      margin-bottom:7px;
    }
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