import { Box, Fab, Popover } from '@material-ui/core';
import styled from 'styled-components';

export const ToolsBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 28px 12px;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;


  .container {
    width: 100%;
    max-width: 1550px;
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }

  // Small devices (landscape phones, 576px and up)
  @media screen and (max-width: 576px) {
   padding: 28px 0px ;
  }

  // Medium devices (tablets, 768px and up)
  @media screen and (min-width: 768px) {
    padding: 48px 0px;
  }
  

  // Large devices (desktops, 992px and up)
  @media screen and (min-width: 992px) {
    padding: 72px 0px;
   }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
      padding: 110px 0px 163px 0px;
  }

  .no-Tool-found {
    display: flex;
    justify-content: center;
    max-width: 100%;
    color: #0099ba;

    > span {
      font-size: 25px;
    }
  }
  .MuiInputBase-root.filter_select{
    min-height: 66px;
    height: 66px;
    border: 2px solid #3599ba;
    border-radius: 50px !important;
    width: 414px !important;
     padding: 0px 15px;

    @media (max-width:1200px){
      min-height: 40px;
      height: 40px !important;
      border: 1px solid #3599ba;
      img{
        width: 15px;
        height: auto;
      }
      .MuiSelect-nativeInput{
        height : 100%;
      }
      
    }
    @media (max-width: 767px){
      width: 100% !important;   
         
      
      img{
        position: relative;
        top: 2px;
      }
    }
  
  }

`;

export const ToolPageTitle = styled.div`
  color: #0099ba;
  margin-bottom: 35px;
  font-size: 110px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif; 
  margin-top: -25px;




  padding-right: 50px;

  @media (max-width: 1366px){
    font-size: 80px;
  }
  @media (max-width: 1200px){
      padding-right: 0px;
      font-size: 70px;
      margin-bottom: 25px;
      margin-right: 25px;
      margin-top: -18px;
  }
  @media (max-width: 992px){
      font-size: 55px;
      margin-bottom: 25px;
        margin-top: 0x;
      margin-right: 25px;
  }
  @media (max-width: 767px){
      font-size: 45px;
      margin-bottom: 0px;
      margin-right: 0px;
      margin-top: 0px;
      letter-spacing: -0.9px;
  }
`;

export const ToolPageDescription = styled.div`
  color: #09425a;
  max-width: 100ch;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;

   padding-right: 50px;

    @media (max-width: 1366px){
        font-size: 22px;
    }
    @media (max-width: 1200px){
        padding-right: 00px;
      font-size: 20px;
      margin-right: 25px;
  }
    @media (max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-right: 0px;
  }
    @media (max-width: 767px){
      font-size: 14px;
      line-height: normal;
      margin-right: 0px;
      
  }
`;




export const ToolsContainerSection = styled.section`
  width: 100%;
  

  .MuiGrid-root {
    justify-content: space-around;

    @media (max-width: 767px){
      height: 40px;
    }
  }
`;

export const ToolsCardContainer = styled.div`
  margin-top: 20px;

  h1 {
    margin-bottom: 20px;
    margin: 0px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #0099ba;
    font-size: 28px;
    .right-arrow {
      border: solid #0099ba;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 5px;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      margin-left: 16px;
      margin-bottom: 3px;
    }
  }
  h5 {
    color: #09425a;
    font-size: 16px;
  }
  .time {
    color: #a9bdc5;
  }
`;

export const ToolsRightFormMeTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #09425A;
  font-size: 20px;
  font-weight: bold;
  // margin-bottom:5px;

  .tools-right-for-me-title {
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 39px;
    letter-spacing: normal;
    width: 80%;
    font-size: 35px
  }
  img{
    width: 20px;

    @media (max-width: 767px){
      width: 10px;
    }

  }


  @media (max-width: 1366px){
   .tools-right-for-me-title{
      font-size: 30px;
      line-height: normal;
    }
  }
  @media (max-width: 1200px){
    .tools-right-for-me-title{
      font-size: 26px;
      line-height: normal;
    }
  }
  @media (max-width: 767px){
    .tools-right-for-me-title{
      font-size: 18px;
      line-height: normal;
    }
  }
`;

