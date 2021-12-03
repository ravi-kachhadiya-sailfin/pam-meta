import styled from "styled-components";

export const FAQSectionWrapper = styled.section.attrs(() => ({
  class: "content",
}))`

  
  .container{
    background-color: #eff3f4;
    width: 100%;
    max-width: 1165px;
    padding:0px;

     ${'' /* @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    } */}
  }
  .panel-group{
    margin-top: 90px;
    margin-bottom:100px;
  }
  .faq section.header .hello {
    display: block;
  }

  .faq section.header .hello-desc {
    display: block;
    padding-left: 0px;
    padding-top: 20px;
  }

  .panel.faq-panel {
    background-color: transparent;
    box-shadow: none;
    position: relative;
  }

  .panel-heading{
    padding: 10px 0px;
  }

  .panel.faq-panel .panel-heading .panel-title a {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 30px;
    line-height:32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    text-decoration: none;
    width: 100%;
    display: block;
    padding-bottom: 27px;
    padding-right:30px;
  }

  img.right-arrow{
    height:21px;
    position:relative;
    top:-5px;

    @media(max-width:767px){
      position:unset
    }
  }

  img.down-arrow{
    width:23px;
  }

  .panel.faq-panel .panel-heading .panel-title a.collapsed {
    border-bottom: 1px solid #cfd7d9;
  }

   .panel-title a:last-child{
    border-bottom: none;
  }

  .panel.faq-panel .panel-collapse .panel-body {
    border-radius: 30px;
    background-color: #ffffff;
    border: none;
    padding: 47px 40px 43px 40px;
    margin-top: -10px;
    margin-bottom: 20px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: #09425a;
    box-shadow: 0px 20px 60px #00000029;
    z-index:100px;
  }

  .panel.faq-panel .panel-collapse .panel-body .sub-header {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    margin-bottom: 40px;
  }

  .arrow{
    margin-left:-35px;
  }

  .video-testimonial-block {
    position: relative;
    width: auto;
    height: 300px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 500px;
    background-color: #09425a;
    border-radius: 20px;
    overflow: hidden;
  }
  .video-testimonial-block .video-thumbnail {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    background-size: cover;
    top: 0;
    left: 0;
  }
  .video-testimonial-block .video {
    background-color: #09425a;
  }
  .video-testimonial-block .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0px;
  }
  .video-testimonial-block .video-play {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -40px;
    text-decoration: none;
  }
  .video-testimonial-block .video-play::before {
    content: "";
    background-color: #0099ba;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: block;
  }
  .video-testimonial-block .video-play::after {
    content: "";
    height: 0;
    width: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -8px;
  }
  .video-testimonial-block .video-play:hover::before {
    color: #172651;
  }

  @media (max-width: 1366px){
    .panel-group{
      margin-top: 60px;
      margin-bottom:80px;

      padding: 0px 45px;
    }

    .panel.faq-panel {
      margin-top:0px;
    }

    .panel.faq-panel .panel-heading .panel-title a{
      font-size: 26px;
      line-height:26px;
      padding-bottom: 24px;
    }

    img.right-arrow{
      height:18px;
    }

    img.down-arrow{
      width:19px;
    }

    .panel.faq-panel .panel-collapse .panel-body {
      border-radius: 30px;
      padding: 37px;
    }
  }
  @media (max-width: 992px){
    section.header {
      min-height: 400px;
    }

    .panel-group{
      margin-top: 45px;
      margin-bottom:65px;

      padding: 0px 30px;
    }

    .panel.faq-panel {
      margin-top:-4px;
    }

    .panel.faq-panel .panel-heading .panel-title a{
      font-size: 20px;
      line-height:22px;
      font-weight:bold;
      padding-bottom: 20px;
    }

    .arrow{
      margin-left:-35px;
    }

    img.right-arrow{
      height:15px;
    }

    img.down-arrow{
      width:15px;
    }

    .panel.faq-panel .panel-collapse .panel-body {
      border-radius: 20px;
      padding: 24px;
    }
  }
  @media (max-width: 767px){
    section.header {
      min-height: 400px;
    }

    .panel-group{
      margin-top: 32px;
      margin-bottom:51px;

      padding: 0px 15px;
    }

    .panel.faq-panel {
      margin-top:-8px;
    }

    .panel.faq-panel .panel-heading .panel-title a{
      font-size: 16px;
      line-height:22px;
      font-weight:bold;
      padding-bottom: 16px;
    }

    .arrow{
      margin-left:-15px;
    }

    img.right-arrow{
      height:11px;
      font-size:50px;
    }

    img.down-arrow{
      width:12px;
    }

    .panel.faq-panel .panel-collapse .panel-body {
      border-radius: 20px;
      padding: 14px;
    }
  }
`;

