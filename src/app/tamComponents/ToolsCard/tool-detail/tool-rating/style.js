import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const CancelButton = styled(Box)`
  text-align: right;
  background-color: #a9bdc5;
  font-weight: 300;
  border-radius: 50%;
  width: auto;
  height: auto;
  color: #eff3f4;
  display: inline-block;
  cursor: pointer;

  
  
  &.tool_rating_close{
    background-color: unset;
    width: auto;
    height: auto;
    position: absolute;
    top: 20px;
    right: 20px;

    @media(max-width: 1366px){
      top: 15px;
      right: 15px;
    }
    @media(max-width: 1200px){
      top: 10px;
      right: 10px;
    }
    @media(max-width: 992px){
      top: 10px;
      right: 8px;
    }


    img{
      width: 50px;
      height: 50px;

      @media(max-width: 1366px){
        width: 45px;
        height: 45px;
      }
      @media(max-width: 1366px){
        width: 35px;
        height: 35px;
      }
      @media(max-width: 992px){
        width: 30x;
        height: 30px;
      }
      @media(max-width: 767px){
        width: 25px;
        height: 25px;
      }
    }
  }
`;

export const ContentWrapper = styled(Box)`
  background-color: white;
  color: black;
  margin: 0px auto;
  margin-top: 100px;
  border-radius: 30px;
  padding: 15px 10px 20px 50px;
  font-family: 'Source Sans Pro';
  max-width: 70%;
  position: relative;
  outline: none;

  .date-and-name{
    margin-top: 30px;
  }


.tools_rating_main_wrapper{
  margin-top: 67px;


  @media(max-width: 1366px){
      margin-top: 67px;
    }
  
    @media(max-width: 1200px){
      margin-top: 50px;
    }
  
    @media(max-width: 992px){
      margin-top: 30px;
    }
  
    @media(max-width: 767px){
      margin-top: 10px;
    }
}

.tools_rating_wrapper{
  margin-top: 57px;
  @media(max-width: 1366px){
    margin-top: 57px;
  }

  @media(max-width: 1200px){
    margin-top: 50px;
  }

  @media(max-width: 992px){
    margin-top: 30px;
  }

  @media(max-width: 767px){
    margin-top: 19px;
  }
}




  &.tool_rating_popup{
    padding: 60px 55px;


    @media(max-width: 1366px){
      padding: 50px 45px;
    }

    @media(max-width: 1200px){
      padding: 40px 35px 20px 35px;
    }

    @media(max-width: 992px){
      padding: 30px 25px 30px 25px;
      border-radius: 20px;
    }
    @media(max-width: 767px){
      padding: 12px 17px 18px 17px;
    }
  }


  @media only screen and (max-device-width: 768px) {
    max-width: calc(100% - 20px);
    padding: 15px 10px 20px 15px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 15px 10px 20px 30px;
    max-width: 80%;
  }

  @media(max-width: 1366px){
    .date-and-name{
      margin-top: 25px;
    }
  }
  @media(max-width: 1200px){
    .date-and-name{
      margin-top: 20px;
    }
  }
  @media(max-width: 992px){
    .date-and-name{
      margin-top: 16px;
    }
  }
  @media(max-width: 767px){
    .date-and-name{
      margin-top: 13px;
    }
  }
`;

export const TitleWrapper = styled(Box)`
  color: #0099ba;
  font-size: 38px;
  font-weight: bold;


  &.tools_rating_text_main{
    font-size: 38px;
    line-height: 45px;

    @media(max-width: 1366px){
      font-size: 32px;
      line-height: 40px;
    }
    @media(max-width: 1200px){
      font-size: 26px;
      line-height: 35px;
      padding-right: 30px;
    }
    @media(max-width: 992px){
      font-size: 20px;
      line-height: 25px;
    }
    @media(max-width: 768px){
      font-size: 18px;
      line-height: 22px;
    }

  
  }

  @media only screen and (max-device-width: 480px) {
    font-size: 18px;
  }
`;

export const SubTitleWrapper = styled(Box)`
  color: #a9bdc5;
  font-size: 20px;
  font-weight: normal;
  max-width: 100ch;
  margin-top: 25px;

  &.tools_rating_sub_text_main{
    font-size: 20px;
    line-height: 27px;
    margin-top: 25px;


    @media(max-width: 1200px){
      font-size: 18px;
      line-height: 25px;
      margin-top: 20px;
  
    }
    @media(max-width: 992px){
      font-size: 16px;
      line-height: 20px;
      margin-top: 10px;
    }
    @media(max-width: 767px){
      font-size: 12px;
      line-height: 16px;
      margin-top: 6px;
    }
  }

  @media only screen and (max-device-width: 480px) {
    font-size: 12px;
  }
`;

