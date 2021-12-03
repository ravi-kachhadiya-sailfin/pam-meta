import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const QuestionWrapper = styled(Box)`
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;
  margin-bottom: 30px;
  margin-top: 30px;

  &.questionWrapper_radio_step{
    margin-bottom: 50px;
  }
`;

export const OptionsWrapper = styled(Box)`
  ${'' /* display: flex; */}
  ${'' /* flex-direction: row; */}
  font-family: 'Source Sans Pro';
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #09425a;

  @media only screen and (max-device-width: 768px) {
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
  }
`;

export const Option = styled(Box)`

display: flex;
flex-direction: row;
margin-bottom: 50px;
@media(max-width: 992px){
  margin-bottom: 25px;
}

p{
  font-size: 30px;
  line-height: 32px;
  padding-left: 40px;

  @media(max-width: 1366px){
    font-size: 28px;
    padding-left: 35px;
  }
  @media(max-width: 1200px){
    font-size: 25px;
    line-height: 30px;
    padding-left: 30px;
  }
  @media(max-width: 992px){
    font-size: 20px;
    line-height: 25px;
    padding-left: 20px;
  }

  @media(max-width: 767px){
    font-size: 16px;
    line-height: 22px;
    padding-left: 20px;
  }
}

.MuiSwitch-track{
  background-color: #CFD7D9;
}

.MuiSwitch-switchBase {
  top: 2px;
  left: 2px;

  @media(max-width: 992px){
    top: 1px;
    left: 1px;
  }
} 
.MuiSwitch-thumb{
  width: 30px;
  height: 30px;

  @media(max-width: 992px){
  width: 15px;
  height: 15px;
  }

}
.MuiSwitch-root {
  width: 62px;
  height: 36px;
  border-radius: 40px;
  margin:0px;


  @media(max-width: 992px){
    width: 30px;
    height: 19px;
  }
}

.MuiButtonBase-root.Mui-checked{{
      transform: translateX(26px);

      @media(max-width: 992px){
        transform: translateX( 11px);
      }
  }

}


`;

export const ButtonWrapper = styled(Button)`
  &.MuiButtonBase-root {
    width: 100%;
    padding: 15px 8px;
    border-radius: 30px;
    border: 1px solid #0099ba;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-transform: none;
    color: #0099ba;

    &.selected {
      background-color: #0099ba;
      color: white;
    }
  }
`;
