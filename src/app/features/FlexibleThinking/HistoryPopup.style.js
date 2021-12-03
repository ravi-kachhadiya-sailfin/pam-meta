import { Modal } from '@material-ui/core';
import styled from 'styled-components';

export const HistoryPopUp = styled(Modal)`
  margin: 0px auto;
  position: absolute  !important;

  .doc-wrapper{
    margin:58px 0px;
  }

  @media(max-width: 1366px){
    .doc-wrapper{
       margin:50px 0px;
    }
  }
  @media(max-width: 1200px){
    .doc-wrapper{
       margin:40px 0px;
    }
  }

  @media(max-width: 992px){
    .doc-wrapper{
       margin:30px 0px;
    }
  }

  @media(max-width: 767px){
    .doc-wrapper{
       margin:20px 0px;
    }
  }
`;

export const HistoryContentWrapper = styled.div`
  margin-top: 35px;
  padding-bottom: 75px;
  border-bottom: 1px solid #a9bdc5;

  @media(max-width: 1366px){
    margin-top: 34px;
    padding-bottom: 70px;
   }

  @media(max-width: 1200px){
    margin-top: 32px;
    padding-bottom: 60px;
   }

  @media(max-width: 992px){
    margin-top: 31px;
    padding-bottom: 50px;
   }

  @media(max-width: 767px){
   margin-top: 30px;
   padding-bottom: 40px;
  }
`;

export const Details = styled.div`
  display:flex;
  margin-bottom: 55px;
 

  .main-detail{
    width:80%;
  }

  .slider-container{
    width: 100%;
    margin:0px;

    >div{
      margin: 0px !important;
      max-width: 100%;
    }
  }

  .number-card{
    // margin-top: 4px;
    min-width: 38px;
    width: 38px;
    height: 38px;
    background: #A9BDC5;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 22px;

    .card-number-text{
      font-size: 30px;
      font-weight: 300;
      color:#EFF3F4;
      margin-top: -2px;
    }
    
  }

  .normal-primary-text{
    margin-top:18px;
    margin-bottom: 0px;
  }

  @media(max-width: 1366px){
    margin-bottom: 50px;

    .normal-primary-text{
      margin-top:17px;
    }

    .number-card{
      min-width: 34px;
      width: 34px;
      height: 34px;
      margin-right: 20px;
  
      .card-number-text{
        font-size: 26px;
      }
    }
  }

  @media(max-width: 1200px){
    margin-bottom: 40px;

    .normal-primary-text{
      margin-top:15px;
    }

    .number-card{
      min-width: 28px;
      width: 28px;
      height: 28px;
      margin-right: 16px;
  
      .card-number-text{
        font-size: 22px;
      }
    }
  }

  @media(max-width: 992px){
    .slider-container{
      width: 95%;
    }
    .main-detail{
      width:100%;
    }
    margin-bottom: 35px;

    .normal-primary-text{
      margin-top:14px;
    }

    .number-card{
      min-width: 24px;
      width: 24px;
      height: 24px;
      margin-right: 12px;
  
      .card-number-text{
        font-size: 18px;
      }
    }
  }

  @media(max-width: 767px){
    margin-bottom: 30px;

    .normal-primary-text{
      margin-top:12px;
    }

    .number-card{
      min-width: 20px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
  
      .card-number-text{
        font-size: 14px;
      }
      
    }
  }
  
`;

export const UL = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  list-style: none;
  max-width: 100%;
  
  &.mb{
    margin-bottom:24px;
  }


  @media(max-width: 1366px){
     max-width: 100%;
  }

  li {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    font-size: 25px;
    position: relative;
    padding-left: 15px;

    @media(max-width: 767px){
      padding-left: 0px;
    }

    :before {
      content: "";
      position: absolute;
      margin-top:3px;
      left: -20px;
      top: 9px;
      height: 12px;
      width: 12px;
      background: #09425A;
      border-radius: 50%;

      @media(max-width: 1366px){
        height: 11px;
        width: 11px;
        margin-top:2px;
      }

      @media(max-width: 1200px){
        height: 10px;
        width: 10px;
        margin-top:-1px;
      }

      @media(max-width: 992px){
        height: 9px;
        width: 9px;
        margin-top:-2px;
      }

      @media(max-width: 767px){
        height: 8px;
        width: 8px;
        margin-top:-3px;
      }
    }
  }

  @media (max-width: 1366px){
    li{
      margin-bottom: 0px;
    }
  }

  @media (max-width: 1200px){
    li{
      margin-bottom: 5px;
    }
  }

  @media (max-width: 992px){
    li{
      margin-bottom: 5px;
    }
  }
  @media (max-width: 767px){
    li{
      margin-bottom: 5px;
    }
  }
`;