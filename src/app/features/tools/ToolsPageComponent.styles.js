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


export const CancelButton = styled(Box)`
  text-align: right;
  font-size: 32px;
  font-weight: 300;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  color: #eff3f4;
  padding: 0px 9px;
  display: inline-block;
  cursor: pointer;



  &.close_popup_button{
    position: absolute;
    top: 16px;
    right: 20px;


    @media(max-width: 1200px){
      width: 40px;
      height: 40px;
      
      img{
        width: 40px;
        height: 40px;
      }
    }
    @media(max-width: 992px){
      width: 30px;
      height: 30px;
    
      img{
        width: 30px;
        height: 30px;
      }
    }
    @media(max-width: 767px){
      width: 23px;
      height: 23px;
      top: 3px;
      right: 16px;
    
      img{
        width: 23px;
        height: 23px;
      }
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

  &.personalize-tool-body{
    padding: 5px 0px 48px 0px;
  }

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
   padding: 28px 0px 48px 0px;

    &.personalize-tool-body{
      padding: 5px 0px 48px 0px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media screen and (min-width: 768px) {
    padding: 48px 0px;

    &.personalize-tool-body{
      padding: 15px 0px 100px 0px;
    }
  }


  // Large devices (desktops, 992px and up)
  @media screen and (min-width: 992px) {
    padding: 72px 0px;

    &.personalize-tool-body{
      padding: 25px 0px 150px 0px;
    }
   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
      padding: 110px 0px 163px 0px;

      &.personalize-tool-body{
        padding: 31px 0px 191px 0px;
      }
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
  margin-bottom: 35px;
  font-size: 110px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: -25px;

  &.personalize-tool{
    margin-top: 10px;
  }

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
    &.personalize-tool{
      margin-top: 7px;
    }
  }

  @media (max-width: 1200px){
      padding-right: 0px;
      font-size: 70px;
      margin-bottom: 25px;
      margin-right: 25px;
      margin-top: -18px;

      &.personalize-tool{
        margin-top: 7px;
      }
  }

  @media (max-width: 992px){
      font-size: 55px;
      margin-bottom: 25px;
      margin-top: 0x;
      margin-right: 0px;

      &.personalize-tool{
        margin-top: 7px;
      }
  }

  @media (max-width: 767px){
      font-size: 45px;
      margin-bottom: 10px;
      margin-right: 0px;
      margin-top: 0px;
      letter-spacing: -0.9px;

      &.personalize-tool{
        margin-top: 7px;
        font-size: 38px;
      }    
  }
`;

export const ToolPageDescription = styled.div`
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
  margin-bottom: 45px;

   padding-right: 50px;

    @media (max-width: 1366px){
        font-size: 22px;
        max-width: 100%;
    }
    @media (max-width: 1200px){
      padding-right: 00px;
      font-size: 20px;
      margin-right: 25px;
      margin-bottom: 32px;
  }
    @media (max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom: 25px;
  }
    @media (max-width: 767px){
      font-size: 14px;
      line-height: normal;
      margin-right: 0px;
      margin-bottom:20px;

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

  &.mb-0{
    margin-bottom:0px;
    padding-bottom:0px;
  }

  .link-text{
    color: #0099BA;
    font-family:'Source Sans Pro', sans-serif;
    font-weight:600;
  }

  &.last-description{
     margin-bottom: 0px;
  }

    @media (max-width: 1366px){
        font-size: 22px;
         max-width: 100%;
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
  max-width: 70%;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 28px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  font-weight:bold;
  margin-bottom: 27px;
  color:#09425A;
  padding-right: 50px;

    @media (max-width: 1366px){
        font-size: 22px;
         max-width: 100%;
    }
    @media (max-width: 1200px){
        padding-right: 00px;
      font-size: 21px;
      margin-right: 25px;
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
  margin: 65px 0px 55px 0px;
  hr{
    margin:0px;
  }

  @media (max-width: 992px){
    margin: 45px 0px 35px 0px;
  }
  @media (max-width: 767px){
     margin: 34px 0px 30px 0px;
  }
`

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
    max-width: 100ch;
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

  @media (max-width: 992px){
    li {
    
    }
  }
  @media (max-width: 767px){
     li {
    
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





  }

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

    @media(max-width: 1366px){
      {
        font-size: 35px;
      }
    }

    img {
      color:#0099BA;
      padding-bottom:3px;
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
      margin-bottom: 35px;
    }

    @media(max-width: 1200px){
      margin-bottom: 30px;
    }
    @media(max-width: 992px){
      margin-bottom: 0px !important;
    }
    @media(max-width: 767px){
      margin-bottom: 20px !important;
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
        margin-bottom: 2px;
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
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 30px;

  .btn-recommanded-page {
    width: 100%;
    margin: 0 30px;

    :first-child{
      margin-left: 0px;
    }
    :last-child{
      margin-right: 0px;
    }


    @media(max-width: 992px){
      :first-child{
        margin-bottom: 15px;
        margin-right: 15px;
      }
      :last-child{
        margin-bottom: 0px;
        margin-left: 15px;
      }
       margin: 0px;
    }
    @media(max-width: 768px){
      :first-child{
        margin-right: 0;
      }
      :last-child{
        margin-left: 0;
      }
     
    }


  }

  @media only screen and (max-device-width: 768px) {
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 30px;

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
