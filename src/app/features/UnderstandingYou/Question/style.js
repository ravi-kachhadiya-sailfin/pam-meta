import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const QuestionWrapper = styled(Box)`
  font-size: 30px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #09425A;
  margin-bottom: 60px;
  margin-top: 50px;
  

  @media(max-width: 1366px){
    font-size: 28px;
    margin-bottom: 50px;
      margin-top: 40px;
  }

  @media(max-width: 1200px){
    font-size: 25px;
    line-height: 27px;
    margin-bottom: 40px;
    margin-top: 30px;
  }
  @media(max-width: 992px){
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 20px;
      margin-top: 25px;
  }
  @media(max-width: 767px){
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 15px;
  }
`;

export const OptionsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  font-family: 'Source Sans Pro';
  margin-bottom: 50px;


  @media(max-width: 1366px){
    margin-bottom: 40px;
  }
  @media(max-width: 1200px){
    margin-bottom: 35px;
  }
  @media(max-width: 992px){
    margin-bottom: 30px;
  }



  @media only screen and (max-width: 768px) {
    margin-bottom: 26px;

    flex-direction: column;
    > button {
      margin-right: 0px;
      margin-bottom: 15px;
    }
  }

  > button {
    margin-right: 15px;
  }

  > button:last-child {
    margin-right: 0px;

    @media(max-width: 992px){
      margin-bottom: 0px;
    }
  }
`;

export const ButtonWrapper = styled(Button)`
  &.MuiButtonBase-root {
    width: 100%;
    padding: 15px 8px;
    border-radius: 40px;
    border: 2px solid #0099BA;
    font-size: 21px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 25px;
    letter-spacing: normal;
    text-transform: none;
    color: #0099BA;
    height: 78px;

    &.selected {
      background-color: #0099ba;
      color: white;
    }

    @media(max-width: 1366px){
       font-size: 16px;
        height: 68px;
    }

    @media(max-width: 1200px){
        height: 58px;
    }
    @media(max-width: 992px){
        height: 45px;
        border: 1px solid #0099BA;
    }
    @media(max-width: 767px){
        height: 40px;
    }



  }
`;
