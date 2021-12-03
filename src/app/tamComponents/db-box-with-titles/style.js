import styled from 'styled-components';

export const Container = styled.div`
  background: #09425a;
  padding: 35px 45px;
  margin: 53px 0px 56px 0px;
  border-radius: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  position: relative;

  display:flex;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
    padding: 28px 28px 28px 28px;
  }
  @media(max-width: 767px){
      padding: 10px 15px;
      margin: 15px 0px 55px 0px;
  }
  .goto_responsive{
    display:none;
      @media(max-width: 767px){
        display: block;
        width: 10px;
        right: 0px;
      }
  }
  .goto {
    height: 60px;
    width: 60px;
    right: 20px;
    color: #0099ba;
    border-radius: 50%;
    padding: 0px !important;
    transform: scale(-1);
    cursor:pointer;

    @media(max-width: 1366px){
  height: 40px;
    width: 40px;
    }
    @media(max-width: 767px){
      min-width: 32px;
      max-height: 32px;
      right: 0px;
      display: none;
    }
  }

  .title{
    display:flex;
    justify-content:space-between;
  }


  @media only screen and (max-width: 768px) {

    .goto{
      height: 36px;
      width: 36px;
    }
  }
`;

export const Title = styled.div`
  color: #0099ba;
  font-size: 25px;
  margin-bottom: 26px;
  font-weight: 600;

  @media only screen and (max-width: 767px) {
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0px;
  }
`;

export const SubTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  font-size: 28px;
  margin-top: 0px;
  font-weight: bold;
  padding-right:12%;

  @media only screen and (max-width: 1200px) {
    margin-top: 0px;
    font-size: 25px;
    
  }
  @media only screen and (max-width: 992px) {
    padding-right: 0%;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 0px;
    font-size: 16px;
  
  }

`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 25px;
  max-width: 1080px;
  // text-align:justify;
  line-height: 1.3em;
  margin-top:23px;

  @media only screen and (max-width: 1366px) {
      font-size: 22px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 5px;
  }

`;
