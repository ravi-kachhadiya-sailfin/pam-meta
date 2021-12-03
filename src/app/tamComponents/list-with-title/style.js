import styled from 'styled-components';

export const Title = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  color: #09425a;
  font-size: 32px;
  font-weight: bold;
  color: #09425a;
  margin-bottom: 26px;

  
  @media (max-width: 992px){
    font-size: 26px;
    margin-bottom: 16px;
  }
  @media (max-width: 767px){
      font-size: 17px;
       margin-bottom: 15px;
  }
`;

export const UL = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-left: 20px;
  list-style: none;
  max-width: 70%;


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
    margin-bottom: 26px;
    position: relative;
    padding-left: 15px;

    @media(max-width: 767px){
      padding-left: 0px;
    }
    
    :before {
      content: "";
      position: absolute;
      left: -20px;
      top: 7px;
      height: 18px;
      width: 18px;
      background: #0099ba;
      border-radius: 50%;

      @media(max-width: 767px){
        height: 9px;
        width: 9px;
      }
    }
  }


  @media (max-width: 1366px){
    li{
      font-size: 22px;
      margin-bottom: 16px;
    }

  @media (max-width: 992px){
    li{
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 767px){
    li{
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 12px;
    }

    .prfy-li-list{
      font-size: 18px !important;
      font-weight: 600;
    }
  }
`;