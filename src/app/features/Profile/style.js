import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerBox = styled(Box)`



.my_privacy{
  margin-top:34px;
}

.button_submit{
  margin-bottom: 193px;
  @media(max-width: 1200px){
    margin-bottom: 100px;
  }
  @media(max-width: 992px){
    margin-bottom: 70px;
  }
  @media(max-width: 767px){
    margin-bottom: 60px;
  }
}
.research_card{

  margin-bottom: 30px;

  @media(max-width: 1200px){
    margin-bottom: 25px;
  }
  
  @media(max-width: 767px){
    margin-bottom: 20px;
  }
    .MuiFormControlLabel-root{
      margin-left: 0px;
      margin-bottom: 0px;
      display: flex;
      align-items: flex-start;
      margin-right: 100px;

      @media(max-width: 1200px){
        margin-bottom: 20px;
      }
      @media(max-width: 992px){
        margin-right: 00px;
      }

      :last-child{
        margin-right: 0px;
        @media(max-width: 1200px){
          margin-bottom: 00px;
        }
      }

      .MuiButtonBase-root{
        padding: 0px;

        .MuiSvgIcon-root{
          width: 30px;
          height: 30px;


          @media(max-width: 1200px){
            width: 25px;
            height: 25px;
          }
          @media(max-width: 992px){
            width: 18px;
            height: 18px;
            margin-top: 2px;
          }
        }
      }
      .MuiTypography-root{
        line-height: initial;
        padding-top: 3px;
        padding-left: 15px;
        font-weight: 600;
        font-size: 20px;

        @media(max-width: 1200px){
          font-size: 18px;
          padding-top: 2px;
        }
        @media(max-width: 992px){
          font-size: 15px;
          padding-top: 0px;
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

.checkbox_group{
  display: inline-flex;

  .MuiButtonBase-root{
    @media(max-width: 767px){
      padding-top: 0px;
    }
  }
  label{
    color: #0099BA;
    font-weight: 400;
    display: flex;
    align-items: center;

    @media(max-width: 767px){
      line-height: 16px;
    }
  }
}



.research_dec  {
  max-width: 100%;
  font-family: 'Source Sans Pro';
  font-size: 25px;
  line-height: 32px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  margin-bottom: 30px;

  @media(max-width: 1366px){
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  @media(max-width: 1200px){
    max-width: 100%;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 15px;
  }
  @media(max-width: 992px){
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  @media(max-width: 767px){
    font-size: 14px;
    line-height: 18px;
    margin-bottom:0px;
  }


  > a {
    color: #0099ba;
  }
}
  .boxDesc {
    max-width: 100%;
    font-family: 'Source Sans Pro';
    font-size: 25px;
    line-height: 32px;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    margin-bottom: 20px;

    @media(max-width: 1366px){
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @media(max-width: 1200px){
      max-width: 100%;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 15px;
    }
    @media(max-width: 992px){
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    @media(max-width: 767px){
      font-size: 14px;
      line-height: 18px;
      margin-bottom:0px;
    }


    > a {
      color: #0099ba;
    }
  }

  .boxAllReqMsg {
    font-family: 'Source Sans Pro';
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    font-stretch: normal;
    font-style: normal;
    text-align: left;
    margin-bottom: 22px;


    @media(max-width: 1366px){
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
    @media(max-width: 1200px){
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
    }
    @media(max-width: 992px){
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
    }
    @media(max-width: 767px){
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      margin-top: 5px;
      margin-bottom: 16px;
    }

    span{
      color: #007C91;
    }
  }

  .privacySeriously .content-bgcard {
    padding-top: 22px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 22px;


    @media(max-width: 767px){
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }

  .boxTitle {
    font-family: "Source Sans Pro";
    font-size: 38px;
    line-height: 40px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 19px;
  
  
    @media(max-width: 1366px){
      font-size: 35px;
      line-height: 40px;
    }
    @media(max-width: 1200px){
      font-size: 30px;
      line-height: 35px;
      margin-bottom: 15px;
    }
    @media(max-width: 992px){
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 10px;
    }
    @media(max-width: 767px){
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 5px;
    }
  }
  .about-section{
    display: block;
  }
  .about-width{
    display: flex;

    @media(max-width:767px){
      display:block
    }
  }

`;

