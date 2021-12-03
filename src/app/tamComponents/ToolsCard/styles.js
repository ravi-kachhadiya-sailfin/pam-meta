import { Card, IconButton } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const CardTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 7px 22px;
  background: #0099ba;
  font-size: 21px;
  width: 114px;
  height: 42px;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  letter-spacing: normal;
  color: #ffffff;
  text-align: center;
  line-height: 2.2rem;

  @media only screen and (max-width: 428px) {
    width: 53px;
    height: 20px;
    font-size: 12px;
    line-height: 2.2rem;
  }
 

`;

export const CardPlayIcon = styled.span`
  position: absolute;
  top: 36%;
  left: 42%;
  cursor: pointer;
  height: auto;
  width: 80px;
  transition: all .2s ease-in-out;



  :hover{
          transform: scale(1.2);
  }
  @media only screen and (max-width: 480px) {
    top: 23%;
    height: 56px;
    width: 58px;
  }
`;

export const ToolsModifiedCard = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15) !important;
  background-color: #ffffff !important;
  border-radius: 30px !important;
  position: relative;
  height: 100%;
  
  /* max-width: 487px;
  min-height: 1000px;
   min-height: 640px; */

   &.share-overflow{
    overflow: unset !important;

      .tool-img{
        border-top-left-radius:30px;
        border-top-right-radius:30px;

        @media(max-width:767px){
          border-top-left-radius:20px;
          border-top-right-radius:20px;
        }

      }
   }

   @media (max-width: 767px){
     border-radius: 20px !important;
   }

  .toolsTime {
    position: relative;
    max-height: 328px;

    > img {
      width: 100%;
      min-height: 328px;

      @media only screen and (max-width: 767px) {
         
        max-height: 131px;
        min-height: 131px;
      }

      @media only screen and (min-width: 428px) {
        max-height: 220px;
        min-height: 220px;
      }

      @media only screen and (min-width: 768px) {
        max-height: 280px;
        min-height: 280px;
      }

      @media only screen and (min-width: 992px) {
        max-height: 328px;
        min-height: 328px;
      }
    }

    @media only screen and (max-width: 480px) {
      border-radius: 20px !important;
    }
  }

  .toolsCardTitle {
    background-color: #09425A8F;
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 22px;
    color: #ffffff;
    margin-left: 10px;
    width: 130px;
    height: 35px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;



    @media(max-width: 767px){
      max-width: 95px;
      height: 30px;
      min-width: auto;
    }
  }

  .timeFont {
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    margin-left: 25%;

    @media(max-width:767px){
      font-size:16px
    }
  }

  .card-content {
    padding: 45px;
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: space-between;


    @media (max-width: 1366px){
       padding: 35px;
    }
    @media (max-width: 767px){
      padding: 15px;
    }
  }

  .tool-description {
    min-height: 300px;

      @media (max-width: 992px){
        min-height: auto;
    }
  }

  .tool-speciality {
    min-height: 120px;
    margin-top: 28px;


    @media (max-width: 992px){
        min-height: auto;
    }
    @media (max-width: 767px){
        margin-top: 15px;
    }
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    min-height: 464px;

    .tool-description {
      min-height: 145px;
    }

    .tool-speciality {
      min-height: 0;
    }

    // .card-content {
    //   padding: 45px;
    // }
    
    // .toolsTime {
    //   max-height: 131px;
    // }


    .timeFont {
      font-size: 12px;
      line-height: 1.67;
      margin-left: 14%;
    }
  }

  // @media only screen and (max-width: 480px) {
  //   min-width: auto;
  //   // max-height: 550px;

  //    .card-content{
  //      padding: 17px 11px 14px 17px;
  //    }
  // }

  // @media only screen and (min-width: 768px) {
  //   // max-width:78%;
  //   .card-content{
  //      padding: 24px 24px 14px 24px;
  //    }
  // }

  // @media only screen and (min-width: 1096px) {
  //   //  max-width: 428px;
  //   .card-content{
  //      padding: 32px 32px 14px 32px;
  //    }
  }
`;

export const IconBackgroundColor = styled.div`
  background: #eff3f4;
  height: 34px;
  width: 34px;
  display: inline-block;
  position: relative;
  border-radius: 50%;
  padding: 6px;
  img {
    height: 22px;
  }
`;

