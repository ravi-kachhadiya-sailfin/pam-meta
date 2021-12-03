import { Box } from '@material-ui/core';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

export const CarouselWrapper = styled(Carousel)`

  overflow: inherit !important;

  .custom-nav-btn{
    right: -7px;
  }
  .custom-nav-wrappper{
    @media(max-width: 992px){
      top: 50% !important;
      transform: translateY(-50%);
    }
  }
  >div {


    > button{
      @media(max-width: 992px){
        width: 8px !important;
        height: 8px !important;
        margin-left: 10px !important;
      }
    }
    :last-child{
      @media(max-width: 992px){
        margin-top: 25px;
      }
    }
    
    @media(max-width: 767px){
      margin-top: 0px;
    }

    
    :last-child {
      text-align: ${(props) => props.textAlign + "!important"};
      > button {
        
       
        :first-child {
          margin-left:0px !important;
        }
      }
    }
  }


  .custom-nav-wrappper:hover {
    opacity: 1 !important;

    .MuiButtonBase-root.custom-nav-btn {
      opacity: 1 !important;
      filter: brightness(100%);
    }
  }

  .MuiButtonBase-root.custom-nav-btn:hover {
    opacity: 1 !important;
    filter: brightness(100%);
  }


  

    @media(max-width: 992px){


      >div:nth-child(2) {
            // background-color: red;
            right: -15px;
      }
      >div:nth-child(3) {
        // background-color: red;
        left: -19px;
      }


      >div {
        >div{
          >div{
                margin-left: -15px;
                margin-right: -15px;
              }
          }
      }
  }

  @media(min-width: 1200px){

      >div:nth-child(2) {
        // background-color: red;
        right: -60px;
      }
      >div:nth-child(3) {
        // background-color: red;
        left: -50px;
      }

      >div {
        >div{
          >div{
                margin-left: -45px;
                margin-right: -45px;
              }
          }
      }
  }

  @media(max-width: 1600px){

    >div:nth-child(2) {
      // background-color: red;
      right: -22px;
    }
    >div:nth-child(3) {
      // background-color: red;
      left: -21px;
    }
  }
  @media(max-width: 1366px){

    >div:nth-child(2) {
      // background-color: red;
      right: -60px;
    }
    >div:nth-child(3) {
      // background-color: red;
      left: -50px;
    }
  }
  @media(max-width: 1200px){

    >div:nth-child(2) {
      // background-color: red;
      right: -22px;
    }
    >div:nth-child(3) {
      // background-color: red;
      left: -21px;
    }
  }
`;

export const NextIconWrapper = styled.a`
  float: right;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #a9bdc5;
`;

export const PrevIconWrapper = styled.a`
  float: left;
  margin-left: -20px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #a9bdc5;
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  flex-direction: row;



  &.slider_wrapper{
    margin-left: -30px;
    margin-right: -30px;


    @media(max-width: 1200px){
      margin-left: -15px;
      margin-right: -15px;
    }
  }
`;

export const TestimonialDescription = styled.div`
  color: #09425a;
  font-size: 10px;
  min-height: 110px;
  margin: 0;
  min-height: 62px;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 9em;
  line-height: 1.8em;
`;

export const TestimonialWrapper = styled(Box)`
  /* padding: 30px 30px 30px 180px; */
  height: 100%;
  margin: 0 15px 0 15px;
  overflow: hidden;
  position: relative;
  
  
`;
export const indicatorIconButtonProps = styled(Box)`
  /* padding: 30px 30px 30px 180px; */
  height: 100%;
  margin: 0 15px 0 15px;
  overflow: hidden;
  position: relative;

`;
