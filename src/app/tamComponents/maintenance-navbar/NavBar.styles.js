import styled from "styled-components";
import Helpline_right from "app/shared/assets/images/top-header-bg-right.png";
import Helpline_left from "app/shared/assets/images/top-header-bg-left.png";
import { Box } from "@material-ui/core";

export const NavBarSection = styled.section`
  background: #0099ba;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  position: relative;

  &.admin-navbar{
    width: 100%;
  }

  &.header-over-banner{
    position: absolute;
    top:0px;
    left:0px;
    width:100%;
    background:transparent;
    z-index:99;
  }
  
  .navar-default-section{
    margin:0px;
  }
  .navbar-section{
    padding: 30px 100px 30px 10px;
    background: 
  }

  .admin-container-fuild{
    display: flex;
    align-items: center;
  }

  .header_wrapper{
    display: flex;
    align-items: center;
  }
  #navbar2{
    margin-left: auto;
  }
   .main_navbar{
       padding: 40px 0px 10px 0px;
    }
      @media only screen and (max-width: 1200px) {
                  .navbar-header{
              display:flex;
              align-items:center;
              width:100%;
            }
        #navbar2{
          display:none !important;
        }
        .navbar-toggle {
              display: block;
          }

              .search_btn_donate{
          margin-left: auto;
          display:flex;
          align-items:center;
    }
    .main_navbar{
      padding: 10px 0px 10px 0px;
    }
    .contact_header{
      padding: 10px;
    }
      }

      @media only screen and (max-width: 992px) {
            .navbar-header{
              display:flex;
              align-items:center;
              width:100%;
            }
        #navbar2{
          display:none !important;
        }
        .navbar-toggle {
              display: block;
          }
      }
  @media only screen and (max-width: 768px){
    
    .search_btn_donate{
      position: absolute;
      right: 15px;
      display:flex;
      align-items:center;
    }
    .main_navbar{
      padding: 10px 0px 10px 0px;
    }
    .contact_header{
      padding: 10px;
    }
   
  }
`;

// export const NavBarDonateButtonMobile = styled.div.attrs(() => ({
//   className: "meet",
// }))`

// `;
export const NavBarHeadline = styled.div`
  background: #2A4359;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  background-size: cover;
  width: auto;
  height:28px;
  line-height: normal;
  position: absolute;
  padding: 5px;
  right: 250px;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;


  @media only screen and (max-width: 1024px){
    position: static;
    width: 100%;
    height:auto;
  }
  &::after{
   content: "";
   position: absolute;
   background-image:url(${Helpline_right});
   width: 116px;
   height: 28px;
   top: 0;
   left:100%;
   background-repeat:no-repeat;
   z-index:-1px;
   @media only screen and (max-width: 1024px){
    display:none;
   }
  }
  &::before{
    content: "";
    position: absolute;
    background-image:url(${Helpline_left});
    width: 116px;
    height: 28px;
    top: 0;
    left:-110px;
    background-repeat:no-repeat;
    z-index:-1px;
    @media only screen and (max-width: 1024px){
      display:none;
    }
   }

  a{
    color: #78E0FA;
    padding: 0px 3px;
  }
  @media only screen and (max-width: 768px){
    width:100%;
    background: #09425A;
    position: static;
    font-size: 12px;
  }
`;

export const DefaultNavBar = styled.nav.attrs(() => ({
  className: "navbar navbar-default",
}))`
  @media only screen and (max-width: 992px) {
    margin-top:0px;
    margin-bottom:0px;
  }
  background-color: transparent;
  border: none;
  margin-top:30px;
`;

export const NavBarBrand = styled.a`
  padding-top: 0px;
  float: left;
  height: auto;
  font-size: 18px;
  line-height: 20px;
  img {
    width: 100%;
    max-width: 246px;
    height: auto;
    padding-left:25px;
    cursor:pointer;
    @media only screen and (max-width:1366px) {
      max-width: 190px;
    }
    @media only screen and (max-width:1200px) {
      display:none;
    }
    &.mobile-logo{
      display:none;
      @media only screen and (max-width:1200px) {
        display:block;
        width:36px;
        padding-left:0px;
      }
    }
    
  }


  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin: 0px;
    max-width: 50px;
    overflow: hidden;
    img {
      max-width: 115px;
      width: 115px;
    }
  }
`;

