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
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15) !important;
  background-color: #ffffff !important;
  border-radius: 30px !important;
  ${'' /* position: relative; */}
  ${'' /* height: 100%; */}
  width: 100px
  max-width: 207px !important;
  ${'' /* min-height: 960px; */}
  /* min-height: 640px; */


  &.last_tool_activity{
    @media(max-width: 992px){
      border-radius: 20px !important;
    }
    .card-content{
      padding: 18px 35px 35px 35px;

        @media(max-width: 1200px){
          padding:18px 25px 25px 25px;
        }
        @media(max-width: 992px){
          padding: 10px 15px;
        }

    }
    .tool-description{
      min-height: 90px;


      @media(max-width: 767px){
        min-height: auto !important;
      }
    }
    .toolsTime{
      img{
        max-height: 285px;

        @media(max-width: 767px){
          max-height: 131px;
        }
      }
    }
    .tags{
      margin-top: 58px;
      
      @media(max-width: 1366px){
         margin-top: 00px;
      }
      @media(max-width: 1200px){
         margin-top: 20px;
      }
      @media(max-width: 992px){
         margin-top: 38px;
      }
      @media(max-width: 992px){
         margin-top: 0px;
      }

      .share-tool{
        margin-left: -6px;

        img{
          width:31px;
          height:31px;


          @media(max-width: 767px){
            width: 23px;
            height: 23px;
          }
        }
        i{
          font-size: 31px;

          @media(max-width: 767px){
            font-size: 23px;
          }
        }
      }
    }
  }

  .toolsTime {
    position: relative;
    max-height: 285px;

    > img {
      width: 100%;
      min-height: 285px;

      @media only screen and (max-width: 480px) {
        max-height: 131px;
        min-height: 131px;
      }
    }

    @media only screen and (max-width: 480px) {
      border-radius: 20px !important;
    }
  }

  .toolsCardTitle {
    background-color: rgba(9, 66, 90, 0.56);
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
      max-width:90px;
      min-width: auto;
      height: 25px;
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
    ${'' /* margin-left: 25%; */}
  }

  .card-content {
    padding: 25px 25px 47px 25px;
  }

  .tool-description {
    ${'' /* min-height: 260px; */}
  }

  .tool-speciality {
    min-height: 120px;
  }

  @media only screen and (max-width: 480px) {
    max-width: 100%;

    .tool-description {
      min-height: 145px;
    }

    .tool-speciality {
      min-height: 0;
    }

    .card-content {
      padding: 17px 11px 24px 17px;
    }

    .toolsTime {
      max-height: 131px;
    }



    .timeFont {
      font-size: 12px;
      line-height: 1.67;
      margin-left: 14%;
    }
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
  margin-right: 10px;
  margin-left: 10px;
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
  overflow: hidden;
  max-height: 8.44em;
  line-height: 1.69em;
  text-align: left;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    max-height: 6.5em;
    line-height: 1.31em;
    margin-top: 11px;
  }
`;

export const CardTitle = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: left;
  margin: 0px 0 13px 0;
  color: #09425A;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 1.05;
    margin: 0 0 0px 0;
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
  margin-bottom: 8px;
  color: #0099ba;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 1.57;
    margin-bottom: 0px;
  }
`;

export const CardSubTitleSubScript = styled.p`
  min-height: auto;
  color: #09425a;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  margin: 0;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.35;
  max-height: 2.7em;

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
  font-size: 21px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  /* text-align: center; */
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
    height: 1.5em !important;
    width: 1.5em !important;
    position: 'absolute';
    left: '50%', top: '50%';
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
    font-size: 32px !important;;
    color: #09425a;
  }

  @media only screen and (max-width: 767px){
    .favorite-icon {
      font-size: 1.5em !important;;
    }
  }
`;

export const TagsWrapper = styled.div`
  width: 90%;
  ${'' /* position: absolute; */}
  /* bottom: 2%; */
  margin-top: 23px;

  .tags {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  .tags .share-tool {
    margin-right: 44px;

    > button {
      padding: 6px !important;
    }

    @media only screen and (max-width: 480px) { 
      > button {
        padding: 6px !important;
      }
    }

  }

  @media only screen and (max-width: 480px) {
    margin-top: 0px;

    .tags {
      margin-top: 20px;
    }

    .tags .share-tool {
      margin-right: 0px;
    }
  }
`;
