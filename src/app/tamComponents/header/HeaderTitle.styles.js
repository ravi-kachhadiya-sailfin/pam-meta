import styled from "styled-components";

export const HeaderTitleContainerWrapper = styled.div.attrs(() => ({
  className: "container heading-title",
}))`
  width: auto;
  max-width: unset;
  position: relative;
  padding-top:0px;





  @media only screen and (max-width: 1024px) {
    margin-top: 10px;
    padding-left:15px;
    padding-top:0px;
    text-align:center;
  }
  @media only screen and (max-width: 768px) {
        position: relative;
        z-index: 1;
        margin-top: 0px;
  }

  .hello-desc {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 25px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #eff3f4;
    ${'' /* display: inline-block; */}
    max-width: 100%;
    ${'' /* padding-left: 50px; */}
    @media only screen and (max-width: 1366px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1024px) {
      text-align:center;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
      max-width: 100%;
      margin: 0px;
      padding: 0px 0px;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .hello-sub-desc {
    margin-top:20px;
    // display:none
  }
  .hello {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 110px;
    font-weight: 300;
    ${'' /* width: 500 */}
    font-stretch: normal;
    font-style: normal;
    line-height: 110px;
    letter-spacing: normal;
    text-align: left;
    color: #eff3f4;
    display: inline-block;

    @media only screen and (max-width: 1366px) {
      width: 100%;
      font-size: 80px;
      line-height:80px;
    }
    @media only screen and (max-width: 1024px) {
      width: 100%;
      text-align: center;
      font-family: "Source Sans Pro", sans-serif;
      font-size: 40px;
      line-height: 45px;

      margin: 15px 0 5px 0 !important;
    }
    @media only screen and (min-width: 768px) {
      .hello {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 45px;
      ${'' /* font-weight: 300; */}
      ${'' /* width: 500 */}
      font-stretch: normal;
      font-style: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #eff3f4;
      display: inline-block;
      
    }

    
  }


`;
