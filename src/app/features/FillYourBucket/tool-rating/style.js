import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const CancelButton = styled(Box)`
  text-align: right;
  background-color: #a9bdc5;
  font-size: 32px;
  font-weight: 300;
  border-radius: 50%;
  // width: 45px;
  // height: 45px;
  color: #eff3f4;
  padding: 0px 9px;
  display: inline-block;
  cursor: pointer;
`;

export const ContentWrapper = styled(Box)`
  background-color: white;
  color: black;
  margin: 0px auto;
  margin-top: 50px;
  border-radius: 30px;
  padding: 15px 10px 20px 50px;
  font-family: 'Source Sans Pro';
  max-width: 70%;

  @media only screen and (max-device-width: 768px) {
    max-width: 90%;
    padding: 15px 10px 20px 15px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 15px 10px 20px 30px;
    max-width: 80%;
  }
`;

export const TitleWrapper = styled(Box)`
  color: #0099ba;
  font-size: 38px;
  font-weight: bold;

  @media only screen and (max-device-width: 480px) {
    font-size: 18px;
  }
`;

export const SubTitleWrapper = styled(Box)`
  color: #a9bdc5;
  font-size: 20px;
  font-weight: normal;
  max-width: 100ch;
  margin-top: 25px;

  @media only screen and (max-device-width: 480px) {
    font-size: 12px;
  }
`;

export const SliderWrapper = styled(Box)`
  max-width: 80%;
  margin-left: 55px;

  @media(max-width:768px){
    margin-left:51px;
  }
  @media(max-width:767px){
    margin-left:40px;
  }
  @media only screen and (max-device-width: 480px) {
    margin-left: 25px;
  }

  .slider_level{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #A9BDC5;
    font-weight: 700;
    margin-top: 7px;



    @media(max-width:767px){
      font-size: 10px;
        margin-top: 0px;
    }
`;

export const RatingTagWraper = styled(Box)`
  width: 101%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const QuestionWrapper = styled(Box)`
  width: 100%;
  padding-top: 12px;
  margin-bottom: 40px;

  @media(max-width:992px){
    margin-bottom:30px;
  }

  @media(max-width:767px){
    margin-bottom:10px;
  }

  .card-number {
    background-color: #a9bdc5;
    font-size: 32px;
    font-weight: 300;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    text-align: center;
    color: #eff3f4;
    margin-right: 12px;
    padding: 0px 8px;
    display: inline-block;
    line-height:46px;

    @media(max-width:1366px){
      width: 40px;
      height: 36px;
      line-height: 35px;
    }
    @media only screen and (max-device-width: 1200px) {
      font-size: 29px;
      width: 40px;
      height: 36px;
      line-height: 33px;
    }
    @media only screen and (max-device-width: 1024px) {
      font-size: 24px;
      width: 40px;
      height: 33px;
      line-height: 33px;
    }
    @media only screen and (max-device-width: 992px) {
      font-size: 27px;
      width: 30px;
      height: 30px;
      line-height:30px;
    }
    @media only screen and (max-device-width: 768px) {
      font-size: 20px;
      width: 20px;
      height: 20px;
      line-height:20px;
      padding:0 3px;
    }
    @media only screen and (max-device-width: 390px) {
      font-size: 15px;
      width: 35px;
      height: 24px;
      line-height: 22px;      
    }
    @media only screen and (max-device-width: 320px) {
      width: 38px;
      height: 22px;
      line-height: 20px;      
    }
  }

  .card-title {
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 45px;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;

    @media(max-width:1366px){
      line-height: 35px;
    }
    @media only screen and (max-device-width: 1200px) {
      font-size: 27px;
      line-height: 34px;
    }
    @media only screen and (max-device-width: 1024px) {
      font-size: 24px;
      line-height: 32px;
    }
    @media only screen and (max-device-width: 992px) {
      font-size: 25px;
      line-height: 37px;
    }
    @media only screen and (max-device-width: 768px) {
      font-size: 20px;
      line-height: 20px;
    }
    @media only screen and (max-device-width: 390px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;

export const ToolRatingWrapper = styled(Box)`
  margin-left: 55px;
  margin-top: 22px;

  @media only screen and (max-device-width: 480px) {
    margin-left: 25px;
  }
`;

export const CardRating = styled(Rating)`
  font-size: 3rem !important;

  .MuiRating-iconEmpty {
    color: #ffffff !important;
    stroke: #cfd7d9 !important;
  }

  .MuiRating-sizeLarge {
    margin-top: 15px;
  }

  color: #09425a !important;

  .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    position: 'absolute';
    left: '50%', top: '50%';
  }

  @media only screen and (max-device-width: 480px) {
    font-size: 2.5rem !important;
    }
`;

export const CustomerButtonWrapper = styled(Box)`
  margin-top: 80px;

  > button {
    border-radius: 40px;
    max-width: 350px;
    font-family: 'Source Sans Pro';
    text-transform: unset;
    @media(max-width:1366px){
      font-size:22px !important;
    }
    @media(max-width:1200px){
      font-size:20px !important;
    }
    @media(max-width:1366px){
      font-size:18px !important;
    }
    @media(max-width:1366px){
      font-size:16px !important;
    }
  }

  @media (max-width: 1000px) {
    text-align: center;
    margin-top: 40px;

    > button {
      max-width: 350px;

      @media (max-width: 767px) {
    
          max-width: 100%;
       
      }
    }
  }
 
`;

export const ScrollWrapper = styled(Box)`
  overflow: auto;

  // @media only screen and (max-device-width: 768px) {
  //   max-height: 70vh;
  // }
`;
