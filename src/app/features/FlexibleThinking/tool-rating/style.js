import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const CancelButton = styled(Box)`
  text-align: right;
  background-color: #a9bdc5;
  font-size: 32px;
  font-weight: 300;
  border-radius: 50%;
  width: 45px;
  height: 45px;
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

  .tools_rating_popup{
    padding: 15px 10px 20px 50px !important;
  }

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

  @media only screen and (max-device-width: 480px) {
    margin-left: 25px;
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
  margin-bottom: 20px;
  margin-top: 60px;

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

    @media only screen and (max-device-width: 480px) {
      font-size: 12px;
      width: 17px;
      height: 17px;
      padding: 0px 5px;
    }
  }

  .card-title {
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;

    @media only screen and (max-device-width: 480px) {
      font-size: 12px;
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
    max-width: 35%;
    font-family: 'Source Sans Pro';
    text-transform: unset;
  }

  @media (max-width: 1000px) {
    text-align: center;

    > button {
      max-width: 50%;
    }
  }
`;

export const ScrollWrapper = styled(Box)`
  overflow: auto;

  @media only screen and (max-device-width: 768px) {
    max-height: 70vh;
  }
`;
