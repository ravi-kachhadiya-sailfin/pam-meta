import { Box, IconButton, Modal, Stepper, TextField, TextareaAutosize } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const ToolsBody = styled(Box)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  padding: 35px 90px 20px 110px;
  width: 100%;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;







  

  @media only screen and (max-device-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 35px 40px 20px 40px;
  }
`;

export const ToolDataWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;


export const NextIconWrapper = styled.a`
float: right;
margin-right:-33px;
margin-top:250px;
padding:0 2px 0 0;
cursor: pointer;
position: sticky;
top: 50px;
z-index:9;
width:40px;
height:40px;
background-color:transparent;

  @media(max-width:1200px){
    // margin-right:-10px;
    z-index:9
  }
  @media(max-width:1024px){
    margin-right:-10px;
    z-index:9;
    width:20px;
    height:20px;
  }
  @media(max-width: 767px){
    width:0px;
    height:30px;
  }

  .next-arrrow {
    position: absolute;
    width: 40px;
    right: -20px;
    height: 40px;

    @media(max-width:1200px){
      right: 10px;
    }

    @media(max-width:1024px){
      width: 30px;
      padding: 5px;
      height: 30px;
      right:-7px;
      top:-5px;
    }
    @media(max-width:767px){
      top:0px;
    }
    
  }

`;

export const PrevIconWrapper = styled.a`
float: left;
margin-left: -33px;
margin-top:250px;
padding:0 0 0 2px;
cursor: pointer;
 position: sticky;
top: 50px;
z-index:9;
width:40px;
height:40px;
background-color:transparent;


@media(max-width: 1200px){
  // margin-left:-10px;
}
@media(max-width:1024px){
  margin-left:-10px;
  z-index:9;
  width:20px;
  height:20px;
}
@media(max-width: 767px){
  width:0px;
  height:30px;
}



.pre-arrrow {
  position: absolute;
  width: 40px;
  left: -20px;
  height: 40px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  transform-origin: center;

  @media(max-width:1200px){
    left:10px
  }
  @media(max-width:1024px){
    width: 30px;
    padding: 5px;
    height: 30px;
    left:-7px;
    top:-5px;
  }
  @media(max-width:767px){
    top:0px;
  }
}
  
`;

export const ProblemSolvingPopup = styled.div`

 &.popup_card{
  text-align: center;
  padding: 45px


} 

&.popup_text_input{
  text-align: left; 
}