export const SliderWrapper = styled(Box)`
  max-width: 80%;
  margin-left: 61px;
  margin-top: 40px;

  @media(max-width: 1366px){
    margin-left: 59px;
  }
  @media(max-width: 1200px){
    margin-left: 50px;
  }
  @media(max-width: 992px){
    margin-left: 40px;
    margin-top: 50px;
  }
  @media(max-width: 767px){
    margin-left: 30px;
    margin-top: 30px;
  }
  .tools_rating_slider{
    margin-top: 50px;
  }



  .slider_level{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #A9BDC5;
    font-weight: 700;
    margin-top: 7px;



    @media(max-width:767px){
      font-size: 10px;
        margin-top: 0px;
    }

  }

    .slider_level_text{
      last-child{
        margin-right: -10px;
      }
    }
`;

export const RatingTagWraper = styled(Box)`
  width: 101%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const QuestionWrapper = styled(Box)`
  width: 100%;
  margin-bottom: 20px;
  // margin-top: 67px;
  display: flex;
  align-items: center;

@media(max-width: 1366px){
  margin-bottom: 18px;
}
@media(max-width: 1200px){
  margin-bottom: 16px;
}
@media(max-width: 992px){
  margin-bottom: 14px;
}


  .card-number {
    background-color: #a9bdc5;
    font-size: 25px;
    font-weight: 300;
    border-radius: 50%;
    width: 37px;
    height: 37px;
    text-align: center;
    color: #eff3f4;
    margin-right: 24px;
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    

    @media(max-width: 1366px){
      width: 35px;
      height: 35px;
      font-size: 23px;
    }
    @media(max-width: 1200px){
      width: 30px;
      height: 30px;
      font-size: 20px;
      margin-right: 20px;
    }
    @media(max-width: 992px){
      width: 25px;
      height: 25px;
      font-size: 18px;
      margin-right: 15px;
    }
    @media(max-width: 767px){
      width: 20px;
      height: 20px;
      font-size: 14px;
      margin-right: 10px;
      padding: 0px;
    }

  }


  .card-title {
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;

    @media(max-width: 1366px){
      font-size: 28px;
      line-height: 32px;
    }

    @media(max-width: 1200px){
      font-size: 25px;
      line-height: 30px;
    }
    @media(max-width: 992px){
      font-size: 22px;
      line-height: 25px;
    }
    @media(max-width: 767px){
      font-size: 20px;
      line-height: 20px;
    }
  }


  // @media(max-width: 1366px){
  //   margin-top: 67px;
  // }

  // @media(max-width: 1200px){
  //   margin-top: 50px;
  // }

  // @media(max-width: 992px){
  //   margin-top: 30px;
  // }

  // @media(max-width: 767px){
  //   margin-top: 15px;
  // }
`;

export const ToolRatingWrapper = styled(Box)`
  margin-top: 0px;
  margin-left: 61px;
  
  @media(max-width: 1366px){
    margin-left: 59px;
  }
  @media(max-width: 1200px){
    margin-left: 50px;
  }
  @media(max-width: 992px){
    margin-left: 40px;
  }
  @media(max-width: 992px){
    margin-left: 30px;
  }
`;

export const CardRating = styled(Rating)`

  .MuiRating-iconEmpty {
    color: #ffffff !important;
    stroke: #cfd7d9 !important;
  }

  .MuiRating-sizeLarge {
    margin-top: 15px;
  }

  color: #09425a !important;

  .MuiSvgIcon-root {
    height: 30px !important;
    width: 30px !important;
    position: 'absolute';
    left: '50%', top: '50%';


    @media(max-width: 1366px){
      height: 28px !important;
      width: 28px !important;
    }
    @media(max-width: 1200px){
      height: 25px !important;
      width: 25px !important;
    }
    @media(max-width: 992px){
      height: 21px !important;
      width: 21px !important;
    }
  }


`;

export const CustomerButtonWrapper = styled(Box)`
  margin-top: 100px;

  > button{
    max-width: 484px;
  }
  @media(max-width: 1366px){
    margin-top: 70px;
    > button{
      max-width: 484px;
    }
  }
  @media(max-width: 1200px){
    margin-top: 60px;

    > button{
      max-width: 484px;
    }
  }
  @media(max-width: 992px){
    margin-top: 58px;

    > button{
      max-width: 100%;
      
    height: 45px !important;
    font-size: 18px !important;
    margin-top: 0px;

    }
  }

`;

export const ScrollWrapper = styled(Box)`
  overflow: auto;

  // @media only screen and (max-device-width: 768px) {
  //   max-height: 70vh;
  // }
`;
