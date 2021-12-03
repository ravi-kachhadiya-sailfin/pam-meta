import styled from "styled-components";
import Donate_Illus from "app/shared/assets/images/Donate_Illus.png";

export const NavBarListContentWrapper = styled.div`
  ul.navbar-nav li a {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: right;
    color: #eff3f4;
    opacity: 0.8;

    @media only screen and (max-width: 1740px) {
     padding-left: 13px;
     padding-right: 13px;
    }
    @media only screen and (max-width: 1600px) {
      padding-left: 10px;
      padding-right: 10px;
     }
    @media only screen and (max-width: 1366px) {
      font-size: 18px;
      padding-left: 10px;
      padding-right:  10px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
    }
  }
  ul.nav.navbar-nav li:nth-last-child(2) a {
    font-weight: 600;

    @media(max-width:767px){
      font-weight: normal;
    }
  }
  .navbar-nav > .active > a {
    color: #eff3f4;
    background-color: transparent;
    opacity: 1;
    font-weight: bold;
    padding:10px 25px;
  }
  .navbar-nav > .active > a:hover,
  .navbar-nav > .active > a:focus,
  ul.navbar-nav li a:hover,
  ul.navbar-nav li a:focus {
    color: #eff3f4;
    background-color: transparent;
    opacity: 1;
  }
  ul.navbar-nav li.donate-button {
    height: 60px;
    width: 60px;
    background: #fff;
    border-radius: 50%;
    padding: 2px;
    margin-right: 125px;
    margin-left:30px;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      right: -140px;
      top: -47px;
      background: url(${Donate_Illus});
      background-size: 120px auto;
      background-repeat: no-repeat;
      height: 120px;
      width: 120px;
      @media only screen and (max-width: 1024px) {
        display:none;
      }
    }
  }

  ul.navbar-nav li.donate-button a {
    font-size: 13px;
    line-height:24px;
    padding: 14px 2px;
    background: #ffffff;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 2px solid #0099ba;
    color: #104573;
    font-family: "Source Sans Pro", sans-serif;
    font-weight:bold;
    text-align: center;



  }
  .search-box {
    position: relative;

    > img{
      cursor: pointer;
    }
  }

  .search-box input[type="search"] {
    width: 340px;
    height: 48px;
    margin: 6px;
    padding: 0px 35px 0 15px;
    border-radius: 24px;
    border: 0px;
    background: #b2c3d226;
    outline: none;
    color: #eff3f4;
    transition: all 0.5s;
    font-size: 20px;

    @media(max-width: 1740px){
      width: 280px;
    }
    @media(max-width: 1450px){
      width: 270px;
    }
  }

  .search-box input:focus {
    outline: none;
    border: solid 1px rgba(239, 243, 244, 1);
  }

  .search-box img{
    position: absolute;

    width: 21px;
    right: 18px;
    top: 18px;
    font-size: 24px;
    color: rgba(239, 243, 244, 1);
  }
  @media only screen and (max-width: 768px) {
    li {
      .donate-button {
        display: none;
      }
    }
  }
`;
