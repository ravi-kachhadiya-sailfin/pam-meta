import styled from "styled-components";

export const PageBody = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 70px 90px 120px 90px;
  width: 100%;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;

  .container {
    width: 100%;
    max-width: 1550px;
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }

  .no-Tool-found {
    display: flex;
    justify-content: center;
    max-width: 100%;
    color: #0099ba;

    > span {
      font-size: 25px;
    }
  }

  // Large devices (desktops, 992px and up)
  @media screen and (max-width: 1366px) {
    padding: 58px 0px 110px 0px;
   }
   // Medium devices (tablets, 768px and up)
   @media screen and (max-width: 992px) {
     padding: 42px 0px 90px 0px;
    }
    
    // Small devices (landscape phones, 576px and up)
    @media screen and (max-width: 767px) {
     padding: 26px 0px 70px 0px;
    }
  
`;
export const PageTitle = styled.div`
  color: #0099ba;
  margin-bottom: 11px;
  font-size: 110px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;

  padding-right: 50px;

  @media (max-width: 1366px){
    font-size: 80px;
    margin-bottom: 11px;
    &.about-title{
      margin-bottom: 35px;
    }
  }
  @media (max-width: 1200px){
    padding-right: 0px;
    font-size: 70px;
    margin-bottom: 9px;
    margin-right: 25px;
    &.about-title{
      margin-bottom: 25px;
    }
  }
  @media (max-width: 992px){
    font-size: 55px;
    margin-bottom: 25px;
    margin-top: 0x;
    margin-right: 5px;
  }
  @media (max-width: 767px){
    font-size: 45px;
    margin-bottom: 0px;
    margin-right: 0px;
    letter-spacing: -0.9px;

    &.about-title{
      margin-bottom: 20px;
    }

  }
`;

export const PageTitleFootNote = styled.div`
  
`;

export const ParaTitle = styled.div`
  color: #0099ba;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 47px;
  font-stretch: bold;
  font-style: bold;
  line-height: 1.2;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
`;

export const Para = styled.div`
  // color: #09425A;
  // margin-bottom: 30px;
  // font-size: 25px;
  // font-weight: 400;
  // font-stretch: normal;
  // font-style: normal;
  // line-height: 1.2;
  // letter-spacing: normal;
  // text-align: left;
`;

export const SubParaTitle = styled.div`
  // color: #09425A;
  // margin-top: 20px;
  // margin-bottom: 20px;
  // font-size: 35px;
  // font-stretch: bold;
  // font-style: bold;
  // line-height: 1.2;
  // text-align: left;
  // font-family: "Source Sans Pro", sans-serif;
`;

export const HorizonatalLine = styled.div`
  margin: 65px 0px 55px 0px;
  hr{
    margin:0px;
  }

  @media (max-width: 992px){
    margin: 45px 0px 35px 0px;
  }
  @media (max-width: 767px){
     margin: 34px 0px 30px 0px;
  }
`

export const Li = styled.li`
  content: "• ";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 2em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
`

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
    margin-bottom: 16px;
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
      top: 7px;
      height: 15px;
      width: 15px;
      background: #0099ba;
      border-radius: 50%;

      @media(max-width: 1366px){
        height: 12px;
        width: 12px;
        margin-top:-1px;
      }

      @media(max-width: 992px){
        height: 10px;
        width: 10px;
        margin-top:-1px;
      }

      @media(max-width: 767px){
        height: 9px;
        width: 9px;
        margin-top:-1px;
      }
    }
  }

  @media (max-width: 1366px){
    li{
      font-size: 22px;
      margin-bottom: 16px;
    }

    &.mb{
      margin-bottom:20px;
    }
  }

  @media (max-width: 992px){
    li{
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 12px;
    }

    &.mb{
      margin-bottom:16px;
    }
  }
  @media (max-width: 767px){
    li{
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 8px;
    }

    &.mb{
      margin-bottom:8px;
    }

    .prfy-li-list{
      font-size: 18px !important;
      font-weight: 600;
    }
  }
`;

