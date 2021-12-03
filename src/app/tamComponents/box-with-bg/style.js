import { Box } from "@material-ui/core";
import styled from "styled-components";

export const TitleBox = styled(Box)`
  font-family: "Source Sans Pro";
  font-size: 38px;
  line-height: 40px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 30px;


  @media(max-width: 1366px){
    font-size: 35px;
    line-height: 40px;
  }
  @media(max-width: 1200px){
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 25px;
  }
  @media(max-width: 992px){
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  @media(max-width: 767px){
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 15px;
  }
`;

export const BgCard = styled(Box)`
  min-height: 138px;
  margin-bottom: 14px;
  box-shadow: 0px 20px 60px 0 rgb(59 73 81 / 10%);
  background-color: ${(props) => props.bg};
  border-radius: 30px;
  width: ${(props) => props.width};
  padding: 40px;
  .boxDesc {
    margin-bottom: 00px;
  }

  @media(max-width: 992px){
     padding: 15px;
    border-radius: 20px;
  }

  @media only screen and (max-device-width: 768px)  {
    width: 100% !important;
  }
`;