export const NavBarSubBrand = styled.a`
  padding-top: 0px;
  float: left;
  height: auto;
  font-size: 18px;
  line-height: 20px;
  margin-left: 50px;
  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    
    padding-left:25px;
    cursor:pointer;

   @media only screen and (max-width: 1740px){
    max-width: 180px;
   }
   @media only screen and (max-width: 1600px){
    max-width: 180px;
   }
    @media only screen and (max-width:1530px) {
     display: none;
    }
    @media only screen and (max-width:1200px) {
      display:block;
      padding-left:25px;
      max-width: 140px;
    }
    @media only screen and (max-width:768px) {
      padding-left:16px;
      max-width: 120px;
    }
    @media only screen and (max-width:500px) {
      padding-left:15px;
      max-width: 95px;
    }
    @media only screen and (max-width:374px) {
      display : none;
    }
  }

  @media only screen and (max-width:1740px) {
    margin-left: 0px;
  }
`;
export const NavBarBrandMobile = styled.a`
  display: none;
  @media only screen and (max-width: 1200px) {
       color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    margin-top: 0px;
    margin-right: 12px;
    display: block;
  }
  @media only screen and (max-width: 767px) {
    // float: right;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    margin-top: 0px;
    margin-right: 0px;
    display: inline-block;
  }
`;

export const NavBarSearchMobile = styled.div`
  display: none;


  @media only screen and (max-width: 1200px) {
    // float: right;
    height: auto;
    width: auto;
    border-radius: 50%;
    padding: 0;
    border: 0px solid #f0f4f5;
    opacity: 1;
    margin: 0px 12px 0px 12px;
    display: inline-block;


  img{
             z-index: 2;
    position: relative;
  }
    i {
      font-size: 13px;
      color: rgba(239,243,244,1);
      position: relative;
      top: -8px;
      left: -3px;
    }
  }



  


  &.search-box {
   position: relative;

   > img{
    cursor: pointer;
  }


  .mobile_search{
    position: absolute;
    right: -3px;
    margin: 0px !important;
    background-color: #379fbd !important;
    top: -2px;
    width: 200px !important;
    height: 30px !important;
    }
  }

  &.search-box input[type="search"] {
    width: 340px;
    height: 48px;
    margin: 6px;
    padding: 0px 15px;
    border-radius: 24px;
    border: 0px;
    background: #b2c3d226;
    outline: none;
    color: #eff3f4;
    transition: all 0.5s;

    @media(max-width: 1740px){
      width: 300px;
    }
    @media(max-width:1200px){
      font-size:18px;
      padding-right:30px
    } 
   @media(max-width:992px){
     font-size:16px;
     padding-right:35px;
   }
   @media(max-width:767px){
    font-size:14px;
   }
  }

  &.search-box input:focus {
    outline: none;
    border: solid 1px rgba(239, 243, 244, 1);
  }

  &.search-box i {
    position: absolute;
    right: 18px;
    top: 15px;
    font-size: 24px;
    color: rgba(239, 243, 244, 1);
  }
`;

export const NavBarDonateButtonMobile = styled.div.attrs(() => ({
  className: "nav_donate_btn",
}))`
  display: none;

  @media only screen and (max-width: 1200px) {
    padding: 5px 8px;
    background: #ffffff;
    border-radius: 20px;
    line-height: normal;
    font-size: 12px;
    margin-top: 0px;
    display: flex;
    align-items: center;

  }

  &&.donate_hide{
    display: none !important;
  }


  img{
    @media only screen and (max-width: 992px) {
      margin-right: 5px;
    }
    margin-right: 10px;
  }
`;

export const NavBarButton = styled.button.attrs(() => ({
  type: "button",
  className: "navbar-toggle collapsed",
}))`
  @media only screen and (max-width: 1200px) {
    margin-right: 0px;
    border: none;
    float: left;
    :hover,
    :focus {
      background-color: transparent;
    }

    .icon-bar {
      background-color: #F0F4F5 !important;
      height: 4px;
      border-radius: 0px;
    }
  }
`;

export const HelpLineBG = styled.img`
  position: absolute;
  height: 20px;
  width: 350px;
  margin-top: -40px;
  margin-left: 930px;
`;

export const HelplineNumebr = styled.p`
  position: absolute;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-left: 1020px;
  margin-top: -35px;
`;

export const DonateBG = styled.img`
  position: absolute;
  height: 70px;
  width: 100px;
  margin-top: -40px;
  margin-left: 1370px;
  float: right;
`;

export const ProfilePopoverBox = styled(Box)`
  display: flex;
  border: 1px solid;
  justify-content: space-between;
  padding: 8px 8px 8px 5px;
  border-bottom: none;
  cursor: pointer;

  &.bb {
    border: 1px solid; 
  }
`;

export const BoxContainerWrapper = styled(Box)`
width: 100%;
padding: 5px 10px 20px 10px;
&.menu_dropdown{
 padding:15px 15px; 

}
.menu_dropdown_input
{
  padding:  10px;
  border:none;
 
}
.menu_dropdown_text {
  color: #09425A;
  font-size:22px;
  line-height: 32px;
  font-weight:400;
}
& i{
  margin-top:13px;
}

  .popover-close {
    font-size: 25px;
    text-align: right;

    i {
      cursor: pointer;
    }
  }
`;


