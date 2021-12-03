import styled from "styled-components";

export const NotFoundSectionWrapper = styled.section.attrs(() => ({
  class: "content",
}))`
  
  ${'' /* width: 590.4px;
  height: 294px; */}
  padding: 81.3px 0px 168px 0px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 150px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.66;
  letter-spacing: normal;
  text-align: center;
  color: #0099ba;
  background-color: #EFF3F4;

  .text-404{
    margin-top:60px;
    font-size: 200px;
    font-weight:600;
    margin-right:10px;
  }

  img{
    width: 409px;
    height: auto;
  }
  
  .error-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .details-text{
    max-width: 445px;
    font-weight: normal;
    font-size: 25px;
    line-height: 32px;
    margin-top: 27px;
    color:#09425A;
    padding: 0px 10px;
  }
  .Path-10787 {
    padding: 35px 0px 0px 0px;
  }

  @media(max-width: 1366px){
    padding: 70px 0px 150px 0px;
  }

  @media(max-width: 992px){
    padding: 40px 0px 140px 0px;

    .text-404{
      margin-top:30px;
      font-size: 160px;
      font-weight:600;
      margin-right:10px;
    }
  
    img{
      width: 350px;
      height: auto;
    }

    .details-text{
      max-width: 425px;
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media(max-width: 767px){
    padding: 23px 0px 130px 0px;

    .text-404{
      margin-top:30px;
      font-size: 140px;
    }
  
    img{
      width: 300px;
      height: auto;
    }

    .details-text{
      max-width: 247px;
      font-size: 20px;
      line-height: 25px;
      padding: 0px 0px;
    }
  }
 
`;
