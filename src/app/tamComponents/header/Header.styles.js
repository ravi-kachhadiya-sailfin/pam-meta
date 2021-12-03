import styled from "styled-components";
import header_bg from "../../shared/assets/images/bottom-shape.svg";
import glow_bg from "../../shared/assets/images/glow-bg.png";

export const HeaderSection = styled.section`
  width: 100%;
  position: relative;
  background: url(${header_bg});
  background-repeat: no-repeat;
  background-position:left bottom;
  background-size: auto;
  min-height: 820px;
  margin-bottom:-1px;
  display: inline-block;
  border: none !important; /* margin-bottom: 30px; */
  padding-top:153px;
  overflow:hidden;
  @media only screen and (max-width: 1366px) {
    min-height: 720px;
  }
  &:before {
    content: "";
   position: absolute;
   background:rgb(0,153,186,1);
   width: 100%;
   height: 100%;
   top: 0;
   z-index: -1;
   @media only screen and (max-width: 768px) {
    background:rgb(0,153,186,1);
  }
 }
 .banner-content-wrapper{
  display:flex;  
  padding-top: 70px;
  padding-left:120px;
  padding-right:110px;

  .welcome_title_auth{
    position: unset !important;
  }
  .welcome_title{
   
    @media(min-width: 1200px){
      position: absolute;
      width: 60%;
    }
    @media(min-width: 1400px){
      width: 40%;
    }
  }
  &:after{
    content: "";
   position: absolute;
   background: url(${glow_bg});
   background-repeat:no-repeat;
   background-position:right center;
   width: 100%;
   height: 100%;
   top: 0;
   z-index:-1;
   background-size:70%;
   @media only screen and (max-width: 768px) {
    background-position:center;
    background-size:90%;
   }
  }
  @media only screen and (max-width: 1366px) {
    padding-left:75px;
    padding-right:60px;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction:column;
    text-align:center;
    align-items:center;
    padding-top: 0px;
    padding-left:10px;
    padding-right:10px;
     .MuiGrid-grid-md-3{
      max-width:100%;
     }
  }
}
  
  @media only screen and (max-width: 768px) {
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    min-height: 630px;
    margin-bottom: -1px;
    // background: #009abb;
    padding: 100px 0px 0px 0px;
    .MuiButtonBase-root{
   width: 7px !important;
    height: 7px !important;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;



