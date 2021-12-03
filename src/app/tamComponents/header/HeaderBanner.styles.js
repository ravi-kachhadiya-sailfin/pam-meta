import styled from "styled-components";

export const HeaderBannerContainerWrapper = styled.div.attrs(() => ({
  className: "container banner",
}))`

width: auto;
max-width: unset;
  position:relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content:end;



  


  &.login_after_banner{
    .login_after_banner_image{
      width: 100%;
      height: 100%;


      @media(max-width: 992px){
         max-width: 100%;
         max-height: 250px;
          margin-top: 70px;
      }
      @media(max-width: 767px){
            margin-top: 67px;
      }
    }
    .banner-theme{
      display: none;
    }

    .how-it-works-mobile{
      display: none;
    }
  }
  
  .home-banner-slider{
    .Carousel-indicators-32{
      height:15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content:center;
    padding-left:0px;
    padding-right:0px;
  }
  .Carousel-indicators-26{
    text-align: right;
    @media only screen and (max-width: 1024px) {
      text-align: center;
    }
  }
  img {
    max-width: 550px;
    height: 350px;

  }

  .TAM-Hero {
    max-width: 100%;
    width: auto;
    height: 453px;

    
    @media only screen and (max-width: 1366px) {
      max-width: 440px;
    }

  }
  

  .how-it-works-mobile {
    display: none;
  }

  .banner-theme {
    width: 100%;
    max-width: 620px;
    margin-top:180px;
    @media only screen and (max-width: 1024px) {
      margin-top:0px;
      text-align:center;
      margin:0px;
    }
    @media only screen and (max-width: 1366px) {
      max-width: 400px;
      margin-right:-50px;
    }
    .banner-sub-title{
      font-size:50px;
      line-height:60px;
      margin-top:0px;
      @media only screen and (max-width: 1366px) {
        font-size:38px;
        line-height:46px;
      }
    }
    .banner-tag-line{
      font-size:25px;
      line-height:32px; 
      @media only screen and (max-width: 767px) {
      height:auto;
      }
      @media only screen and (max-width: 1366px) {
        font-size:18px;
        line-height:24px; 
      }
    }
  }
  .how-it-works-desktop {
    display: block;
    text-align: right;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    cursor: pointer;
    color: #eff3f4;
      font-size: 30px;
    margin: 30px 0 0px 0;
    font-weight: 500;
    @media only screen and (max-width: 1366px) {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 1024px) {
        .Carousel-root-1{
          overflow:unset;
        }
        .Carousel-indicator-3{
          width:7px !important;
          height:7px !important;
        }
          .TAM-Hero {
          position: unset;
          max-width: 100%;
          width:100%;
          height: 200px;
          float: right;
          margin-top: 0px;
          // margin: 0 auto 10px auto;
        }
        .TAM-Hero-login{
          position: unset;
          max-width: 100%;
          width:100%;
          height: 250px !important;
          float: right;
          margin-top: 0px;
          margin: 0 auto 10px auto;


          @media(max-width: 1200px){
            padding-top: 50px;
          }
          @media(max-width: 767px){
            padding-top: 20px;
          }
        }
        .banner-container .banner-sub-title{
          text-align: center;
          font-size:60px;
        }
        .banner-container .banner-tag-line {
            text-align: center;
            font-size:14px;
            line-height:18px;
        }
            .banner-theme {
         width: 100%;
        max-width: 100%;
        height: auto;
        float: none;
        clear: both;
        margin-left: 0px;
        height:140px;
    }
    @media only screen and (max-width: 1024px) {
      .banner-container .banner-sub-title{
        text-align: center;
        font-size:40px;
        line-height:54px;
      }
    }
    @media only screen and (max-width: 767px) {
      .banner-container .banner-sub-title{
        text-align: center;
        font-size:26px;
        line-height:32px;
      }
    }
  }


  
  @media only screen and (max-width: 1024px) {
  .Carousel-root-1{
   overflow:unset;
  }
  .Carousel-indicator-3{
    width:7px !important;
    height:7px !important;
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
      font-family: "Source Sans Pro", sans-serif;
      color: #ffffff;
      font-weight: 600;
      font-size: 14px;
      margin: 15px 0 0px 0;
    }

}
@media only screen and (max-width: 768px) {
  .TAM-Hero {
    height: 200px;
    margin-bottom:24px
  }
}
@media only screen and (max-width: 320px) {
  .TAM-Hero {
    height: 140px;
  }
}


.TAM-Hero{
  &.safari-img{
    @media only screen and (max-width: 1366px) {
      height:auto;
      width:500px;
      max-width:600px;
    }   
    @media only screen and (max-width: 1200px) {
      height:auto;
      width:500px;
      max-width:500px;
    } 
    @media only screen and (max-width: 1024px) {
      height:200px;
      width:auto
    }   
    @media only screen and (max-width: 992px) {
      height:180px;
    }    
    @media only screen and (max-width: 767px) {
      height:200px;
    }    
  }
}
`;
