import styled from 'styled-components';
import { Box, ButtonBase, Checkbox, Input, Modal, Select, Tab, TextField, Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

export const LoginPageWrapper = styled(Modal)`
  margin: 0px auto;
  margin-top: ${(props) => props.topMargin};
  padding: 0px;
  height: fit-content;
  width: 1034px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;

  .hyperlink {
    color: #0099BA;
    text-decoration: underline;
    cursor: pointer;
  }


  .otp_button_group{
    padding: 0px 9px !important;
  }

  .eye_icon{
      position: absolute;
      right: 10px;
      top: 54%;
      transform: translateY(-50%);


      @media(max-width: 992px){
        right: 0px;
      }
  }

  .eye_icon .MuiSvgIcon-root{
    font-size: 30px;

    @media(max-width: 1366px){
        font-size: 25px;
    }
    @media(max-width: 992px){
        font-size: 20px;
    }
    @media(max-width: 767px){
        font-size: 18px;
    }

  }

  @media(max-width: 1366px){
    width: 700px;
  }

  

  @media only screen and (max-width: 767px) {
    width: calc(100% - 20%);
    margin-top: 200px;
  }
  @media only screen and (max-width: 575px) {
    width: calc(100% - 20px);
    margin-top: 100px;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
export const FormDiv = styled.div`
  height: 100%;
  outline: none;
`;
export const ForgotPasswordModal = styled(Modal)`
  margin: 0px auto;
  margin-top: 100px;
  padding: 0px;
  height: fit-content;
  width: 700px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;
  position: absolute !important;
  .reset_password{
    margin-top: 30px;
  }

  @media(max-width: 1366px){
      width: 600px;
  }

  @media(max-width: 767px){
      width: calc(100% - 20px);
  }

  h3{
    font-size: 60px;
    font-weight: 700;
    color: #009ABB;
    margin-top: 0px;


    @media(max-width: 1366px){
       font-size: 55px;
    }
    @media(max-width: 1200px){
       font-size: 50px;
    }
    @media(max-width: 992px){
       font-size: 40px;
    }
    @media(max-width: 767px){
       font-size: 20px;
        margin-bottom: 5px;
    }
  }
  h5{
    font-size: 25px;
    font-weight: 400;
    color: #a9bdc5;

      @media(max-width: 1366px){
       font-size: 20px;
    }
      @media(max-width: 767px){
       font-size: 14px;
       margin-top: 0px;
    }
  }




  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

`;

export const LoginTextFieldWrapper = styled(TextField)`
  .MuiInputBase-root {
    width: available;
    border-bottom: none !important;
  }
  &.reg_password{
    margin-bottom: 20px;

    @media(max-width: 767px){
        margin-bottom: 10px;
    }
  }

  .MuiInputLabel-formControl {
  }

  .MuiFormLabel-root {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px !important;
    font-weight: bold !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    width: 100%;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #09425a;
  }

  .MuiFormHelperText-root {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #A9BDC5;

    @media(max-width: 1366px){
      font-size: 20px;
      margin-top: 10px;
    }
    @media(max-width: 1200px){
      font-size: 16px;
      margin-top: 8px;
    }

    @media(max-width: 767px){
      font-size: 12px;
      margin-top: 4px;
    }
  }

  .MuiFormHelperText-root.Mui-error {
    color: #f19840;
  }

  .MuiFormLabel-root.Mui-error {
    color: #f19840;
  }

  input {
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
      font-size: 18px;
      padding: 0px 25px;
    }
    @media(max-width: 992px){
      height: 42px;
      font-size: 15px;
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
`;

export const LoginFootnote = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  width:100%;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;
  margin-left: 10px;
  margin-top: 15px;

  @media(max-width: 1366px){
    font-size : 20px;
    line-height: normal;
  }
  @media(max-width: 1200px){
    font-size : 16px;
  }
  @media(max-width: 767px){
    font-size : 12px;
  }


`;
export const LoginLabel = styled.label`
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
`;

export const SubLoginLabel = styled.label`
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

  &&.privacy_policy_cs{
    font-size: 32px;
    font-weight: 700;
    color: #A9BDC5;
    margin-top: 30px;
    margin-bottom: 10px;
    margin-left: 10px;



    @media(max-width: 1200px){
        font-size: 24px;
    }
    @media(max-width: 767px){
        font-size: 18px;
         margin-bottom: 15px;
         margin-top: 10px;
    }
  }
`;

export const SubLoginLabelBlue = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #007C91;
  margin-left: 10px;
  margin-bottom: 30px;



  @media(max-width: 1366px){
    font-size: 20px;
    margin-bottom: 15px;
  }
  @media(max-width: 767px){
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const CheckBoxLabel = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 27px;
  letter-spacing: normal;
  text-align: left;
  color: #09425A;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 0px;



  @media(max-width: 1200px){
    font-size: 16px;
  }
  @media(max-width: 767px){
    font-size: 12px;
    margin-left: 0px;
  }
`;

export const LoginTab = styled(Tab)`
  color: #09425a;
  font-weight: 300;
  padding: 34px 63px !important;
  border-top-left-radius: 30px !important;


    @media(max-width: 1366px){
      padding: 24px 53px 15px 53px !important;
    }
    @media(max-width: 767px){
      padding: 18px 24px !important;
    }

  .MuiTab-wrapper {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 70px;
      font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    text-transform: none;
    align-items: flex-start;
    color: #09425A;

    @media(max-width: 1366px){
      font-size: 55px;
    }
    

    @media(max-width: 1200px){
      font-size: 50px;
       line-height: 45px;
    }

    @media(max-width: 992px){
      font-size: 40px;
       line-height: normal;
    }
    @media(max-width: 767px){
      font-size: 20px;
       line-height: normal;
    }
  }
  &.Mui-selected{
    span{
      font-weight: 700;
      color: #0099BA;
    }
  }

  // .MuiTab-wrapper.selected {

  //   color: red !important;
  // }
`;

export const RegistrationTab = styled(Tab)`
  color: #09425a;
  font-weight: 300;
  padding: 34px 53px !important;
  border-top-right-radius: 30px !important;


  @media(max-width: 1366px){
    padding: 24px 53px 15px 53px !important;
  }
  @media(max-width: 767px){
      padding: 18px 24px !important;
  }


  .MuiTab-wrapper {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 70px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    text-transform: none;
    align-items: flex-end;
    color: #09425A;

    @media(max-width: 1366px){
      font-size: 55px;
    }
    @media(max-width: 1200px){
      font-size: 50px;
       line-height: 45px;
    }
    @media(max-width: 992px){
      font-size: 40px;
       line-height: normal;
    }

    @media(max-width: 767px){
      font-size: 20px;
       line-height: normal;
    }
  }
  &.Mui-selected{
    span{
      font-weight: 700;
      color: #0099BA;
    }
  }

  // .MuiTab-wrapper.selected {
  //   font-weight: 600;
  //   color: #0099ba !important;
  // }
`;
export const LoginCheckbox = styled(Checkbox)`
  .MuiIconButton-label {
    .MuiSvgIcon-root {
      color: #0099ba;
      font-size: 30px;
      width: 30px;
      height: 30px;
      
    }
  }
`;

export const LoginButton = styled(ButtonBase)`
  width: 100% !important;
  height: 78px;
  //margin-top: 10px !important;
  //margin: 17.5px 29.7px 18.1px 19.9px !important;
  //padding: 10.2px 58.9px 12.7px 58.9px !important;
  border-radius: 40px !important;
  background-color: #f19840 !important;
  color: white !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 25px !important;
  font-weight: bold !important;
  font-stretch: normal !important;
  font-style: normal !important;
  margin: 95.9px 0 0 2.8px;
  padding: 5px 177.1px 9.2px 178.1px;
  // box-shadow: 15px 15px 10px 0 rgba(59, 73, 81, 0.1);


  &.otp_button{
    margin-top: 30px;
    margin-bottom: 15px;
  }

  &.forgot_password{
    margin-top: 30px; 
    margin-bottom: 15px; 
  }
  &reset_password{
    margin-top: 30px;
    margin-bottom: 0px;
  }

  @media(max-width: 1366px){
    height: 60px;

  }
  @media(max-width: 1200px){
    height: 50px; 
  }
  @media(max-width: 767px){
      height: 42px;
      font-size: 18px !important;
  }

  :hover {
    background-color: #e87e1f !important;
  }

  :disabled {
    background-color: #cfd7d9 !important;
  }
`;

export const CloseIcon = styled(HighlightOffIcon)`
  float: right;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

export const PrivacyTypography = styled(Typography)`
  font-family: 'Source Sans Pro', sans-serif !important;
  //margin-top: 6px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;

  &&.by_click_text{
    font-size: 25px;
    line-height: 30px;
    color: #A9BDC5;
    margin-left: 10px;

    @media(max-width: 1200px){
      font-size: 18px;
    }
    @media(max-width: 767px){
      font-size: 12px;
    }
  }

  &&.privacy_policy_text_cs{
    font-size: 25px;
    line-height: 30px;
    color: #A9BDC5;
    margin-bottom: 74px;

    @media(max-width: 1366px){
       font-size: 20px;
    }
    @media(max-width: 1200px){
      font-size: 18px;
      margin-bottom: 20px;
    }
    @media(max-width: 767px){
        font-size: 12px;
        margin-bottom: 20px;
    }


    margin-left: 10px;

    a{
      color: #0099BA;
    }
  }

`;

export const RegistrationFormNote = styled(Typography)`
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 15px !important;
  font-weight: normal !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07 !important;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;
  margin-bottom: 14px !important;
`;

export const RegistrationSelect = styled(Select)`
  padding: 9px 30px;
  font-family: "Source Sans Pro", sans-serif !important;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  width: 100% !important;
  height: 68px !important;
  border-radius: 33px;
  background-color: #eff3f4;
  margin-top: 10px !important;
  font-size: 25px !important;



  @media(max-width: 1366px){
    height: 52px !important;
    667,3:   padding: 9px 25px;
  }

  @media(max-width: 1200px){
    font-size: 18px !important;
  }
  @media(max-width: 992px){
    padding: 9px 15px;
  }
  @media(max-width: 767px){
    height: 42px !important;
    font-size: 15px !important;
  }

  & .MuiSvgIcon-root {
    color: #0099ba;
    height: 40px;
    width: 40px;
    top: unset;
    right: 15px;

  }

  .MuiSelect-select:focus {
    border-radius: inherit;
    background-color: unset;

  }

  //Todo while active or focused change selected area shape
  .MuiSelect-select.MuiSelect-select {

  }


  @media only screen and (max-width: 767px) {
    & .MuiSvgIcon-root {
      color: #0099ba;
      height: 30px;
      width: 30px;
      top: unset;

    }
  },
`;

export const ToggleButtonLoginPage = styled(ToggleButton)`
  height: 32.5px !important;
  //margin: 10.5px 2.8px 8px 0;
  border-radius: 16.3px !important;
  background-color: #0099ba !important;
  margin-top: 4px !important;

  .MuiToggleButton-label label {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 15px;
    font-weight: 100 !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    text-transform: none;
    margin-bottom: 0px;
  }

  &:hover,
  &:focus,
  &::selection {
    background-color: #09425a !important;
  }
`;

export const ToggleButtonGroupLoginPage = styled(ToggleButtonGroup)`
  width: 100%;

  .MuiToggleButtonGroup-groupedVertical {
    :hover {
      color: #09425a !important;
    }
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  width: 100% !important;
  height: 78px;
  //margin-top: 10px !important;
  //margin: 17.5px 29.7px 18.1px 19.9px !important;
  //padding: 10.2px 58.9px 12.7px 58.9px !important;
  border-radius: 40px !important;
  background-color: #007c91 !important;
  color: white !important;
  font-family: 'Source Sans Pro', sans-serif !important;
  font-size: 25px !important;
  font-weight: bold !important;
  font-stretch: normal !important;
  font-style: normal !important;
  margin: 95.9px 0 0 2.8px;
  padding: 5px 177.1px 9.2px 178.1px;
  // box-shadow: 15px 15px 10px 0 rgba(59, 73, 81, 0.1);





  @media(max-width: 1366px){
    height: 60px;

  }
  @media(max-width: 1200px){
    height: 50px;
  }
  @media(max-width: 767px){
      height: 42px;
      font-size: 18px !important;
  }

  :hover {
    background-color: #09425a !important;
  }

  :disabled {
    background-color: #cfd7d9 !important;
  }
`;

export const OTPInput = styled(Input)`
  .MuiInputBase-root {
    width: available;
    border-bottom: none !important;
  }
  .MuiFormLabel-root {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px !important;
    font-weight: bold !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    width: 100%;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #09425a;
  }

  .MuiFormHelperText-root {
    margin-top: 15px;
    margin-left: 10px;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #A9BDC5;
  }

  .MuiFormHelperText-root.Mui-error {
    color: #f19840;
  }

  .MuiFormLabel-root.Mui-error {
    color: #f19840;
  }
  .MuiInputAdornment-root {
    margin-left: 0px;
  }
  input {
    width: available;
    border-bottom: none !important;
    height: 33px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 16.7px;
    background-color: #eff3f4;
    /* border: solid 1px; */
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    margin-top: 6px;

    &:hover,
    :focus {
      border: solid 1px #0099ba;
      height: 32px;
    }
  }
`;

export const ModalContentWrapper = styled(Box)`
  background-color: white;
  border-radius: 30px;
  outline: none;


  .login_bg{
    background-color: white;
    border-radius: 30px;

    @media(max-width: 767px){
      border-radius: 20px;
    }
  }

  &.forgot_password_wrapper{
    padding: 53px;

    @media(max-width: 1200px){
      padding: 43px;
    }
    @media(max-width: 767px){
      padding: 27px 17px 17px 17px;
    }

  }

  .forgot_password_form{
    margin-top: 50px;

    @media(max-width: 1200px){
      margin-top: 30px;
    }
    @media(max-width: 767px){
      margin-top: 10px;
    }
  }


  @media(max-width: 767px){
    border-radius: 20px;
  }

  .form_group_cs{
    padding :  36px 53px 53px 53px;


    @media(max-width: 1200px){
      padding: 36px 43px 43px 43px;
    }
    @media(max-width: 767px){
        padding :  0px 17px 17px 17px;
    }
  }

`;

export const InputContentWrapper = styled.div`
  width:100%;
`


  ;