export const ToolRightForMeWrapper = styled(Box)`
  position: relative;
  max-width: 487px;
  height: 263px;
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 30px;
  box-shadow: 0px 20px 60px #00000029;
  margin-left: auto;
  font-family: 'Source Sans Pro', sans-serif !important;

  @media (max-width: 992px){
    height: auto;
    width: 100%;
    max-width: 100%;
      margin-top: 20px;
  }

  @media (max-width: 992px){
    border-radius: 20px;
  }
  @media (max-width: 767px){
      padding: 6px 12px;
        
  }

  .fa-chevron-right{
      font-size: 20px;

      
  }


  .tools-right-for-me-access {
    font-size: 20px;
    color: #09425A;
    cursor: pointer;
    position: absolute;
    bottom: 8%;


      @media (max-width: 767px){
        font-size: 12px;
      }
  }

`;

export const ToolsRightFormMeDesc = styled(Box)`
  color: #09425a;
  margin-top: 25px;
  margin-bottom: 27px;
  font-size: 12px;
`;

export const FilterControlWrapper = styled(Box)`
  padding-bottom: 52px;
  width: 100%;

  .MuiInputBase-root {
    border-color: #0099ba;
    border-radius: 23px;
    height: 100% !important;
    margin-right: 10px;
    width: 270px !important;
  }

  @media only screen and (max-width: 767px) {
     padding-bottom: 15px;
    .MuiInputBase-root {
      height: 40px !important;
      width: 100% !important;
    }
  }
`;

export const FilterControlIcon = styled(Fab)`
  background-color: #0099ba !important;
  font-size: 25px !important;
  color: white !important;
  width: 66px !important;
  height: 66px !important;
  box-shadow: none !important;



  
  @media only screen and (max-width: 1200px) {
    height: 40px !important;
    width: 40px !important;
    min-width: 40px !important;

    img{
         height: 20px !important;
          width: 20px !important;
    }
  }

  i {
    transform: rotate(90deg);
  }
`;

export const FilterControlPopover = styled(Popover)`
  .MuiPaper-root {
    padding: 20px;
    width: 335px;
    background-color: #0099ba;
    margin-top: 10px;
    border-radius: 16px;
     max-height: 690px;
        ::-webkit-scrollbar {
            width: 0px;
          }

    .MuiFormControlLabel-root {
      width: 100%;
    }

    .MuiIconButton-label {
      .MuiSvgIcon-root {
        color: #fff;
        width: 1.5em;
        height: 1.5em;
      }
    }

    .sortingLabel {
      color: #fff;
      font-weight: 600;
      font-family: 'Source Sans Pro', sans-serif !important;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
    }
  }
`;

export const ToolsBottomButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;


  padding-top: 0px;
  
  @media(max-width: 767px){
    padding-top: 0px;

  }

  

  div {
    width: 100%;

    @media (max-width: 992px) {
      width: 100%;
      padding: 0px 0px;
    }
  }
`;

export const ControlWrappers = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    .MuiInputBase-root {
      width: 85% !important;
    }
  }
`;

export const ToolContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin-right: -35px;
    margin-left: -35px;

  @media(max-width: 1366px){
      margin-right: -25px;
      margin-left: -25px;
    }

  @media(max-width: 992px){
    margin-right: -10px;
    margin-left: -10px;
  }
  @media(max-width: 767px){
    margin-right: 0px;
    margin-left: 0px;
  }
  > div {

    padding-left: 35px;
    margin-bottom: 60px;
    padding-right: 35px;
    width: 33.333%;
    float:left;

      @media (max-width: 1366px){
        padding-left: 25px;
        padding-right: 25px;
      }
      @media (max-width: 1200px) {
         width: 50%;

      }

      @media (max-width: 992px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
      }

      @media (max-width: 767px){
        margin-bottom: 16px;
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
      }

    @media (min-width: 320px) and (max-width: 480px) {
      margin-left: 0px;
      justify-content: center;
    }
  }

`;
