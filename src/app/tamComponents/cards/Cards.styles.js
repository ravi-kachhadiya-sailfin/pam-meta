import { Radio } from "@material-ui/core";
import styled from "styled-components";

export const CardsTitle = styled.h1`
  margin: 0px;
  margin-bottom: 38px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 45px;
  letter-spacing: normal;
  text-align: left;
  color: #0099ba;
  font-size: 38px;


  &.login_after_card_wrapper{
     margin-bottom: 0px;
    @media(max-width: 992px){
      text-align: left;
    }

  }
  &.last_activity{
    margin-bottom: 45px;
    margin-top: 84px;

    @media(max-width: 992px){
      margin-bottom: 25px;
       margin-top: 45px;
    }
    @media(max-width: 767px){
      margin-bottom: 20px;
       margin-top: 35px;
    }



    .last_activity_main{
      font-size: 38px;
      line-height: 45px;
      color: #09425A;
      font-weight: 700;

      @media(max-width: 1366px){
        font-size: 34px;
        line-height: 38px;
      }
      @media(max-width: 1200px){
        font-size: 30px;
        line-height: 32px;
      }
      @media(max-width: 992px){
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        width: 100%;
      }
    }

    .last_activity_text{
      padding-top: 8px;
        @media(max-width: 992px){
          display: block !important;
        }

      .tools-right-for-me-title{
        font-size: 30px;
        line-height: 32px;
        font-weight: 400;

         @media(max-width: 1366px){
            font-size: 24px;
            line-height: 28px;
          }
          @media(max-width: 1200px){
            font-size: 20px;
            line-height: normal;
          }
          @media(max-width: 992px){
            text-align: left;
          }
   
      }
    }



    .cursor-p{
      @media(max-width: 992px){
        display: flex;
        align-items: center;
      }
    }
    i{
      color: #09425A;
      padding-left: 40px;
      font-size: 28px;
      line-height: 28px;
      
      @media(max-width: 1366px){
        font-size: 24px;
        line-height: 28px;
         padding-left: 30px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 18px;
         padding-left: 00px;

      }
    }
  }

  .mobile_arrow{
    display: none;
    @media(max-width: 992px){
      display: block;
      width: 15px;
      height: 15px;
      margin-top:10px;
      margin-left: auto;
    }
  }

  .mobile_arrow_two{
    display: none;
      @media(max-width: 992px){
        display: block;
        width: 15px;
        height: 15px;
        margin-top:0px;
        margin-left: auto;
      } 
  }
  .card_arrow_icon{
    @media(max-width: 992px){
      display: none;
    }
  }

  @media only screen and (max-width: 1366px) {
      font-size: 37px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 28px;
    line-height: normal;
  }
  @media only screen and (max-width: 992px) {
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 18px;
    margin-bottom: 13px;
  }
  .last-activity-text{
    font-size: 25px;
    color: rgb(9, 66, 90);
    display: flex;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 20px;
    }
  }
  .card-text{
    font-size: 25px; 
    color: #09425A;
    display:flex; 
    padding-top: 2rem; 
    justify-content: center;
    ${'' /* @media (max-width: 768px) {
      font-size: 20px;  
    } */}
    @media (min-width: 767px) {
      font-size: 20px;  
      justify-content: center;
      padding:2px;
    }
  }
  .pt-2{
    padding-top:2rem;
  }
  .card-text-blue{
    font-size: 21px;
    font-weight: 400;
    line-height: 25px;
    padding-top: 40px;
    color: #0099BA;

    @media(max-width: 992px){
      padding-top: 10px;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const CardsWrapper = styled.div.attrs((props) => ({
  className: props.bootstrapClass,
}))`


  &.flexible_step_two_card{
    background-color: transparent;
    box-shadow: none;
    padding: 0px;
    margin-bottom: 50px;
     @media(max-width: 1366px){
      margin-bottom: 40px;
     }
     @media(max-width: 1200px){
      margin-bottom: 30px;
     }
     @media(max-width: 992px){
      margin-bottom: 20px;
     }

    .exm_step_mood_card {
      margin-bottom: 0px;
    }
    .card-selection{
      margin: 20px 0 0 0px;
      @media(max-width: 1366px){
         margin: 15px 0 0 0px;
      }
      @media(max-width: 992px){
         margin: 10px 0 0 0px;
      }
    }
    .MuiSlider-marked{
      margin-top: 77px !important;
      margin-left: 25px;

      @media(max-width: 1366px){
        margin-top: 65px !important;
      }
      @media(max-width: 1200px){
        margin-top: 55px !important;
      }
      @media(max-width: 992px){
        margin-top: 45px !important;
        margin-left: 0px;
      }
      @media(max-width: 767px){
        margin-top: 36px !important;
      }
    }
    .slider_level{
      margin-left: 25px;
      margin-right: -25px;

      @media(max-width: 992px){
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }




  &.activate_bucket{
    border-radius: 30px;
    padding: 30px 0px;
    margin-bottom: 50px;
    // overflow-y: auto;
    // max-height: 505px;
    // min-height: 505px;


    @media(max-width: 1366px){
      max-height: 460px;
      min-height: 493px;
    }

    @media(max-width: 1200px){
      max-height: 460px;
      min-height: 487px;
      margin-bottom: 30px;
    }
    @media(max-width: 992px){
      max-height: 320px;
      min-height: 320px;
    }
    @media(max-width: 767px){
      max-height: 290px;
      min-height: 290px;
    }
    .by_date_rate_heart_col{
      display: flex;
      justify-content: space-between;

      @media(max-width: 992px){
        flex-direction: column;
        align-items: flex-end;
      }
    }

    .activate_bucket_scroll{
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: transparent; 
      }
      ::-webkit-scrollbar-thumb {
        background: #A9BDC5; 
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }

      overflow-y: auto;
      max-height: 505px;
      min-height: 505px;
      padding: 30px;

      @media(max-width: 1366px){
        max-height: 433px;
        min-height: auto;
      }
      @media(max-width: 1200px){
        max-height: 427px;
        min-height: auto;
        padding: 20px;
      }
      @media(max-width: 992px){
        max-height: 300px;
        min-height: auto;
        padding: 20px;
      }

      @media(max-width: 767px){
        max-height: 267px;
        min-height: auto;
        padding: 20px;
      }

    }
    @media(max-width: 992px){
      padding: 10px 0;
      border-radius: 20px;
    }
    @media(max-width: 767px){
        padding: 12px 0;
    }
    .activate_bucket_row{
      padding-top:25px;
      padding-bottom:25px;

      @media(max-width: 992px){
        padding-top:15px;
        padding-bottom:15px;
        align-items: center;
        display: flex;
      }
      @media(max-width: 767px){
        padding-top:10px;
        padding-bottom:10px;
      }
    }
    .activate_bucket_title{
      font-size: 25px;
      line-height: 29px;
      font-weight:600;
      padding-bottom: 20px;

      @media(max-width: 1366px){
        font-size: 22px;
        line-height: 24px;
      }

      @media(max-width: 992px){
        font-size: 20px;
        line-height: 22px;
        padding-bottom: 10px;
      }

      span{
        font-weight: 400;
          @media(max-width: 1366px){
            font-size: 22px;
            line-height: 24px;
          }
          @media(max-width: 992px){
            font-size: 16px;
            line-height: 20px;
          }
      }



}
    .bucket_tools_title{
      font-size: 25px;
      color:#0099BA;
      font-weight: 700;
      line-height: 27px;
      

      @media(max-width: 1366px){
        font-size: 25px;
      line-height: 27px;
      }
      @media(max-width: 1200px){
        font-size: 22px;
              line-height: 25px;
      }
      @media(max-width: 992px){
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width: 767px){
        font-size: 16px;
        line-height: 20px;
      }
    }
    .bucket_heart{
      margin-top: 5px;


      @media(max-width: 992px){
        margin-top: 0px;
      }

      @media(max-width: 767px){
        margin-top: 0px;
      }
      i{
      @media(max-width: 1366px){
        font-size: 23px;
        line-height: 25px;
      }
      @media(max-width: 1366px){
        font-size: 22px;
        line-height: 25px;
      }
      @media(max-width: 992px){
        font-size: 13px;
        line-height: 20px;
        width: 15px;
        height: 15px;
      }
      }
    }
  }

  &.after_login_card{
    padding: 22px 27px;
    border-radius: 30px;

    &:last-child{
       margin-bottom: 0px;
    }

    @media(max-width: 992px){
      padding: 10px 14px;
      border-radius: 20px;
      min-height: 100px;
      margin-bottom: 15px;
    }
  }

  .event_radio{
    margin-bottom: 20px;

    .event_radio_group{
      margin-left: -10px;
    }
    @media(max-width: 767px){
       margin-bottom: 00px;
    }
  }

  .padding_0{
    padding: 0px;
  }
  min-height: 138px;
  margin-bottom: 50px;
  box-shadow: 0px 20px 60px 0 rgba(59, 73, 81, 0.1);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px 75px;




  &.feelings_card{
    .card-action{
          font-size: 18px;
          @media(max-width: 767px){
            font-size: 12px;
          }
    }
    .card-header{
      .card-title{
        font-size: 30px;

           @media(max-width: 767px){
          font-size: 20px;
          margin-bottom: 8px;
        }
      }
    }
  }

  &.rate_card{
    .card-header{
      .card-title{
        font-size: 30px;

        @media(max-width: 767px){
          font-size: 20px;
          margin-bottom: 8px;
       
        }
      }
    }
  }
  &.experienced_card{
    .card-header{
      .card-title{
        font-size: 30px;

        @media(max-width: 767px){
          font-size: 20px;
          margin-bottom: 8px;
        }
      }
    } 
    .card-description{
      font-size: 20px;
      margin-left: 0px;
      font-weight: 400;


      @media(max-width: 992px){
        margin-left: 0;
      }
      @media(max-width: 767px){
        font-size: 14px;
        margin-left: 0;
      }
    }
  }

 &.rate_card{





  }

  
  .card-header {
    width: 100%;
    margin-bottom: 14px;
    display: flex;
     align-items: center;
   

    .card-number {

      background-color: #a9bdc5;
      font-size: 24px;
      padding-bottom: 1px !important;
      border-radius: 50%;
      width: 37px;
      height: 37px;
      text-align: center;
      color: #eff3f4;
      margin-right: 25px;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items:center;
      position:absolute;
      left: 16px;
      top: 13px;

      @media only screen and (max-width: 767px) {
        width: 20px;
        height: 20px;
        font-size: 14px;
        left: 6px;
        top: 14px;
      }

    }
      @media only screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      font-size: 14px;
      line-height: 20px;
      padding:0px;
      text-align:center;
      margin-right: 6px;
      margin-top: 5px;
      }



    .card-title {
      @media only screen and (max-width: 767px) {
        font-size: 20px;
      }
      font-family: "Source Sans Pro", sans-serif;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.07;
      letter-spacing: normal;
      text-align: left;
      color: #09425a;
    }
  }

  @media (max-width: 767px) {
    padding: 8px 34px;

    .card-header {
      margin-bottom: 4px;
       align-items: flex-start;
    }
  }