.step_checkbox_button{
  margin-top: 55px;
  &.step_checkbox_button_wrapper{
    max-height: 40vh; 
    overflow: auto;

    @media(max-height: 768px){
      max-height: 30vh; 
    }
    @media(max-height: 560px){
      max-height: 20vh; 
    }
    
  }


  @media(max-width: 1366px){
    margin-top: 50px;
  }
  @media(max-width: 1200px){
    margin-top: 40px;
  }
  @media(max-width: 992px){
    margin-top: 35px;
  }
  @media(max-width: 767px){
    margin-top: 30px;
  }

  button{
    height: 78px;
    margin-bottom: 15px;

    @media(max-width: 1366px){
      height: 70px;
    }
    @media(max-width: 1200px){
      height: 60px;
    }
    @media(max-width: 992px){
      height: 50px;
    }
    @media(max-width: 767px){
      height: 40px;
    }
    span{
      font-size: 21px;
      
      @media(max-width: 1366px){
          font-size: 20px;
          line-height: 20px;
      }
      @media(max-width: 1200px){
          font-size: 18px;
          line-height: 18px;
      }
      @media(max-width: 992px){
          font-size: 16px;
          line-height: 16px;
      }
      @media(max-width: 767px){
          font-size: 14px;
          line-height: 16px;
      }
     
    }
  }
}
.popup_text_2{
  font-size:30px;
  line-height:30px;
  color:#09425A;
  margin-bottom:20px;
  text-align:left;
  display:block;
  margin-top:31px;


  @media(max-width:1366px){
    font-sizE:27px;
    line-height:27px;
    margin-bottom:15px;
    margin-top:27px;
  }

  @media(max-width:1200px){
    font-sizE:25px;
    line-height:25px;
    margin-bottom:15px;
    margin-top:25px;
  }
  @media(max-width:992px){
    font-sizE:23px;
    line-height:23px;
    margin-bottom:15px;
    margin-top:23px;
  }
  @media(max-width:767px){
    font-sizE:20px;
    line-height:20px;
    margin-top:20px;
    margin-bottom:10px;
  }
}
.fill-input-3{
  width:100%;
  font-size:25px;
  line-height:27px;
  min-height:100px;
  border-radius:34px;
  padding:15px 30px;
  margin-top:24px;
  resize:vertical;

  @media(max-width:1366px){
    font-size:23px;
    line-height:25px;
    min-height:98px;
  }
  @media(max-width:1200px){
    font-size:20px;
    line-height:21px;
    min-height:95px;
  }
  @media(max-width:992px){
    font-size:17px;
    line-height:19px;
    min-height:93px;
  }
  @media(max-width:767px){
    font-size:14px;
    line-height:18px;
    min-height:90px;
    padding:13px 20px;
    border-radius:15px
  }

  &:focus-visible {
    outline: #0099ba auto 1px;
  }
}
.popup_text
  {
    font-size: 33px;
    font-family: 'Source Sans Pro';
    font-weight: 700;
    color: #09425A;
    width: 70%; 
    margin: 0 auto;
    text-align: center;
    line-height:40px;

    &.it-sound{
      text-align:left;
      display:block;
      width:100%;

    }
    
  }
   & .popup_text_btn
   {
     &.would_you_like_button{
       @media(max-width:992px){
         display:block
       }
       .popup_btn{
         min-width:210px;
         max-width:100%;

         @media(max-width:992px){
            margin-left:0 !important;
         }
         &.popup_btn_yes{
           @media(max-width:992px){
            margin-top:15px;
          }
         }
       }
     }
     display:flex;
     margin-top: 50px;
     justify-content: center;

     &.popup_btn_width{
        display:block;
        text-align:left;

        .popup_btn_yes{
          max-width:480px;
          margin-left:0;

          @media(max-width:1366px){
            max-width:400px;
          }
          @media(max-width:1200px){
            max-width:350px;
          }
          @media(max-width:992px){
            max-width:300px;
          }
          @media(max-width:767px){
            max-width:100%;
          }
        }
     }
     &.popup_width_btn_2{
      .popup_btn_yes{
        margin-left:0;
        max-width:330px;

        @media(max-width:767px){
          max-width:100%;
        }
      }
     }
   }   
  .popup_btn
  {
    background-color: #09425A; 
    color: #fff;
    cursor: pointer;
    font-size:25px;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    height: 70px;
    max-width:209px;
    width: 100%; 
    text-align: center;
    line-height: 0px;
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

  } 
  .radio-space{
    margin:20px 0 20px 0;

    @media(max-width:1366px){
      margin:18px 0 18px 0;
    }
    @media(max-width:1366px){
      margin:15px 0 15px 0;
    }
    @media(max-width:1366px){
      margin:12px 0 12px 0;
    }

    .radio-btn{
      width:218px;

      @media(max-width:1366px){
        width:200px;
      }
      @media(max-width:1200px){
        width:170px;        
      }
      @media(max-width:992px){
        width:145px;        
      }
      @media(max-width:767px){
        width:110px;        
      }

     .MuiRadio-root {
        color: #009abb;
     }


      .MuiTypography-body1{
        font-size:25px;
        line-height:27px;
        font-weight:600;
        color:#09425A;

        @media(max-width:1366px){
          font-size:23px;
          line-height:24px;
        }
        @media(max-width:1200px){
          font-size:21px;
          line-height:23px;
        }
        @media(max-width:992px){
          font-size:19px;
          line-height:20px;
        }
        @media(max-width:767px){
          font-size:17px;
          line-height:18px;
        }
      }

      .MuiSvgIcon-root {
        width: 28px;
        height: 28px;
        font-size: 20px;
        
        @media(max-width:1366px){
          width: 25px;
          height: 25px;
          font-size: 19px;
        }
        @media(max-width:1200px){
          width: 22px;
          height: 22px;
          font-size: 17px;          
        }
        @media(max-width:992px){
          width: 20px;
          height: 20px;
          font-size: 16px;          
        }
        @media(max-width:767px){
          width: 18px;
          height: 18px;
          font-size: 15px;
        }
      }
    }
  }
  .popup_btn_yes {
    background-color: #F19840; 
    margin-left: 32px; 
  }  
  .trouble_shoot_btn_que{
    max-width: 600px !important; 

    @media(max-width: 992px){
      max-width: 100% !important; 
    }
  }
  
