import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonWrapper = styled(Button)`
  &.MuiButtonBase-root {
    // width: 100%;
    // margin: 0px 0px 10px -7px;
    // padding: 10px 8px;
    // border-radius: 16px;
    // border: 1px solid #0099ba;
    // font-size: 15px;
    // font-family: 'Source Sans Pro';
    // font-weight: normal;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: 1.07;
    // letter-spacing: normal;
    // text-transform: none;

&.disabled-check-icon{
  background-color:#EFF3F4;
  color:#A9BDC5 !important;
  border-color:#EFF3F4 !important;
}

    &.multiple-select-btn {


      
        .MuiButton-label{
          justify-content: space-between;
          padding:0 20px;
          text-align:left;
          display: flex;
          align-items: flex-start;

          

        }
        .MuiSvgIcon-root{
          width:30px;
          height:30px;
          margin-left:25px;


          @media(max-width:1366px){
            width:28px;
            height:28px;
          }
          @media(max-width:1200px){
            width:26px;
            height:26px;
          } 
          @media(max-width:992px){
            width:24px;
            height:24px;
          }
          @media(max-width:767px){
            width:22px;
            height:22px;
          }
        }

    }

    &.MuiButtonBase-root {
      width: 100%;
      max-width: 600px;
      margin: 0px 0px 20px 0px;
      padding: 10px 8px;
      border-radius: 16px;
      border: 2px solid #0099ba;
      font-size: 30px;
      font-family: 'Source Sans Pro';
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.07;
      letter-spacing: normal;
      text-transform: none;
      min-height: 65px;
      border-radius: 32px;
      color: #0099BA;
  
      @media(max-width: 1366px){
        min-height: 52px;
        font-size: 30px;
        margin: 0px 0px 15px 0px;
      }
  
      @media(max-width: 1200px){
        font-size: 20px;
        margin: 0px 0px 10px 0px;
      }
  
      @media(max-width: 992px){
        font-size: 16px;
       
      }
      @media(max-width: 767px){
        font-size: 16px;
        min-height: 42px ;
      }







    &.selected {
      background-color: #0099ba;
      color: white;
    }
  }
`;