`;

export const CardContentWrapper = styled.div.attrs((props) => ({
  className: props.bootstrapClass,
}))`


  margin-bottom: 30px;

  &.bucket_wrapper{
    margin-bottom: 0px;
  }
  &.login_after_card_body{
     margin-bottom: 0px;
  }
  .login_after_card_row{
    @media(max-width: 992px){
      padding-top: 0px;
    }
  }
  .tools-right-for-me-title{
    font-size: 29px;
    line-height: 35px;
    font-weight: 400;
    word-break: break-word;
    white-space: pre-line;
    padding-right: 20px;

    @media(max-width: 1366px){
      font-size: 28px;
      line-height: 30px;
       padding-right: 15px;
    }
    @media(max-width: 992px){
      font-size: 20px;
      line-height: 25px;
       padding-right: 15px;
      
    }

  }
  .login_after_card_arrow{
    padding-left: 0px;
    padding-top: 0px !important;
    margin-left: auto;

    i{
      @media(max-width: 1024px){
        font-size: 20px;
      }
    }
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

  }

    .slider_level_text{
      last-child{
        margin-right: -10px;
      }
    }
  .radioControl {
    display: inline-block;

    input[type="checkbox"],
    input[type="radio"] {
      height: 20px;
      width: 20px;
      vertical-align: sub;
      margin-right: 10px;
    }

    input[type="radio"] + label {
      margin-right: 30px;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: left;
      color: #09425a;
    }

    input[type="radio"] {
      :after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: 0px;
        left: 0px;
        position: relative;
        background-color: transparent;
        display: inline-block;
        visibility: visible;
        border: 2px solid #0099ba;
      }

      :checked {
        :after {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          top: 0px;
          left: 0px;
          position: relative;
          background-color: #0099ba;
          display: inline-block;
          visibility: visible;
          border: 2px solid #0099ba;
        }
      }
    }
  }