.great_text{
  margin-bottom:40px;
  
  @media(max-width:1200px){
    margin-bottom:30px;
  }
  
  @media(max-width:767px){
    margin-bottom:25px;
  }
}
.great_sub_text{
  font-size:25px !important;
  line-height:32px !important;
  font-weight:normal;
  width:90%;
  margin-bottom:40px;

  @media(max-width:1200px){
    width:100%;
    margin-bottom:40px;
  }
  @media(max-width:992px){
    font-size:20px !important;
    line-height:25px !important;
  }
  
  @media(max-width:767px){
    font-size:14px !important;
    line-height:18px !important;
    margin-bottom:30px;
  }
}

.problem_solving_popup_card{
  #scroll-dialog-description{
    &:focus-visible {
      outline: -webkit-focus-ring-color auto 0px !important;
      outline:none !important;      
    }
  }
}
  .trouble-shoot_btn{
    background-color: #09425A; 
    color: #fff;
    cursor: pointer;
    font-size:25px;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    max-width: 406px; 
    height: 70px;
    width: 100%;
    text-align: center;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1366px){
      max-width: 390px;
      line-height:25px;
      font-size:22px;
      height: 60px;
    }
    @media(max-width: 1200px){
      max-width: 300px; 
      font-size:20px;
      height: 50px;
    }
    @media(max-width: 992px){
      max-width: 250px;
      line-height:20px; 
      font-size:18px;
      height: 45px;
    }
    @media(max-width: 767px){
      max-width: 206px; 
      height: 40px;
      width: 100%;
      font-size:14px;      
    }
  }

 .popup_textarea
  {
    margin-top: 50px;
    @media(max-width: 1366px){
      margin-top: 45px;
      font-size:22px;
    }
    @media(max-width: 1200px){
      margin-top: 40px;
      font-size:20px;
    }
    @media(max-width: 992px){
      margin-top: 35px;
      font-size:18px;
    }
    @media(max-width: 767px){
      margin-top: 20px;
      font-size:14px;
      
    }
  }
  @media(max-width: 1366px)
  {
    &.popup_card{
     
      padding: 40px;
    } 
    .popup_text
    {
      font-size: 30px;
      line-height:32px;
      
    }
    & .popup_text_btn
    {
      margin-top: 45px;
    } 
    .popup_btn
    {
     font-size:22px;
      max-width:190px;
      height: 60px;
      border-radius: 30px;
     }
  }
  @media(max-width: 1200px)
  {
    &.popup_card{
     
      padding: 35px;
    } 
    .popup_text
    {
      font-size: 26px;
    }
    & .popup_text_btn
    {
      margin-top: 40px;
    } 
    .popup_btn
    {
      font-size:20px;
      max-width:180px;
      height: 50px;
      border-radius:28px;
    }
  }
  @media(max-width: 992px)
  {
    &.popup_card{
     
      padding: 30px;
    } 
    .popup_text
    {
      font-size: 22px;
      line-height:20px;
      
    }
    & .popup_text_btn
    {
      margin-top: 35px;
    } 
     .popup_btn
    {
      border-radius:39px;
      font-size:18px;
      max-width:150px;
      height:40px
    }
    .popup_btn_yes
    {
      margin-left:15px;
   }
  }
  @media(max-width: 767px)
  {
    &.popup_card{
     padding: 25px;
    } 
    .popup_text
    {
      font-size: 18px;
    }
    & .popup_text_btn
    {
      margin-top: 20px;
     
    } 
    .popup_btn
    {
      border-radius:39px;
      font-size:14px;
      max-width:120px;
    }
    .popup_btn_yes
    {
      margin-left:15px;
     
    }
    
  }

