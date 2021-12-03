import { Modal, TextareaAutosize } from '@material-ui/core';
import styled from 'styled-components';

export const PopUp = styled(Modal)`
  margin: 0px auto;
  position: absolute  !important;

  .select-top{
    margin-top: 60px;
  }

  .suggestion-top{
    margin-top: 60px;
  }

  .doc-wrapper{
    margin:58px 0px;
  }

  .send-feedback-btn{
    padding: 0px !important;    
    padding-bottom:20px !important;
  }

  @media(max-width: 1366px){
    .doc-wrapper{
       margin:50px 0px;
    }

    .suggestion-top{
      margin-top: 55px;
    }

    .select-top{
      margin-top: 55px;
    }

    .send-feedback-btn{
      font-size: 25px;
    }
  }
  @media(max-width: 1200px){
    .doc-wrapper{
       margin:40px 0px;
    }

    .suggestion-top{
      margin-top: 45px;
    }

    .select-top{
      margin-top: 50px;
    }

    .send-feedback-btn{
      font-size: 22px !important;
    }
  }

  @media(max-width: 992px){
    .doc-wrapper{
       margin:30px 0px;
    }

    .suggestion-top{
      margin-top: 35px;
    }

    .select-top{
      margin-top: 45px;
    }

    .feedback-input{
      input{
        height: 50px !important;
      }
    }

    .send-feedback-btn{
      font-size: 20px;
    }
  }

  @media(max-width: 767px){
    .doc-wrapper{
       margin:20px 0px;
    }

    .suggestion-top{
      margin-top: 26px;
    }

    .select-top{
      margin-top: 37px;
    }

    .send-feedback-btn{
      font-size: 18px;
    }

    .feedback-input{
      input{
        height: 40px !important;
      }
    }
    
  }
`;

export const ContentWrapper = styled.div`
  background-color: white;
  margin: 0px auto;
  margin-top: 100px;
  border-radius: 30px;
  padding: 15px 10px 20px 50px;
  font-family: 'Source Sans Pro';
  max-width: 60%;

  input{
    &:disabled{
      cursor: not-allowed;
    }
  }

  .feedback-text{
    margin-top: 70px;
    margin-bottom:60px;
    max-width: 620px;
    padding-left: 15px;
  }

  .type-options{
    padding-left: 10px;

    .MuiSvgIcon-root{
      width: 1em;
      height: 1em;
    }

    .MuiFormGroup-root{
      justify-content: space-between;
    }

    .MuiTypography-root{
      font-size: 20px;
      font-weight: 600;
    }

    @media (max-width: 1200px){
      .MuiTypography-root{
        font-size: 18px;
        font-weight: 600;
      }
      .MuiFormControlLabel-root{
        width: 48% !important;

        &:nth-child(2n) {
          justify-content: right;
        }
      }

     
    }

    @media (max-width: 767px){
      .MuiTypography-root{
        font-size: 14px;
      }

      .MuiSvgIcon-root{
        width: 0.8em;
        height: 0.8em;
      }
    }



    @media (max-width: 374px){
      .MuiFormControlLabel-root{
        width:auto !important;

        &:nth-child(2n) {
          justify-content: left;
        }
      }
    }
  }

  .feedback-text-bold{
    color:#09425A;
  }

  &.popup_content_wrapper{
    padding: 60px 55px;

    @media(max-width: 1366px){
      padding: 50px 45px;

      .feedback-text{
        margin-top: 60px;
        margin-bottom:55px;
        max-width: 540px;
        padding-left: 15px;
      }
    }

    @media(max-width: 1200px){
      padding: 40px 35px 20px 35px;

      .feedback-text{
        margin-top: 50px;
        margin-bottom:45px;
        max-width: 540px;
        padding-left: 15px;
      }
    }

    @media(max-width: 992px){
      padding: 30px 25px 30px 25px;
      border-radius: 20px;

      .feedback-text{
        margin-top: 40px;
        margin-bottom:35px;
        max-width: 440px;
        padding-left: 15px;
      }
    }
    @media(max-width: 767px){
      padding: 12px 17px 18px 17px;
      min-width: -webkit-fill-available;
      margin: 0px 10px;
      margin-top: 100px;

      .feedback-text{
        margin-top: 28px;
        margin-bottom:31px;
        max-width: 310px;

        font-size: 12px;
        padding-left: 10px;
      }
    }
  }

  @media (max-width: 1024px){
    max-width: 70%;
  }
`;

export const MessageText = styled.p`
  font-size: 33px;
  color: #0099BA;
  line-height: 40px;

  &.left-sided{
    max-width: 730px;
    margin-bottom: 115px;
  }

  @media(max-width: 1366px){
    font-size: 28px;
    line-height: 40px;

    &.left-sided{
      max-width: 620px;
      margin-bottom: 100px;
    }
  }
  @media(max-width: 1200px){
    font-size: 24px;
    line-height: 35px;

    &.left-sided{
      max-width: 550px;
      margin-bottom: 90px;
    }
  }

  @media(max-width: 992px){
    font-size: 18px;
    line-height: 25px;

    &.left-sided{
      max-width: 410px;
      margin-bottom: 60px;
    }
  }

  @media(max-width: 767px){
    font-size: 12px;
    line-height: 16px;

    &.left-sided{
      max-width: 280px;
      margin-bottom: 30px;
    }
  }
`;

export const FtTextArea = styled(TextareaAutosize)`
    padding: 10px;
    border-radius: 16.7px;
    background-color: #eff3f4;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 25px;
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
    resize: vertical;
    outline: none;
    min-height: 200px;

    &.input_radius input{
      border-radius:25px;
      padding-left:30px;
      padding-right:25px

      @media(max-width: 1366px){
        border-radius:22px;
        padding-left:22px;
        padding-right:25px
      }
      @media(max-width: 120px){
        border-radius:20px;
        padding-left:18px;
        padding-right:20px
      }
      @media(max-width: 992px){
        border-radius:17px;
        padding-left:15px;
        padding-right:15px

      }
      @media(max-width: 767px){
        border-radius:13px;
        padding-left:10px;
        padding-right:10px
      }

    }

    &.example_text_area_step_three{
      min-height: 200px;
      padding: 15px 20px;
      border-radius: 30px !important; 

      @media(max-width: 1366px){
        min-height: 180px;
      }
      @media(max-width: 1200px){
      min-height: 150px;
      border-radius: 25px !important; 

      }
      @media(max-width: 992px){
      min-height: 120px;
      border-radius: 20px !important; 

      }
      @media(max-width: 767px){
        min-height: 88px;
        border-radius: 15px !important; 
      }
    }

    &.example_text_area{
      resize: none;
      outline: none;
      border-radius: 30px;
      margin-top: 0px;
      font-size: 25px;
      line-height: 32px;
      width: 100%;

      @media(max-width: 1366px){
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
        line-height: 20px;
        border-radius: 20px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 18px;
        border-radius: 15px;
      }
      @media(max-width: 767px){
        font-size: 14px;
        line-height: 16px;
        border-radius: 13px;
      }
    }


    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
 


`;