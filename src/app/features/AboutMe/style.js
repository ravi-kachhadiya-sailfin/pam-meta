import { Box, Button } from "@material-ui/core";
import styled from "styled-components";

export const ContainerBox = styled(Box)`
  background-color: #eff3f4;
  padding-top: 70px;
  padding-bottom: 193px;

  .about_button{
    button{
      box-shadow: none;
    }
  }


  @media(max-width: 1366px){
    padding-top: 60px;
    padding-bottom: 150px;
  }
  @media(max-width: 1200px){
    padding-top: 50px;
    padding-bottom: 100px;
  }
  @media(max-width: 992px){
    padding-top: 40px;
    padding-bottom: 80px;
  }
  @media(max-width: 767px){
    padding-top: 30px;
    padding-bottom: 70px;
  }



  .que_card{
    margin-bottom: 20px;
    position: relative;
    box-shadow: 0px 20px 60px 0 rgb(59 73 81 / 10%);
    border-radius: 30px;

    :last-child{
      margin-bottom: 30px;
    }
    &.que_one {
      .MuiFormControlLabel-root{
        @media(max-width: 767px){
          width: 50% !important;
          :first-child{
            margin-bottom: 0px;
          }
          :last-child{
            margin-bottom: 0px;
          }
        }
      }
    }



    .MuiFormControlLabel-root{
      margin-left: 0px;
      margin-right: 0px;
      width: 25% !important;


      @media(max-width: 992px){
        width: 50% !important;
        margin-bottom: 20px;
        :last-child{
          margin-bottom: 20px;
        }
      }
      @media(max-width: 767px){
        width: 100% !important;
        border-radius: 20px;
      }

      .MuiButtonBase-root{
        padding:0px;
      }

      .MuiTypography-root{
        font-size: 20px;
        line-height: 27px;
        margin-left: 12px;
        font-weight: 600;

        @media(max-width: 1200px){
          font-size: 18px;
        }
        @media(max-width: 992px){
          font-size: 15px;
          font-weight: 600;
        }
        
      }
      .MuiSvgIcon-root{
        width: 30px;
        height: 30px;

        @media(max-width: 1200px){
          width: 28px;
          height: 28px;
        }
        @media(max-width: 1200px){
          width: 25px;
          height: 25px;
        }
        @media(max-width: 992px){
          width: 20px;
          height: 20px;
        }
      }
    }




  }

  &.container {
    width: 100%;
    max-width: 1550px;
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }

  .titleContainer {
    display: flex;
    flex-direction: column;
  }

  .aboutMeDesc {
    color: #09425a;
    max-width: 100ch;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 25px;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    display: inline-block;
    margin-bottom: 37px;

    @media(max-width: 1366px){
      font-size: 22px;
      margin-bottom: 30px;
    }
    @media(max-width: 1200px){
      font-size: 20px;
      margin-bottom: 25px;
    }
    @media(max-width: 992px){
      font-size: 18px;
      line-height: normal;
      margin-bottom: 20px;
    }
    @media(max-width: 767px){
      font-size: 14px;
      line-height: normal;
      margin-bottom: 17px;
    }
  }


  .hempMeTitle {
    font-family: "Source Sans Pro";
    font-size: 38px;
    line-height: 45px;
    margin-bottom: 35px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    text-transform: uppercase;
    



    @media(max-width: 1366px){
      font-size: 35px;
      line-height: 45px;
    }
    @media(max-width: 1200px){
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 30px;
    }
    @media(max-width: 992px){
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 25px;
    }
    @media(max-width: 767px){
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 20px;
    }
  }


`;

export const ContentHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;



  .title {
    font-family: "Source Sans Pro";
    font-size: 110px;
    line-height: 132px;
    margin-bottom: 32px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;



    @media(max-width: 1366px){
      font-size: 80px;
      line-height: 85px;
      margin-bottom: 30px;
    }

    @media(max-width: 1200px){
      font-size: 70px;
      line-height: 75px;
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      font-size: 55px;
      line-height: 60px;
      margin-bottom: 10px;
    }
    @media(max-width: 767px){
      font-size: 45px;
      line-height: 50px;
      margin-bottom: 0px;
    }

  }
`;

export const ButtonWrapper = styled(Button)`
    color: #fff !important;
    background-color: #f19840 !important;
    width: 100%;
    font-size: 25px !important;
    font-weight: 600 !important;
    text-transform: capitalize;
    height: 78px;
    border-radius: 40px !important;
    box-shadow: none;

  :hover {
    background-color: #e87e1f;
  }

  @media (max-width: 992px) {
    height: 45px;
    font-size: 18px !important;
  }
  @media (max-width: 992px) {
    height: 45px;
    font-size: 18px !important;
  }
`;
