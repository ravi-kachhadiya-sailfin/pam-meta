import { Box, IconButton, Modal, Stepper, TextField, TextareaAutosize } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const ToolsBody = styled(Box)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 35px 90px 20px 110px;
  width: 100%;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;

  @media only screen and (max-device-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 35px 40px 20px 40px;
  }
  
 
`;

export const ToolDataWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ToolPageTitle = styled(Box)`
  color: #0099ba;
  margin-bottom: 30px;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
`;

export const SubText = styled(Box)`
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  margin-top: -15px;
  color: #a9bdc5;
  line-height: 1.6;
`;

export const ToolDescription = styled(Box)`
  color: #09425a;
  max-width: 89ch;
  font-family: 'Source Sans Pro';
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  /* display: inline-block; */
  margin-top: 15px;
`;

export const MediaWrapper = styled(Box)`
  object-fit: cover;
  object-position: center;
  margin: 23px 0 15px 0;

  @media only screen and (max-device-width: 768px) {
    > img {
      width: 100vw;
      margin-left: -20px;
    }
  }
`;

export const ToolDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .tags {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .tags-details-first {
    margin-top: 4px;
    margin-right: 15px;
   
    @media(max-width: 767px){
      margin-right: 0px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    > div {
      margin-bottom: 15px;
    }

    .tags {
      justify-content: space-between;
    }
  }
`;

export const ToolSpecialityTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #0099ba;
  font-family: 'Source Sans Pro';
`;

export const ToolSpeciality = styled(Box)`
  font-size: 25px;
  font-weight: normal;
  color: #09425a;
  font-family: 'Source Sans Pro';
  max-width: 95%;

  @media only screen and (max-device-width: 768px) {
    max-width: 100%;
  }
`;

export const TagsWrapper = styled(Box)`
  width: 100%;
  font-size: 20px
  font-weight: bold;
  color: #a9bdc5;
  font-family: 'Source Sans Pro';
`;

export const CardTagTitle = styled(Box)`
  color: #a9bdc5;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1.5px;
`;

export const CardTags = styled.span`
  color: #09425a;
  font-size: 21px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
`;

export const CardRating = styled(Rating)`
  .MuiRating-iconEmpty {
    color: #ffffff !important;
    stroke: #cfd7d9 !important;
  }

  .MuiRating-sizeLarge {
    margin-top: 10px;
  }

  color: #09425a !important;

  .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    position: 'absolute';
    left: '50%', top: '50%';
  }
`;

export const CardIconButton = styled(IconButton)`
  padding: 6px !important;
  .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    :active {
      background-color: #09425a;
    }
  }
  .favorite-icon {
    font-size: 28px;
    color: #0099ba;
  }
`;

export const ExploreToolsWrappers = styled(Box)`
  text-align: right;
  > button {
    border-radius: 40px;
    max-width: 20%;
    font-family: 'Source Sans Pro';
    text-transform: unset;
  }

  @media (max-width: 1000px) {
    text-align: center;

    > button {
      max-width: 50%;
    }
  }

  @media only screen and (max-device-width: 768px) {
    > button {
      max-width: 100%;
    }
  }
`;

export const ModalWrapper = styled(Modal)`
  margin: 0px auto;
`;

export const BoardTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #09425A;
  font-family: 'Source Sans Pro';
`;

export const BoardSubTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #09425A;
  font-family: 'Source Sans Pro';
`;

export const BoardText = styled(Box)`
  font-size: 18px;
  color: #09425A;
  font-family: 'Source Sans Pro';
`;

export const StepperWrapper = styled(Stepper)`
  padding: 0px !important;

  > .MuiStep-horizontal {
    padding-left: 0px;
    padding-right: 5px;
  }
`;

export const StepperDetails = styled(Box)`
  display: flex;
  justify-content: space-between;
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
`;

export const FtTextField = styled(TextField)`
  .MuiInputBase-root {
    width: 100% !important;
    border-bottom: none !important;
  }

  .MuiInputLabel-formControl {
  }
  .MuiTextField-root {
    width: 100% !important
  }
  .MuiFormControl-root{
    width:100% !important
  }
  .MuiInput-underline:before{
    display:none !important
  }
  .MuiInput-underline:after{
    display:none !important
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
    width: 100% !important;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #09425a;
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

  .MuiFormLabel-root.Mui-error {
    color: #f19840;
  }

  input {
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 16.7px;
    background-color: #eff3f4;
    // border: solid 1px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    margin-top: 6px;
    border: solid 1px transparent;

    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
  }
`;

export const FtTextArea = styled(TextareaAutosize)`
    padding: 10px;
    border-radius: 16.7px;
    background-color: #eff3f4;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    margin-top: 6px;
    border: solid 1px transparent;
    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
  }
`;
