import { Box } from "@material-ui/core";
import styled from "styled-components";

export const ContainerBox = styled(Box)`
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  min-height: 100%;
  padding: 10px 75px 40px 75px;


  @media(max-width: 992px){
    padding: 10px 60px 20px;
  }
  @media(max-width: 767px){
    padding: 8px 10px 24px 10px;
  }

  .question {
    display: flex;
  }

  .questionNo {
    background-color: #a9bdc5;
    font-size: 25px;
    font-weight: 300;
    border-radius: 50%;
    width: 37px;
    height: 37px;
    text-align: center;
    color: #eff3f4;
    margin-right: 24px;
    padding: 0px 8px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;


    position: absolute;
    left: 16px;
    top: 13px;

    @media(max-width: 1366px){
      width: 35px;
      height: 35px;
      font-size: 23px;
    }
    @media(max-width: 1200px){
      width: 30px;
      height: 30px;
      font-size: 20px;
      margin-right: 20px;
    }
    @media(max-width: 992px){
      width: 25px;
      height: 25px;
      font-size: 18px;
      margin-right: 15px;
    }
    @media(max-width: 767px){
      width: 20px;
      height: 20px;
      font-size: 14px;
      margin-right: 10px;
      padding: 0px;

      left: 6px;
      top: 13px;
    }
  }

  .questionTitle {
    font-family: "Source Sans Pro";
    font-size: 30px;
    line-height: 1.3;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;


    @media(max-width: 1366px){
      font-size: 28px;
    }
    @media(max-width: 1200px){
      font-size: 25px;
    }
    @media(max-width: 992px){
      font-size: 20px;
    }
    @media(max-width: 767px){
      padding-left: 25px;
    }
  }

  @media only screen and (max-device-width: 768px)  {
    width: 100%;
  }
`;


export const ControlWrapper = styled(Box)`

  margin-top: 40px;



  .healthcare-select{
    max-width: 600px;
    @media(max-width: 767px){
      padding-left: 00px;
      padding-right: 00px;
    }
  }
  @media(max-width: 1366px){
    margin-top: 30px;
  }
  @media(max-width: 1200px){
    margin-top: 20px;
  }
  @media(max-width: 992px){
    margin-top: 12px;
  }
  .MuiButtonBase-roo{
    max-width: 600px;
  }


  &[data-type="radio"] {
    max-width: 100%;
    margin-left: 0px;
    margin-top: 20px;
    

    @media(max-width: 767px){
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media only screen and (max-device-width: 768px)  {
    max-width: 100%;
  }
`;