.slider-container {
    margin: 30px 0px;
  }

  .card-action {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    margin-left:0;
  }

  .card-selection {
    @media only screen and (max-width: 767px) {
      width: 90%;
      margin: 18px 20px;
    }
    width: 100%;
    margin: 38px 0 0 -20px;
    float: left;

    .selection-text {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 19px;
      letter-spacing: normal;
      text-align: center;
      color: #09425a;
      margin-top: 5px;
      word-break: break-all;
      max-width: 70px;
    }

    ul.selection {
      margin: 0px;
      padding: 0px;
      list-style: none;
    }

    li {
      float: left;
      text-align: center;
      cursor: pointer;
      margin: 0 22px;

      :last-child {
        margin-right: 0px;
      }

      .selection-image {
        height: 66px;
        width: 66px;
        margin: 0 auto;
        /* border: 1px solid #cccccc; */
        border-radius: 50%;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }


       
      }
    }
  }

  .card-description {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.35;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    margin: 0px 0px 10px 32px;
  }
  .controls{
    // margin: 0px 0px 0px 0px;
    // padding-left: ;
    margin-top: 50px;


    .MuiFormGroup-root{
        margin-left: -10px;
    }
    .MuiFormControlLabel-root{
          margin-left: 0;
          margin-bottom: 0;
    }

    @media(max-width:767px){

      margin-top: 17px;

      .MuiGrid-item{
        margin-bottom: 15px;   
      }
      .MuiFormControlLabel-root{
          margin-bottom: 0px;

        .MuiRadio-root{
          padding-bottom: 0px;
          padding-top: 0px;
        }
        input[type=checkbox], input[type=radio]{
          margin: 0px;
        }
      }


    }

    

    .MuiSvgIcon-root{
      font-size: 30px;
      @media(max-width: 767px){
        font-size: 20px;
      }
    }

    .MuiTypography-body1{
      font-size: 25px;
      font-weight: 700;
      color: #09425A;


      @media(max-width: 767px){
        font-size: 15px;
      }
    }
    .PrivateSwitchBase-root-42{
      padding: 0px;
      padding-right: 15px;
    }




  }

  @media only screen and (max-width: 1366px) {
    .card-selection {
          margin: 38px 0 0 -14px;
      li{
        @media(max-width: 1366px){
          margin: 0 14px;
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .card-selection {
       margin: 22px 0px 10px -15px;
    }
  }
  @media only screen and (max-width: 992px) {
    .card-selection {
       margin: 22px 0px 10px -15px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 0;
    margin-bottom: 0;

    .card-action {
      font-size: 12px;
      margin-left:0;
    }

    .radioControl {
      display: block;
      width: 100%;
    }
    .card-selection {
    width: 100%;
    margin: 22px 0px 10px -10px;
    float: left;
    padding: 0 0px 0 0px;

    .selection-text {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 10px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: center;
      color: #09425a;
      margin-top: 2px;
    }

    ul.selection {
      margin: 0px;
      padding: 0px;
      list-style: none;
    }

    li {
      float: left;
      text-align: center;
      cursor: pointer;
      margin: 0px 10px !important;

      :last-child {
        margin-right: 0px;
      }

      .selection-image {
        height: 40px !important;
        width: 40px !important;
        /* border: 1px solid #cccccc; */
        border-radius: 50%;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }
      @media(max-width:360px){
        margin: 0px 7px !important;
      }
    }
  }
  }
  
`;

export const SliderContainerWrapper = styled.div`
  .rs-container {
    font-family: Arial, Helvetica, sans-serif;
    height: 45px;
    position: relative;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .rs-bg,
    .rs-selected {
      background-color: #eee;
      border: 1px solid #ededed;
      height: 10px;
      left: 0;
      position: absolute;
      top: 5px;
      width: 100%;
      border-radius: 3px;
      transition: all 0.2s linear;
    }

    .rs-pointer {
      background-color: #fff;
      border: 1px solid #bbb;
      border-radius: 4px;
      cursor: pointer;
      height: 20px;
      left: -10px;
      position: absolute;
      top: 0;
      transition: all 0.2s linear;
      width: 30px;
      box-shadow: inset 0 0 1px #fff, inset 0 1px 6px #ebebeb,
        1px 1px 4px rgba(0, 0, 0, 0.1);

      ::before {
        position: absolute;
        width: 1px;
        height: 9px;
        background-color: #ddd;
        left: 12px;
        top: 5px;
      }

      ::after {
        left: auto;
        right: 12px;
      }

      .rs-tooltip {
        color: #333;
        width: auto;
        min-width: 60px;
        height: 30px;
        background: #fff;
        border: 1px solid #00969b;
        border-radius: 3px;
        position: absolute;
        transform: translate(-50%, -35px);
        left: 13px;
        text-align: center;
        font-size: 13px;
        padding: 6px 10px 0;
      }
    }

    .disabled {
      .rs-selected {
        background-color: #ccc;
        border-color: #bbb;
      }

      .rs-pointer {
        border-color: #ccc;
        cursor: default;
      }

      .rs-scale {
        span {
          ins {
            color: #999;
          }
        }
      }

      .rs-tooltip {
        border-color: #ccc;
        color: #999;
      }
    }

    .rs-scale {
      left: 0;
      position: absolute;
      top: 5px;
      white-space: nowrap;

      span {
        float: left;
        position: relative;
        width: 50px;

        :before {
          background-color: #ededed;
          height: 8px;
          left: 0;
          position: absolute;
          top: 10px;
          width: 1px;
        }

        :last-child {
          margin-left: -1px;
          width: 0;
        }

        ins {
          color: #333;
          display: inline-block;
          font-size: 12px;
          margin-top: 20px;
          text-decoration: none;
          margin-left: -3px;
        }
      }
    }

    .rs-noscale {
      span {
        :before {
          display: none;
        }

        :first-child {
          :before {
            display: block;
          }
        }

        :last-child {
          :before {
            display: block;
          }
        }
      }
    }

    .sliding {
      .rs-pointer,
      .rs-selected {
        transition: none;
      }
    }
  }
`;

export const ControlWrapper = styled.div`
  margin-bottom: 30px;

  .radioControl {
    display: inline-block;

    input[type="checkbox"],
    input[type="radio"] {
      height: 20px;
      width: 20px;
      vertical-align: sub;
      margin-right: 10px;
    }

    input[type="radio"] + label {
      margin-right: 30px;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 14px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.35;
      letter-spacing: normal;
      text-align: left;
      color: #09425a;
    }

    input[type="radio"] {
      :after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: 0px;
        left: 0px;
        position: relative;
        background-color: transparent;
        display: inline-block;
        visibility: visible;
        border: 2px solid #0099ba;
      }

      :checked {
        :after {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          top: 0px;
          left: 0px;
          position: relative;
          background-color: #0099ba;
          display: inline-block;
          visibility: visible;
          border: 2px solid #0099ba;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .radioControl {
      display: block;
      width: 100%;
    }
  }
`;

export const ContinueButton = styled.input.attrs(() => ({
  type: "button",
  value: "Continue",
}))`
  background: #f19840;
  border-radius: 30px;
  box-shadow: 15px 15px 20px 0 rgba(59, 73, 81, 0.1);
  width: 100%;
  border: none;
  margin-top: 20px;
  margin-bottom: 14px;
  outline: none;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 25px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  height: 78px;
  border-radius: 40px;

   @media(max-width:992px){
     height: 45px;
     font-size: 18px;
    margin-top: 0px;
   }



`;
export const ClearALLButton = styled.a`
  width: 100%;
  text-align: center;
  color: #0099ba;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  @media(max-width:992px){
      font-size: 12px;
  font-weight: 400;
  }
`;

export const RadioCustom = styled(Radio)`
  background-color: green;
`;
