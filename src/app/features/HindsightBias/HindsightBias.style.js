// import { Box, Button } from "@material-ui/core";
import styled from "styled-components";

export const PreAssessmentContainer = styled.div`
  .intital_step{
    padding: 48px 54px;
  }
`;

export const HindsightBiasAssesmentContainer = styled.div`
  .mb-4{
    margin-bottom:24px
  }
  
  .radio-style{
   .MuiFormControlLabel-root {
        margin-right: 65px;

        @media(max-width:767px){
          width:100% !important;
          display:block;
        }
    }
    .MuiTypography-body1 {
      font-size: 20px;
      font-weight: 500;
      line-height: 17.5px;
      color:#09425A;

      @media(max-width:767px){
        font-size:17px;
      }
    }
    .MuiIconButton-label {
      .MuiSvgIcon-root {
          color: #0099ba;
          width: 28px;
          height: 28px;
      }
    }
    .MuiTypography-body1 {
      padding-top:0
    }
  }
  
  .checkbox-style{
  //  input:hover ~ span{
  //    background-color: #fff;
  //    background-image: none;
  //  }

    margin-bottom:20px;
    .sortingLabel{
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      color:#09425A;
      cursor:pointer;

      @media(max-width:767px){
        font-size:17px;
      }
    }
    &.checkbox-1{
      .MuiFormControlLabel-root{
        display:flex;
      }
    }

    .MuiTypography-body1 {
        line-height: 17px;
        padding-top: 7px;
        padding-left:15px;
        margin-right:45px;
    }
  }


  .luke_card{
    @media(max-width:992px){
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;


      .order-1{
        -webkit-order: 1;
        -ms-flex-order: 1;
        order:1;
        margin-bottom:27px;
      }
      .order-2{
        -webkit-order: 2;
        -ms-flex-order: 2;
        order:2;
      }
    }
    @media(max-width:767px){
      .br-visible{
        display:none
      }
    }
    .if_you_text{
      @media(max-width:767px){
        margin-bottom:15px
      }      
    }

    .input-height{
      min-height:201px;

      @media(max-width:1366px){
        min-height:108px;
      }
      @media(max-width:1200px){
        min-height:150px;
      }
      @media(max-width:992px){
        min-height:120px;
      }
      @media(max-width:767px){
        min-height:106px;
        margin-bottom:12px
      }
    }

    .textarea-top-space{
      margin-top:25px !important;
    }
    .textarea-top-space1{
      margin-top:6px !important;
    }

    .flex_home_card_title{
      font-size: 35px;
      font-weight: 700;
      line-height: 40px;
      font-family: 'Source Sans Pro';
      margin-bottom: 6px;
      margin-top: 0px;
      color: #09425A;
    
      @media(max-width:1366px)
      {
        margin-bottom: 6px;
        font-size: 30px;
        line-height: 35px;
      }
      @media(max-width:1200px)
      {
        font-size: 25px;
        line-height: 30px;
      }
      @media(max-width:992px)
      {
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width:767px)
      {
        font-size: 18px;
        line-height: 25px;
        
      }
    }
    .add-bottom-space-radio{
      margin-bottom:21px;

      @media(max-width:1366px){
        margin-bottom:18px;
      }
      @media(max-width:1200px){
        margin-bottom:16px;
      }
      @media(max-width:992px){
        margin-bottom:15px;
      }
      @media(max-width:767px){
        margin-bottom:12px;
      }
    }
    .radio-space{
      margin-top:15px;

      @media(max-width:767px){
        margin-top:0px;
      }

    }
    .add-top-space-radio{
      margin-top:3px;
    }

    .try-saying-space{
      padding-bottom:10px;
    }
    .step3-space{
      margin-top:15px;
    }

    .step-2-bottom-space{
      margin-bottom:26px;

      @media(max-width:1366px){
        margin-bottom:22px;
      }
      @media(max-width:1200px){
        margin-bottom:17px;
      }
      @media(max-width:992px){
        margin-bottom:13px;
      }
      @media(max-width:767px){
        margin-bottom:10px;
      }
    }
    .whats-fact-space{
      margin-top:10px;
    }

    .exm_flex_one{
      margin-bottom: 28px;

      @media(max-width: 1366px){
        margin-bottom: 25px;
      }
      @media(max-width: 1200px){
        margin-bottom: 20px;
      }
      @media(max-width: 992px){
        margin-bottom: 15px;
      }
      @media(max-width: 767px){
        margin-bottom: 10px;
      }
    }

    .lets-focus-space{
      padding-top:17px;

      @media(max-width:1366px){
        padding-top:13px;
      }
      @media(max-width:1200px){
        padding-top:10px;
      }
      @media(max-width:992px){
        padding-top:8px;
      }
      @media(max-width:767px){
        padding-top:4px;
      }


    }
    .add-ratio-space{
      margin-top:49px;

      @media(max-width: 1366px){
        margin-top: 40px;
      }
      @media(max-width: 1200px){
        margin-top: 35px;
      }
      @media(max-width: 992px){
        margin-top: 30px;
      }
      @media(max-width: 767px){
        margin-top: 23px;
      }
    }

    .if_you_text{
      font-Size:20px;
      line-height:25px;
      font-Weight:bold;
      color: #0099BA;

      @media(max-width: 1200px){
        font-Size:16px;
        line-height:18px;
      }
      @media(max-width: 992px){
        font-Size:14px;
        line-height:16px;
      }
      @media(max-width: 767px){
        font-Size: 14px;
        line-height:16px;
      }
    }
    .collapse_title{
      width:100%;
      border-bottom: 1px solid #A9BDC5;
      padding-bottom:0

    }
    .collapse-block{
      display:flex;
    }
    .add-top-space{
      margin-top:36px;
    }

    .collapse_arrow_icon {
        margin-left: 0px;
        padding-top:0
    }
    .arrow {
      margin-left: 40px;
      position: relative;
      top: -10px;
    }

    .step1-space{
      p{
        margin-bottom:1px;
      }
    }
    .think-space{
      p{
        margin-bottom:30px;

        @media(max-width: 1366px){
          margin-bottom: 27px;
        }
        @media(max-width: 1200px){
          margin-bottom: 23px;
        }
        @media(max-width: 992px){
          margin-bottom: 20px;
        }
        @media(max-width: 767px){
          margin-bottom: 18px;
        }

      }
    }
  }


  
  .gloria-img{
    text-align:center;


    .step-main-image{
      max-width:406px;
      width:100%;

      @media(max-width:1366px){
        max-width:350px;
      }
      @media(max-width:1200px){
        max-width:300px;        
      }
      @media(max-width:992px){
        max-width:250px;
      }
      @media(max-width:767px){
        max-width:191px;
      }
    }

    .step-first-image{
      max-width:628px;
      width:100%;

      @media(max-width:1366px){
        max-width:500px;
      }
      @media(max-width:1200px){
        max-width:400px;
      }
      @media(max-width:992px){
        width:300px;
      }
      @media(max-width:767px){
        width:246px;
      }
    }
    .step-second-img{
      max-width:628px;
      width:100%;

      @media(max-width:1366px){
        max-width:500px;
      }
      @media(max-width:1200px){
        max-width:400px;        
      }
      @media(max-width:992px){
        width:300px;
      }
      @media(max-width:767px){
        width:246px;
      }
    }
    .step-three-img{
      max-width:665px;
      width:100%;

      @media(max-width:1366px){
        max-width:565px;
      }
      @media(max-width:1200px){
        max-width:465px;
      }
      @media(max-width:992px){
        max-width:365px;
      }
      @media(max-width:767px){
        max-width:271px;
      }
    }

    .step-forth-img{
      max-width:591px;
      width:100%;

      @media(max-width:1366px){
        max-width:500px;
      }
      @media(max-width:1200px){
        max-width:450px;
      }
      @media(max-width:992px){
        max-width:350px;
      }
      @media(max-width:767px){
        max-width:288px;
      }
    }
    .step-forth-img-2{
      max-width:428px;
      width:100%;

      @media(max-width:1366px){
        max-width:400px;
      }
      @media(max-width:1200px){
        max-width:320px;
      }
      @media(max-width:992px){
        max-width:250px;
        margin-top:24px;
      }
      @media(max-width:767px){
        max-width:191px;
      }
    }
    .step-fifth-img{
      max-width:566px;
      width:100%;

      @media(max-width:1366px){
        max-width:500px;
      }
      @media(max-width:1200px){
        max-width:465px;
      }
      @media(max-width:992px){
        max-width:365px;
      }
      @media(max-width:767px){
        max-width:293px;
      }
    }
    .step-sixth-img{
      max-width:590px;
      width:100%;

      @media(max-width:1366px){
        max-width:537px;
      }
      @media(max-width:1200px){
        max-width:437px;
      }
      @media(max-width:992px){
        max-width:337px;
      }
      @media(max-width:767px){
        max-width:265px;
      }
    }
    .step-seventh-img{
      max-width:450px;
      width:100%;

      @media(max-width:1366px){
        max-width:400px;
      }
      @media(max-width:1200px){
        max-width:350px;
      }
      @media(max-width:992px){
        max-width:300px;
      }
      @media(max-width:767px){
        max-width:283px;
      }
    }
    .step-seventh-img-2{
      max-width:450px;
      width:100%;

      @media(max-width:1366px){
        max-width:400px;
      }
      @media(max-width:1200px){
        max-width:350px;
      }
      @media(max-width:992px){
        max-width:300px;
      }
      @media(max-width:767px){
        max-width:286px;
      }
    }



  }
`;

export const NormalSubTitle = styled.p`
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 36px;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;

  &.normal-text{
    color: #0099BA;
    font-weight: 400;
  }

  @media(max-width:1366px){
    line-height: 35px;
  }
  @media only screen and (max-device-width: 1200px) {
    font-size: 27px;
    line-height: 34px;
  }
  @media only screen and (max-device-width: 1024px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media only screen and (max-device-width: 992px) {
    font-size: 25px;
    line-height: 30px;
  }
  @media only screen and (max-device-width: 768px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media only screen and (max-device-width: 390px) {
    font-size: 15px;
    line-height: 20px;
  }
}`;