export const ContentHeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;


 


  .titleContainer {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 110px;
    line-height: 132px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    margin-bottom: 20px;

    @media(max-width: 1366px){
      font-size: 80px;
      margin-bottom: 20px;
    }
    @media(max-width: 1200px){
      font-size: 70px;
      line-height: 75px;
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      font-size: 55px;
      line-height: 60px;
      margin-bottom: 20px;
      margin-top: 10px;
    }
    @media(max-width: 767px){
      font-size: 45px;
      line-height: 45px;
      margin-bottom: 20px;
      margin-top: 10px;
    }
  }
  .sub_title {
    font-size: 38px;
    line-height: 45px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    text-transform: uppercase;

    @media(max-width: 1366px){
      font-size: 32px;
      line-height: 40px;
    }

    @media(max-width: 1200px){
      font-size: 30px;
      line-height: 37px;
    }
    @media(max-width: 992px){
      font-size: 25px;
      line-height: 27px;
    }
    @media(max-width: 767px){
      font-size: 20px;
      line-height: 23px;
    }
  }

  .profileIcon {
    width: 268px;
    height: 268px;
    background-color: #fff;
    border-radius: 50%;
    // box-shadow: rgb(59 73 81 / 10%) 15px 15px 20px 0px;
    color: #a9bdc5;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;




    @media(max-width: 1366px){
      width: 200px;
      height: 200px;
    }
    @media(max-width: 1200px){
      width: 170px;
      height: 170px;
    }

    @media(max-width: 992px){
      width: 120px;
      height: 120px;
    }
    @media(max-width: 767px){
      width: 80px;
      height: 80px;
    }

    .profile_placeholder {
      width: 100%;
      height: 100%;
    }
  }

  .profileImg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  @media(max-width: 1366px){
    padding-bottom: 20px;
  }
  @media(max-width: 767px){
    padding-top: 18px;
    padding-bottom: 15px;
    align-items: flex-start;
  }
`;

export const ContactDetailsBox = styled(Box)`
  margin-bottom: 40px;

  .card_box{
    padding: 35px;
  }


  @media(max-width: 1200px){
    margin-bottom: 35px;
  }
  @media(max-width: 992px){
    margin-bottom: 30px;
  }
  @media(max-width: 767px){
    margin-bottom: 23px;
  }
`;

export const AboutMeFormBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: -15px;
  margin-left: -15px;

  @media(max-width: 767px){
    flex-direction: column;
  }

  .AboutMeFormBox_col{
    padding-right: 15px;
    padding-left: 15px;
    width: 50%;



    @media(max-width: 992px){
      width: 50%; 
    }
    @media(max-width: 767px){
      width: 100%; 
    }
  }


  .security_input{

  }

  .about_group_cs{
    padding-bottom: 32px !important; 

    @media(max-width: 1200px){
      padding-bottom: 25px !important; 
    }

    @media(max-width: 992px){
      padding-bottom: 20px !important; 
    }

    @media(max-width: 767px){
      padding-bottom: 8px !important; 
    }
    .MuiInputBase-root{
      &.dVNMQt{
        padding-right: 50px;
      }
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
  box-shadow: none !important;


  @media(max-width: 992px){
    height: 45px;
    font-size: 18px !important;
  }

  :hover {
    background-color: #e87e1f;
  }
`;