export const ToolCardTime = styled.span`
  font-size: 10px;
  color: #ffffff;
  margin-right: 0px;
  margin-left: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDescription = styled.div`
  color: #09425a;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  /* min-height: 110px; */
  margin-top: 13px;
  /* min-height: 62px; */
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-height: 8.5em;
  line-height: 1.69em;
  text-align: left;
  width:100%;
  
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: unset;
  text-overflow: ellipsis;
  overflow: hidden;
  // white-space: nowrap;

  // min-height: 62px; 
  // min-height: 110px; 
  
  @media only screen and (max-width: 428px) {
    font-size: 14px;
    max-height: 6.5em;
    line-height: 1.31em;
    width:100%;
    margin-top: 11px;
  }

  @media only screen and (min-width: 428px) {
    margin-top: 11px;
    font-size: 16px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 11px;
    font-size: 18px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 13px;
    font-size: 20px;
  }

`;

export const CardTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 39px;
  letter-spacing: normal;
  text-align: left;
  margin: 0px 0 13px 0;
  color: #0099ba;

  @media only screen and (max-width: 1366px) {
    font-size: 30px;
    line-height: normal;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 1.05;
    margin: 0 0 11px 0;
  }

  // @media only screen and (min-width: 428px) {
  //   font-size: 24px;
  //   line-height: 1.05;
  // }

  // @media only screen and (min-width: 768px) {
  //   font-size: 28px;
  //   line-height: 1.05;
  // }


 
}
`;

export const CardReadMore = styled.div`
  font-size: 21px;
  cursor: pointer;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;
  /* margin-bottom: 30px; */
  margin-top: 4px;




  @media only screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const CardSubTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 6px;
  color: #0099ba;

  @media only screen and (max-width: 1366px) {
      font-size: 25px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.57;
    margin-bottom: 0px;
  }
`;

export const CardSubTitleSubScript = styled.p`

  color: #09425a;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  margin: 0;

  word-wrap: break-word;

  line-height: 1.35;
  max-height: 2.7em;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const CardTagTitle = styled.div`
  color: #a9bdc5;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.05;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 1.5px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.07;
  }
`;

export const CardTags = styled.div`
  color: #09425a;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  margin-top: 5px;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 2px;
  }
`;

export const CardRating = styled(Rating)`
  .MuiRating-iconEmpty {
    color: #ffffff !important;
    stroke: #cfd7d9 !important;
  }





  .MuiRating-sizeLarge {
    margin-top: 10px;
  }

  color: #09425a !important;

  .MuiSvgIcon-root {
    height: 30px !important;
    width: 30px !important;
    position: 'absolute';
    left: '50%', top: '50%';
    font-size: 30px;
  }
`;

export const CardIconButton = styled(IconButton)`
  .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    :active {
      background-color: #09425a;
    }
  }
  .favorite-icon {
    font-size: 32px !important;
    color:#09425a;
  }

  @media only screen and (max-width: 767px) {
    .share-icon, .calendar-icon, .heart-icon{
      height:23px;
      width: 23px;
    }

    .favorite-icon {
      font-size: 23px;
    }
  }

`;

export const TagsWrapper = styled.div`
  width: 100%;
  // position: absolute;
  /* bottom: 2%; */
  margin-top: 23px;

  .share-main-wrapper{
    overflow:unset !important;
    position:absolute;
    margin-top:10px;
    padding:30px;
    z-index:10;
    background:transparent;
    box-shadow: none;
    width: 100%;
    display: flex;
    left: 0;
    justify-content: center;
    bottom:-65px;

    .MuiCard-root{
      padding:10px 0px;
      z-inde:10;
    }
  }

  .tags {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 32px;

    align-items: center;

    .star-rating{
      margin-top:4px;
    }



    @media(max-width: 1366px){
            justify-content: center;
    }
    @media(max-width: 1200px){
            justify-content: space-between;
    }
  }

  .tags .share-tool {
    // margin-right: 44px;

    > button {
      padding: 7px !important;
    }

    @media only screen and (max-width: 1366px) { 
      > button {
        padding: 7px !important;
      }
    }

    @media only screen and (max-width: 1200px) { 
      > button {
        padding: 5px !important;
      }
    }

    @media only screen and (max-width: 992px) { 
      > button {
        padding: 5px !important;
      }
    }

    @media only screen and (max-width: 767px) { 
      > button {
        padding: 5px !important;
      }
    }

   
  }

  @media only screen and (max-width: 480px) {
    margin-top: 11px;

    .tags {
      margin-top: 20px;
    }

    .tags .share-tool {
      margin-right: 0px;
    }
  }
`;
