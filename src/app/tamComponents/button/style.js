import styled from 'styled-components';
import { Button } from "@material-ui/core";

export const CustomButton = styled(Button)`
  display: inline-block !important;
  width: 100% !important;
  padding: 12px 24px !important;
  min-width: 155px !important;
  border-radius: 40px !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 25px !important;
  font-stretch: normal !important;
  font-style: normal !important;
  line-height: 1.2 !important;
  letter-spacing: normal !important;
  text-align: center !important;
  color: #ffffff !important;
  text-transform: unset !important;
  font-weight: 600 !important;
  min-height: 78px;

  &.start-again-btn{
    margin-left: 35px;
  }

  &.fill-btn{
    min-height:54px;

    @media(max-width:992px){
      min-height:40px;
    }

  }
  
  @media (max-width: 992px){
     font-size: 18px !important;
      min-height: 40px;

      img{
        width: 20px;
        height: 20px;
      }
      min-width: 120px !important;

      &.start-again-btn{
        margin-left: 0px;
      }

  }
  @media (max-width: 767px){
     min-height: 40px;
     font-size: 18px !important;
     img{
        width: 15px;
        height: 15px;
      }
  }

  background-color:  ${(props) => props.tamColor}!important;

  @media only screen and (max-width: 480px) {
    padding: 6px 15px !important;
  }
`;
