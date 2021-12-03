import styled from "styled-components";

export const FooterSectionWrapper = styled.section`
  background: #09425a;
  padding-top: 68px;
  padding-bottom: 32px;
  border-top: 6px solid #A9BDC5;

  &.admin-footer{
    width: 100%;
  }


  @media(max-width:992px){
    padding-left: 10px;
    padding-right: 10px;
  }
  @media(max-width:767px){
        padding-top: 40px;
        padding-bottom: 15px;
        border-top: 4px solid #A9BDC5;
  }


  .standford_card{
    display: flex;
    justify-content: flex-end;



    @media(max-width: 992px){
      justify-content: flex-start;
    }
    @media(max-width: 767px){
      justify-content: flex-start;
    }
  }

  .container {
    width: 100%;
    max-width: 1550px;

      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }
  .copy_right_text{
    font-size: 20px;
    font-weight: 400;
  }
  .terms_text{
      font-weight: 400;
  }
  .bottom-line {
    border-top: 1px solid #0099ba;
    padding: 12px 0px;
    color: #0099ba;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    .p-0 {
      padding: 0px;
    }
    a{
      color: #ffffff;
      margin-right: 50px;

      &last-child{
         margin-right: 0px;
      }
    }
    .mr-0 {
      margin-right: 0px;
    }
  }
  .footer_logo{
    width: 246px;
    cursor:pointer;
    height: auto;
    margin-top: -25px;

    @media (max-width: 1200px){
      width: auto;
      max-width: 150px;
    }
    @media (max-width: 992px){
      width: auto;
      max-width: 170px;
    }

    @media (max-width: 767px){
      width: auto;
      max-width: 121px;
      margin-top: -15px;
    }
  }
  .footer_logo_stanford{
    width: 269px;
    height: auto;
    float:right;


    @media (max-width: 1200px){
      width: auto;
      max-width: 150px;
    }
    @media(max-width:992px){
      float:left;
    }
    @media (max-width: 767px){
      width: auto;
      max-width: 145px;
      float:left;
    }
  }

  .footer-link-menu {
    margin-top: 00px;
    margin-bottom: 120px;

   @media (max-width: 1200px){
      margin-bottom: 50px;
      margin-top: 0px;
    }
   @media (max-width: 992px){
      margin-bottom: 60px;
      margin-top: 0px;
    }
   @media (max-width: 767px){
      margin-bottom: 43px;
      margin-top: 0px;
    }

  }

  .footer-link-menu .feedback{
    :hover{
      text-decoration : underline;
    }
  }

  .footer-link-menu a, .footer-link-menu .feedback {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    cursor: pointer;
    line-height: 1.68;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

    .copy_right_text{
      font-size: 22px;
    }

    .terms_text {
      a{
        font-size: 22px;
      }
    }

  @media (max-width: 1200px){
   .footer-link-menu a, .footer-link-menu .feedback{
      font-size: 20px;
    }



    .copy_right_text{
      font-size: 15px;
    }

    .terms_text {
      a{
        font-size: 15px;
      }
    }

    .bottom-line{
        a{
              margin-right: 20px;
        }
      }

  }
  @media (max-width:992px){
    .footer-link-menu a, .footer-link-menu .feedback {
      font-size: 20px;
    }


    .copy_right_text{
      font-size: 15px;
    }

    .terms_text {
      a{
        font-size: 15px;
      }
    }

    .bottom-line{
        a{
              margin-right: 20px;
        }
      }
  }
  @media (max-width:767px){
     .footer-link-menu a, .footer-link-menu .feedback {
      font-size: 14px;
    }
    .copy_right_text{
      font-size: 10px;
    }

    .terms_text {
      a{
        font-size: 10px;
      }
    }

    .bottom-line{
        a{
              margin-right: 20px;
        }
      }
  }
  @media only screen and (max-width: 768px) {
    img {
      max-height: 70px;
    }
  }
  @media only screen and (max-width: 576px) {
   .bottom-line{
        a{
              margin-right: 5px;
        }
      }
  }
  @media only screen and (max-width: 375px) {
    img {
      max-height: 50px;
    }
  }





`;

export const FooterImage = styled.img`
  @media only screen and (max-width: 768px) {
    max-height: 70px;
  }
  @media only screen and (max-width: 375px) {
    max-height: 73px;
  }
`;
export const FooterImage2 = styled.img`
  @media only screen and (min-width: 768px) {
    height: 70px !important;
    width: 100px !important;
  }
  @media only screen and (max-width: 768px) {
    height: 50px !important;
  }
`;