export const RadioGroupContainer = styled(Box)`

margin: 40px;


@media(max-width: 1366px){
  margin: 30px 30px 40px 30px ;
}
@media(max-width: 1200px){
  margin: 20px 20px 20px 20px ;
}
@media(max-width: 992px){
  margin: 20px 10px  ;
}
@media(max-width: 767px){
  margin: 20px 00px  ;
}



  label {
    color: #a9bdc5;
    font-size: 18px;
    font-weight: 700;
    margin-left: 0px;
    display: flex;
    align-items: flex-start;
    @media(max-width: 767px){
      margin-bottom: 0px;
    }

    .MuiTypography-root{
      padding-left: 20px;
      margin-bottom: 30px;

      @media(max-width :1200px){
        margin-bottom: 25px;
      }

      @media(max-width :992px){
        padding-left: 17px;
        margin-bottom: 20px;
        line-height: 16px;
        
      }
    }

    :last-child{
      .MuiTypography-root{
        margin-bottom: 00px
      }
    }
    .radio_label_cs{
      font-size: 20px;
      line-height: 27px;
      
      @media(max-width: 1366px){
        font-size: 18px;
        line-height: 22px;
        
      }
      @media(max-width: 1200px){
        font-size: 16px;
        line-height: 20px;
      }
      @media(max-width: 992px){
        font-size: 14px;
        line-height: 18px;
      }
      @media(max-width: 767px){
        font-size: 12px;
        line-height: 16px;
      }

    }

   
    .MuiButtonBase-root{
      padding: 0px ;  

      .MuiSvgIcon-root{
        width: 30px;
        height: 30px;


        @media(max-width: 1200px){
          width: 25px;
          height: 25px;
          margin-top: 10px;
        }
        @media(max-width: 992px){
          width: 25px;
          height: 25px;
          margin-top: 0px;
        }
      }
    }
  }

  .radioGroupTitle {
    color: #09425a;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 25px;



    @media(max-width: 1366px){
      font-size: 30px;
      line-height: 34px;
      margin-bottom: 22px;
    }
    @media(max-width: 1200px){
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 15px;
    }
    @media(max-width: 767px){
      font-size: 16px;
      line-height: 17px;
      margin-bottom: 12px;
      
    }
  }




`;

export const WeWillUseInfoContainer = styled(Box)`
  margin-left: 24px;
  margin-bottom: 20px;


  margin: 40px;


  @media(max-width: 1366px){
    margin: 30px 30px 40px 30px ;
  }
  @media(max-width: 1200px){
    margin: 20px 20px 20px 20px ;
  }
  @media(max-width: 992px){
    margin: 20px 10px  ;
  }
  @media(max-width: 767px){
    margin: 20px 00px  ;
  }

  > ul {
    padding-inline-start: 15px;
    color: #09425a;
    font-size: 14px;
    margin-left: 10px;

    :marker{
      width: 9px;
      height: 9px;
      font-size: 17px;
    }

    > li {
      margin-bottom: 16px;
      font-size: 20px;
      line-height: 27px;
      padding-left: 30px;

      ::marker{
        width: 9px;
        height: 9px;
        font-size: 22px;
      }

      @media(max-width: 1366px){
        font-size: 18px;
        line-height: 22px;
        
      }
      @media(max-width: 1200px){
        margin-bottom: 14px;
        font-size: 16px;
        line-height: 20px;
        padding-left: 25px;
      }
      @media(max-width: 992px){
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 18px;
        padding-left: 20px;
      }
      @media(max-width: 767px){
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 16px;
        padding-left: 10px;
      }
    }
  }

  .radioGroupTitle {
    color: #09425a;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 25px;



    @media(max-width: 1366px){
      font-size: 30px;
      line-height: 34px;
      margin-bottom: 22px;
    }
    @media(max-width: 1200px){
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 15px;
    }
    @media(max-width: 767px){
      font-size: 16px;
      line-height: 17px;
      margin-bottom: 12px;
    }
  }
`;

export const CameraIconBox = styled(Box)`
  width: auto;
  height: auto;
  color: white;
  padding: 1px;
  cursor: pointer;
  padding: 1px;
  position: absolute;
  right: 4%;
  bottom: 1%;


  @media(max-width: 767px){
    right: unset;
    left: 0px;
    bottom: 1%;
  }

  .profile_placeholder_camera{
    width: 65px;
    height: 65px;

    @media(max-width: 1366px){
      width: 50px;
      height: 50px;
    }
    @media(max-width: 1200px){
      width: 40px;
      height: 40px;
    }
    @media(max-width: 992px){
      width: 30px;
      height: 30px;
    }
    @media(max-width: 767px){
      width: 27px;
      height: 27px;

    }
  }
`;