export const AnswerNormalText = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  line-height:32px;
  color: #09425A;

  
  .text-underline {
    color: #0099ba;
  }

  &.mb{
    margin-bottom:24px;
  }

   .text-bold{
    font-weight:700;
  }

  &.text-bold{
    font-weight:700;
  }

   &.mb-extra{
    margin-bottom:48px;
  }

  @media (max-width: 1366px){
    font-size: 22px;
    line-height:30px;

    &.mb{
      margin-bottom:20px;
    }
  }
  @media (max-width: 992px){
    font-size: 18px;
    line-height:28px;

    &.mb{
      margin-bottom:16px;
    }
  }
  @media (max-width: 767px){
    font-size: 14px;
    line-height:18px;

    &.mb{
      margin-bottom:12px;
    }
  }
`;

export const AnswerTitleText = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  line-height:32px;
  color: #09425A;
  font-weight: 700;
  margin-top:10px;

  &.mb{
    margin-bottom:24px;
  }

  @media (max-width: 1366px){
    font-size: 28px;
    line-height:28px;

    &.mb{
      margin-bottom:20px;
    }
  }
  @media (max-width: 992px){
    font-size: 24px;
    line-height:25px;

    &.mb{
      margin-bottom:16px;
    }
  }
  @media (max-width: 767px){
    font-size: 20px;
    line-height:25px;

    &.mb{
      margin-bottom:12px;
    }
  }
`;

export const QuestionText = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  line-height:32px;
  color: red;
  display:flex;


  @media (max-width: 1366px){
  
  }
  @media (max-width: 1200px){
    
  }
  @media (max-width: 767px){
    font-size: 16px;
    line-height:22px;
  }
   
`;

export const SubTextContainer = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  padding-left:37px;

   &.mb{
    margin-bottom:24px;
  }

   &.mb-extra{
    margin-bottom:72px;
  }

  @media (max-width: 1366px){
    padding-left:32px;
    &.mb{
      margin-bottom:20px;
    }

    &.mb-extra{
      margin-bottom:60px;
    }
  }
  @media (max-width: 992px){
    padding-left:34px;
    &.mb{
      margin-bottom:16px;
    }

    &.mb-extra{
      margin-bottom:48px;
    }
  }
  @media (max-width: 767px){
    padding-left:20px;
    &.mb{
      margin-bottom:12px;
    }

    &.mb-extra{
      margin-bottom:36px;
    }
  }
`;



export const UL = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  list-style: none;
  max-width: 100%;
  
  &.mb{
    margin-bottom:24px;
  }


  @media(max-width: 1366px){
     max-width: 100%;
  }

  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    font-size: 25px;
    margin-bottom: 16px;
    position: relative;
    padding-left: 15px;

    @media(max-width: 767px){
      padding-left: 0px;
    }

    :before {
      content: "";
      position: absolute;
      margin-top:3px;
      left: -20px;
      top: 7px;
      height: 15px;
      width: 15px;
      background: #0099ba;
      border-radius: 50%;

      @media(max-width: 1366px){
        height: 12px;
        width: 12px;
        margin-top:-1px;
      }

      @media(max-width: 992px){
        height: 10px;
        width: 10px;
        margin-top:-1px;
      }

      @media(max-width: 767px){
        height: 9px;
        width: 9px;
        margin-top:-1px;
      }
    }
  }

  @media (max-width: 1366px){
    li{
      font-size: 22px;
      margin-bottom: 16px;
    }

    &.mb{
      margin-bottom:20px;
    }
  }

  @media (max-width: 992px){
    li{
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 12px;
    }

    &.mb{
      margin-bottom:16px;
    }
  }
  @media (max-width: 767px){
    li{
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 8px;
    }

    &.mb{
      margin-bottom:8px;
    }

    .prfy-li-list{
      font-size: 18px !important;
      font-weight: 600;
    }
  }
`;