`;

export const StepShower = styled.div`
  padding: 0px 3px;
  display:flex;

  > div {
    margin: 2px;
    // background: #ffe5e5;
    width : ${(props) => (100 / props.steps).toFixed(2).toString() + "%"}
  }

  .step-number{
    padding-right: 1px;
    font-size: 25px;
    line-height: 32px;
    text-align: right;
    color: #0099BA;
    text-transform: uppercase;
    font-weight: 700;
  }

  @media (max-width: 1366px) {
    .step-number{
      padding-right: 1px;
      font-size: 22px;
      line-height: 25px;
    }
  }
  @media (max-width: 1200px) {
    .step-number{
      padding-right: 1px;
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media (max-width: 992px) {
    .step-number{
      padding-right: 2px;
      font-size: 18px;
      line-height: 15px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 767px) {
    .step-number{
      padding-right: 1px;
      font-size: 12px;
      line-height: 9px;
      margin-bottom: 3px;
    }
  }
`;

export const StepContainer = styled.div`
  @media (max-width: 767px){
    margin: 0px -12px;
  }
`;

export const ToolPageTitle = styled(Box)`
  color: #0099ba;
  margin-bottom: 30px;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
`;

export const SubText = styled(Box)`
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  margin-top: -15px;
  color: #a9bdc5;
  line-height: 1.6;
`;

export const ToolDescription = styled(Box)`
  color: #09425a;
  max-width: 89ch;
  font-family: 'Source Sans Pro';
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  /* display: inline-block; */
  margin-top: 15px;
`;

export const MediaWrapper = styled(Box)`
  object-fit: cover;
  object-position: center;
  margin: 23px 0 15px 0;

  @media only screen and (max-device-width: 768px) {
    > img {
      width: 100vw;
      margin-left: -20px;
    }
  }
`;

export const ToolDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .tags {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .tags-details-first {
    margin-top: 4px;
    margin-right: 15px;
    @media(max-width: 767px){
      margin-right: 0px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    > div {
      margin-bottom: 15px;
    }

    .tags {
      justify-content: space-between;
    }
  }
`;

export const ToolSpecialityTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #0099ba;
  font-family: 'Source Sans Pro';
`;

export const ToolSpeciality = styled(Box)`
  font-size: 25px;
  font-weight: normal;
  color: #09425a;
  font-family: 'Source Sans Pro';
  max-width: 95%;

  @media only screen and (max-device-width: 768px) {
    max-width: 100%;
  }
`;

export const TagsWrapper = styled(Box)`
  width: 100%;
  font-size: 20px
  font-weight: bold;
  color: #a9bdc5;
  font-family: 'Source Sans Pro';
`;

export const CardTagTitle = styled(Box)`
  color: #a9bdc5;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1.5px;
`;

export const CardTags = styled.span`
  color: #09425a;
  font-size: 21px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
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
  padding: 6px !important;
  .MuiSvgIcon-root {
    height: 1.5em !important;
    width: 1.5em !important;
    :active {
      background-color: #09425a;
    }
  }
  .favorite-icon {
    font-size: 28px;
    color: #0099ba;
  }
`;

export const ExploreToolsWrappers = styled(Box)`
  text-align: right;
  > button {
    border-radius: 40px;
    max-width: 20%;
    font-family: 'Source Sans Pro';
    text-transform: unset;
  }

  @media (max-width: 1000px) {
    text-align: center;

    > button {
      max-width: 50%;
    }
  }

  @media only screen and (max-device-width: 768px) {
    > button {
      max-width: 100%;
    }
  }
`;

export const ModalWrapper = styled(Modal)`
  margin: 0px auto;
`;

export const BoardTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #09425A;
  font-family: 'Source Sans Pro';
`;

export const BoardSubTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #09425A;
  font-family: 'Source Sans Pro';
`;

export const BoardText = styled(Box)`
  font-size: 18px;
  color: ${(props) => props.color ? props.color : "#09425A"};
  font-family: 'Source Sans Pro';
  fontWeight: ${(props) => props.fontWeight ? props.fontWeight + ' !important' : 700 + ' !important'}
`;

export const StepperWrapper = styled(Stepper)`
  padding: 0px !important;

  > .MuiStep-horizontal {
    padding-left: 0px;
    padding-right: 5px;
  }
`;

export const ToolTipTitle = styled.div`
  font-size:20px;
  margin-bottom: 0px;
  color:#007C91;
  font-weight: 700;

  &.gray-color{
    color: #A9BDC5 !important;;
  }

  &.blue-color{
    color: #0099BA !important;
  }

  &.mt{
    margin-top:17px;
  }

  @media(max-width: 767px){
    font-size:16px;
  }
`;

export const ToolTipEffect = styled.div`
  background: #A9BDC5;
  font-size: 16px;
  color:#FFFFFF;
  line-height: 18px;
  padding: 12px 14px;
  border-radius: 20px;
  margin-top: 6px;

  &.blue-bg{
    background: #0099BA !important;;
  }

  @media(max-width: 767px){
    font-size:12px;
  }
`;

export const StepperDetails = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #a9bdc5;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
`;




export const FtTextField = styled(TextField)`
  .add_input_wrapper{
    display: unset;
    width: 100%;
  }




  &.exm_step_four_add_input_wrapper{
    display: unset;
    textarea{
      height: 70px;
      border-radius: 24px;
      margin-bottom: 20px;

      @media(max-width: 1366px){
        height: 60px;
        border-radius: 22px;
        padding: 0px 25px;
        font-size: 18px;
        margin-bottom: 18px;
      }
      @media(max-width: 992px){
        padding: 0px 15px;
        margin-bottom: 16px;
        height: 50px;
        border-radius: 20px;
      }
      @media(max-width: 767px){
        height: 40px;
        font-size: 15px;
        border-radius: 15px;
      }
    }
  }
  &.exm_step_six_add_input_wrapper{
    display: unset;
    input{
      height: 88px;
      border-radius: 24px;
      margin-bottom: 10px;
      margin-right: 10px;

      @media(max-width: 1366px){
        height: 70px;
        border-radius: 22px;
        padding: 0px 25px;
        font-size: 18px;
        margin-bottom: 18px;
      }
      @media(max-width: 992px){
        padding: 0px 15px;
        margin-bottom: 16px;
        height: 60px;
        border-radius: 20px;
      }
      @media(max-width: 767px){
        height: 50px;
        font-size: 15px;
        border-radius: 15px;
      }
    }
  }
  .MuiInputBase-root {
    width: 100% !important;
    border-bottom: none !important;
  }

  .MuiInputLabel-formControl {
  }
  .MuiTextField-root {
    width: 100% !important
  }
  .MuiFormControl-root{
    width:100% !important
  }
  .MuiInput-underline:before{
    display:none !important
  }
  .MuiInput-underline:after{
    display:none !important
  }
  .MuiFormLabel-root {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px !important;
    font-weight: bold !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #09425a;
    width: 100% !important;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #09425a;
  }

  .MuiFormHelperText-root {
    margin-top: 6px;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #a9bdc5;
  }

  .MuiFormHelperText-root.Mui-error {
    color: #f19840;
  }

  .MuiFormLabel-root.Mui-error {
    color: #f19840;
  }

  input {
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 37px;
    background-color: #eff3f4;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    margin-bottom: 20px;
    border: solid 1px transparent;
    padding: 0px 30px;

    @media(max-width: 1366px){
      height: 50px;
      padding: 0px 25px;
      font-size: 18px;
      margin-bottom: 18px;
    }
    @media(max-width: 992px){
      padding: 0px 15px;
      margin-bottom: 16px;
    }
    @media(max-width: 767px){
      height: 42px;
      font-size: 15px;
    }

    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
  }
`;
export const FtTextArea = styled(TextareaAutosize)`
    padding: 10px;
    border-radius: 16.7px;
    background-color: #eff3f4;
    font-family: 'Source Sans Pro',sans-serif;
    font-size: 25px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    margin-top: 6px;
    border: solid 1px transparent; 
    resize: vertical;
    outline: none;

    &.exm_step_six_add_input_wrapper{
      min-height: 88px;
      border-radius: 24px;
      margin-bottom: 10px;
      margin-right: 00px;
      width: calc(100% - 10px);
      resize: none;
      padding: 25px 20px;
      :focus{
        outline: none;
      }

      @media(max-width: 1366px){
        min-height: 70px;
        border-radius: 22px;
        padding: 20px 25px;
        font-size: 18px;
        margin-bottom: 18px;
      }
      @media(max-width: 992px){
        padding: 20px 15px;
        margin-bottom: 16px;
        height: 60px;
        border-radius: 20px;
        width: 100%;
      }
      @media(max-width: 767px){
        min-height: 40px;
        font-size: 15px;
        border-radius: 15px;
        padding: 8px 15px;
      }
    }


    &:hover,
    :focus {
      border: solid 1px #0099ba;
    }
 


`;
