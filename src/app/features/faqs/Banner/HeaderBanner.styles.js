import styled from "styled-components";
import header_bg from "../../../shared/assets/images/header_bg_r.png";
import header_shape from "../../../shared/assets/images/faq-shape.svg";

export const HeaderSection = styled.section`
  // width: 100%;
  // position: relative;
  // // background: url(${header_bg});
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  // min-height: 480px;
  // display: inline-block;
  // border: none !important; /* margin-bottom: 30px; */ 
  // background-color: rgb(0,153,186,1);
  // display: flex;
  // align-items: center;
  // overflow: hidden;


  width: 100%;
  position: relative;
  background:  url(${header_shape});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto;
  min-height: 450px;
  margin-bottom: -1px;
  display: inline-block;
  border: none !important;
  padding-top: 153px;
  overflow: hidden;

  @media(max-width: 1200px){
    flex-direction: column;
    justify-content: flex-end;
  }

  @media(max-width: 992px){
    min-height: 347px;
    margin-bottom: -8px;
  }

  @media only screen and (max-width: 1200px) {
    background-size: 30%;
  }

  ::-webkit-scrollbar {
    display: none;
  }


  ::after{
    content: "";
    position: absolute;
    background: rgb(0,153,186,1);
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -3;
  }

`;

export const HeaderBannerContainerWrapper = styled.div.attrs(() => ({
  className: " banner faq_main_banner",
}))`


.faq_image{
  position: inherit;
  @media(max-width: 1200px){
    text-align: center;
  }
}
.faq_banner{
  .faq_main_text{
    font-size: 110px;
    line-height: 132px;
    color: #fff;
    font-weight: 300;


    @media(max-width: 1366px){
      font-size: 80px;
    } 
    @media(max-width: 1200px){
      font-size: 70px;
      line-height: 75px;
      margin-bottom: 20px;
    } 
    @media(max-width: 992px){
      font-size: 55px;
      line-height: 60px;
      margin-bottom: 10px;
    } 
    @media(max-width: 767px){
      font-size: 45px;
    line-height: 50px;
    margin-bottom: 0px;
    } 
  }
  .faq_text{
    font-size: 25px;
    line-height: 32px;
    color: #fff;
    font-weight: 400;

    @media(max-width: 1366px){
      font-size: 22px;
      line-height: 32px;
    } 
    @media(max-width: 1200px){
      font-size: 20px;
      line-height: 28px;
    } 
    @media(max-width: 1200px){
      font-size: 18px;
      line-height: 25px;
    } 
    @media(max-width: 767px){
      font-size: 14px;
      line-height: 20px;
    } 
 
  }
}

.faq_banner_text{
  @media(max-width: 1200px){
    position: relative;
    z-index: 2;
    text-align: center;
  }
}
.TAM-Hero_bg{
  position: absolute;
  right: -79px;
  bottom: -280px;
  width: auto;
  height: 880px;
  z-index: -1;


  @media(max-width: 1200px){
    right: unset;
    left: 50%;
    bottom: -400px;
    height: 940px;
    transform: translateX(-50%);
    z-index: -1;
  }
  @media(max-width: 767px){
    right: unset;
    left: 50%;
    bottom: -220px;
    height: 640px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: -1;
    width: 100%;
  }

}
.TAM-Hero{
  position: absolute;
  bottom: -20px;
  right: 90px;
  width: 400px;
  height: 400px;
  z-index: -1;

  @media(max-width: 1366px){
    bottom: -20px;
    width: 360px;
    right: 100px;
    height: auto;
  }
  @media(max-width: 1200px){
    bottom: -0px;
    width: auto;
    left: unset;
    height: 260px;
    position: relative;
    right: unset;
    margin: 0 auto;
  }
  @media(max-width: 767px){
    bottom: -0px;
    width: auto;
    left: unset;
    height: 210px;
  }

  &.safari-img-faq{
      height:auto;
      width:390px;
      top: 55px;
      right: 90px;
    
    @media(max-width:1366px){
      top: unset;
    }
    @media only screen and (max-width: 1250px) {
      width:310px     
    }

    @media only screen and (max-width: 1200px) {
      right:unset     
    }
    @media only screen and (max-width: 1024px) {
      height:270px;
      width:auto;
    }   
    @media only screen and (max-width: 992px) {
      // height:180px;
    }    
    @media only screen and (max-width: 767px) {
      height:210px;
    }    
  }
}


  &.faq_main_banner{
    padding-left: 160px;
    padding-right: 160px;


    @media(max-width: 1366px){
      padding-left: 100px;
      padding-right: 100px;
    }
    @media(max-width: 1200px){
      padding-left: 80px;
      padding-right: 80px;
    }
    @media(max-width: 992px){
      padding-left: 50px;
      padding-right: 50px;
    }
    @media(max-width: 767px){
      padding-left: 10px;
      padding-right: 10px;
    }

  }



  .how-it-works-mobile {
    display: none;
  }

  .banner-theme {
    width: 100%;
    max-width: 525px;
    float: left;
    margin-top: -80px;
    margin-right: 00px;
    margin-left: 550px;
  }
  .how-it-works-desktop {
    display: block;
    text-align: right;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    color: #eff3f4;
    font-size: 22px;
    margin: 30px 0 10px 0;
  }
  @media only screen and (max-width: 1024px) {
    .banner-theme {
      width: 100%;
      max-width: 100%;
      float: none;
      margin: 0px 0px 0px auto;
    }
    img {
      max-width: 100%;
      float: none;
      margin: 0px auto;
    }
    .how-it-works-desktop {
      display: none;
    }
    .how-it-works-mobile {
      display: block;
      text-align: center;
      width: 100%;
      font-family: "Source Sans Pro", sans-serif;
      color: #ffffff;
      font-weight: 600;
      font-size: 22px;
      margin: 15px 0 10px 0;
    }    
  }
`;
