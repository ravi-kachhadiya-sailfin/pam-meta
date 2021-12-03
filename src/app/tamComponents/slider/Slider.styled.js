import styled from "styled-components";
import { Slider as MuiSlider } from "@material-ui/core";
import pointer_slider from '../../shared/assets/images/pointer.svg';


export const SliderWrapper = styled(MuiSlider)`


&.tools_rating_slider_popup{
  margin-top: 50px !important;
  padding-top:0px !important;
  padding-bottom: 10px !important;

  .MuiSlider-markLabel {
    top: 10px !important;
    font-size: 16px !important;
  }

  .MuiSlider-thumb{
    width: 12px !important;
    height: 12px !important;
  } 

  @media(max-width: 992px){
    margin-top: 30px !important;

    .MuiSlider-markLabel {
      top: 10px !important;
      font-size: 14px !important;
    }

    .MuiSlider-thumb{
      width: 11px !important;
      height: 11px !important;
    } 
  }

  @media(max-width: 767px){
    margin-top: 23px !important;

    .MuiSlider-markLabel {
      top: 5px !important;
      font-size: 10px !important;
    }

    .MuiSlider-thumb{
      width: 10px !important;
      height: 10px !important;
    } 
  }
}
  && .MuiSlider-valueLabel {
    left: auto;
    font-size: 25px;
    transform: none;
   

    &.MuiSlider-valueLabel{
      @media(max-width: 767px){
        top: -25px;
      }
    }

 
    > span {
    background-image: url(${pointer_slider});
    width: 29px;
    height: 51px;
    display: flex;
    transform: unset;
    align-items: center;
    border-radius: 0;
    justify-content: center;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    top: -8px;






    span {
        color: #fff;
        transform: translateY(-4px);
        font-size: 25px;
        font-weight: 700;

        @media(max-width:767px){
          font-size: 20px;
          transform: translateY(-5px);
        }
      }

      @media(max-width:767px){
        width: 19px;
          height: 40px;
          top: 0px;
      }
    }
  }

  
 
  &&.MuiSlider-marked{
    @media(max-width: 767px){
      margin-bottom: 10px;
    }
  }

  &.margin-top{
    &&.MuiSlider-marked{
      @media(max-width: 992px){
        margin-bottom: 10px !important;
      }

      @media(max-width: 767px){
        margin-bottom: 0px !important;
      }
    }
  }
  ${"" /* && .PrivateValueLabel-label-* {
    font-size: 22px;
    transform: none;
    font-weight: 600;
  }
  && .PrivateValueLabel-circle-* {
    transform: none;
    height: 40px;
    width: 25px;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  } */
  }
  && .MuiSlider-markLabel {
       font-size: 16px;
      font-weight: 700;
      color: #09425A;
      
    @media(max-width: 767px){
      top: 24px;
    }

  }

  .MuiSlider-rail{
        height: 1px;
        color: #A9BDC5;
  }
  .MuiSlider-mark{
    display: none;
  }
 
  }
  //  .PrivateValueLabel-circle-40{
  //   background-image: url(${pointer_slider});
  //   width: 29px;
  //   height: 51px;   
  //   display: flex;
  //   transform: unset;
  //   align-items: center;
  //   border-radius: 0;
  //   justify-content: center;
  //   background-color: transparent;
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   position: relative;
  //   top: -8px;

  //   @media(max-width:767px){
  //     width: 25px;
  //   height: 40px;
  //   }



`;
