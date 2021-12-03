import styled from 'styled-components';
import { Box, Stepper } from '@material-ui/core';

export const Layout = styled(Box)`
  padding: 35px 90px 40px 110px;
  background-color: #eff3f4;
  font-family: 'Source Sans Pro', sans-serif;
  color: #09425a;

  &.understanding_you{
    padding: 0px;

    .container {
      width: 100%;
      max-width: 1550px;

      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
      }
    } 

    .understanding_you_wrapper{
      padding-top: 40px;


      @media(max-width: 767px){
        padding-top: 10px;
      }
    }
  }



  @media only screen and (max-device-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 35px 40px 20px 40px;
  }
`;

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

export const MainTitle = styled(Box)`
  color: #0099ba;
  margin-bottom: 40px;
  margin-top: 10px;
  font-size: 110px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 100px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;

  margin-left: -5px;


  @media(max-width: 1366px){
    font-size: 80px;
     line-height: 90px;
  }
  @media(max-width: 1200px){
    font-size: 70px;
     line-height: 80px;
      margin-bottom: 10px;
  }
  @media(max-width: 992px){
    font-size: 55px;
    line-height: 60px;
  }
  @media(max-width: 767px){
    font-size: 45px;
    line-height: 47px;
    margin-bottom: 0px;
    letter-spacing: -0.9pt;
  }
`;

export const DescLine = styled(Box)`
  max-width: 78ch;
  font-size: 25px;
  line-height: 32px;
  color: #09425A;
  font-weight: 400;

  @media(max-width: 1366px){
    font-size: 22px;
  }
  @media(max-width: 1200px){
    font-size: 20px;
    line-height: 22px;
    max-width: 100%;
  }
  @media(max-width: 992px){
    font-size: 18px;
    line-height: normal
  }
  @media(max-width: 767px){
    font-size: 14px;
    line-height: normal;
    margin-top: 5px;
  }

`;

export const StepperWrapper = styled(Stepper)`
  padding: 0px !important;


  .MuiStepConnector-line{
      border-radius: 3px;
    border-top-width: 3px;

 
  }
  > .MuiStep-horizontal {
    padding-left: 0px;
    padding-right: 5px;
  }
`;

export const StepperDetails = styled(Box)`
  display: flex;
  justify-content: right;
  color: #a9bdc5;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  justify-content: flex-end;

  @media(max-width: 767px){
  }

  .step_text{
    font-size: 20px;
    font-weight: 400;
    color: #A9BDC5;
    line-height: 32px;


    @media(max-width: 992px){
      font-size: 15px;
          line-height: 17px;
    }
    @media(max-width: 767px){
      font-size: 10px;
      line-height: 17px;

    }
  }
  @media(max-width: 767px){
    .step_text_details{
      display: none;
    }
  }



`;

export const PageTitle = styled(Box)`
  font-size: 25px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #0099BA;
  margin-top: 11px;



  @media(max-width: 1366px){
    font-size: 22px;
  }
  @media(max-width: 1200px){
    font-size: 20px;
    line-height: 22px;
    max-width: 100%;
  }
  @media(max-width: 992px){
    font-size: 18px;
    line-height: normal;
  }
  @media(max-width: 767px){
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
  }
`;

export const SeparatorLine = styled.hr`
  height: 1px;
  background-color: #a9bdc5;
  opacity: 0.3;
`;

export const GreetingMsg = styled(Box)`
  font-size: 21px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #0099BA;
  margin-top: 60px;


  @media(max-width: 1366px){
      font-size: 18px;
      margin-top: 50px;
  }

  @media(max-width: 1200px){
      font-size: 16px;
      margin-top: 60px;
  }
  @media(max-width: 992px){
      font-size: 14px;
      margin-top: 10px;
  }
  @media(max-width: 992px){
      font-size: 12px;
      font-weight: 700;
      margin-top: 0px;
      text-align: center;
  }
`;

export const PageContentWrapper = styled(Box)`
  margin-top: 50px;
  margin-bottom: 160px;

  @media(max-width: 1200px){
    margin-top: 40px;
    margin-bottom: 100px;
  }
  @media(max-width: 992px){
     margin-top: 30px;
    margin-bottom: 70px;
  }
  @media(max-width: 767px){
     margin-top: 30px;
    margin-bottom: 50px;
  }


  .step_data_wrapper{

    .divider_custom{
      :last-child{
        display: none;
      }
    }
  .MuiPaper-root{
    align-items: center;
  }
  .MuiAlert-message{
    .alert-message{
      margin-bottom: 0px;
      font-size: 18px;
    }
  }

    
  }
`;

export const BottomControlWrapper = styled(Box)`

  &.clear-my-choices-wrapper{
      margin: 0;
      display: unset;
  }
  button {
    text-transform: capitalize;
    font-size: 25px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.01;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
    position: relative;

   @media(max-width : 767px){
    min-width: 135px !important;


    .MuiButton-label{
      display: flex;
      align-items: center;
      justify-content: center;
    }
   }
  }
  .MuiButton-endIcon {
    position: absolute;
    right: 30px;
    margin-right: 0px;
    top: 50%;
    transform: translateY(-55%);


    @media(max-width: 767px){
      right: 15px;


      @media(max-width: 767px){
        right: 15px;
        position: absolute;
        margin-left: 0px;
        top: unset;
        transform: unset;
        display: flex;
        align-items: center;
      }
    }
  }
  .MuiButton-startIcon {
    position: absolute;
    left: 30px;
    margin-left: 0px;
    top: 50%;
    transform: translateY(-55%);

    @media(max-width: 767px){
      left: 15px;
      position: absolute;
      margin-left: 0px;
      top: unset;
      transform: unset;
      display: flex;
      align-items: center;
    }
  }
  .clear-my-choices {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: center;
    color: #0099ba;
    cursor: pointer;
    margin-top: 5px;


    @media(max-width: 1200px){
      font-size: 15px;
    }

    @media(max-width: 767px){
      font-size: 10px
    }
  }
  display: flex;
  margin: 50px -35px 0 -35px;

  @media(max-width: 1200px){
    margin: 30px -15px 0 -15px;
  }
  @media(max-width: 767px){
    flex-direction: row;
     margin: 16px 0px 0 0px;
  }

  .step_button{
    width: 100%;
    margin: 0 35px;


    @media(max-width: 1200px){
      margin: 0 15px;
    }
    @media(max-width: 767px){
      margin: 0px 10px 0 0;

      :last-child{
        margin: 0px 0px 0 0;
      }
    }
  }

`;
