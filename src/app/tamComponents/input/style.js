import styled from "styled-components";
import {
  TextField
} from "@material-ui/core";

export const InputWrapper = styled(TextField)`
  .MuiFormLabel-root {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px !important;
    font-weight: bold !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    width: 100%;
    color: #09425a;
  }

  .MuiFormLabel-root.Mui-error {
    color: #f19840;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #09425a;
  }

  .MuiInputBase-root {
    width: available;
    border-bottom: none !important;
  }

  .MuiInputBase-root   input {
    height: 66px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 37px;
    background-color: #eff3f4;
    // border: solid 1px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    margin-top: 6px;
    border: solid 1px transparent;
    padding: 0px 30px;

    @media(max-width: 1366px){
       height: 50px;
       padding: 0px 25px;
      font-size: 18px;
    }

    @media(max-width: 992px){
      padding: 0px 15px;
    }
    @media(max-width: 767px){
      height: 42px;
      font-size: 15px;
    }

    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
  }

  .MuiFormHelperText-root {
    margin-top: 6px;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #a9bdc5;
  }

  .MuiFormHelperText-root.Mui-error {
    color: #f19840;
  }
`;

export const LabelWrapper = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;
  width: 100%;
  margin-bottom: 11px;
  margin-left: 10px;

  @media(max-width: 1366px){
    font-size: 28px;
    margin-bottom: 4px; 
  }
  @media(max-width: 1200px){
    font-size: 24px;
    margin-bottom: 4px; 
  }
  @media(max-width: 767px){
    font-size: 14px;
    margin-bottom: 4px;
  }

  .star_input{
    font-size: 30px;
    color: #007C91;
    line-height: 32px;
    font-weight: 400;

    @media(max-width : 767px){
      font-size: 14px;
      line-height: 16px;
    }
  }

  .sub-label {
    font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;
  margin-bottom: 0px;

  @media(max-width:  1366px){
    font-size: 20px;
  }
  @media(max-width:  1200px){
    font-size: 16px;
  }
  @media(max-width: 767px){
    font-size: 12px;
  }
  }
`;