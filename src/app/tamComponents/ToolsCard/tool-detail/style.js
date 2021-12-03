import { Box, IconButton, Modal } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';

export const ToolsBody = styled(Box)`
  margin: 0px auto;
  padding-top: 100px;
  padding-bottom: 193px;
  width: 100%;
  background: #eff3f4;
  font-size: 14px;
  font-size-adjust: none;
  font-kerning: auto;

  .flexible_home_image_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:50px;


    .situations-sub-title{

      cursor:pointer;
      color: #0099ba;
      font-size: 25px;
      line-height: 32px;
      margin-top:30px;
      font-weight:400;
      text-align: center;

      @media(max-width: 1366px){
        font-size: 22px;
        margin-top: 27px;
      }
      @media(max-width: 1200px){
        font-size: 20px;
        margin-top: 22px;
      }
      @media(max-width: 992px){
        font-size:  18px;
        margin-top: 18px;
      }
      @media(max-width: 767px){
        font-size:  14px;
        margin-top: 15px;
      }
    }
    .situations-sub-title:hover{
      text-decoration: underline;
      color: #0099ba;
     }

     .situations-user{
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
  
    }

    .flexible_home_text_wrapper{
      text-align: center;
       width:50%;
       @media(max-width:767px)
       {
         width:100%;
       }
      .flexible_link_text{
        padding-top: 30px;
        
        @media(max-width: 1366px){
          padding-top: 27px;
        }
        @media(max-width: 1200px){
          padding-top: 22px;
        }
        @media(max-width: 992px){
          padding-top: 18px;
        }
        @media(max-width: 767px){
          padding-top: 15px;
        }

      }

      .situations-sub-user{
        img{
          cursor:pointer;
          height: 400px;
          width: auto;
          @media(max-width: 1366px){
            height: 300px;
          }
          @media(max-width: 1200px){
            height: 270px;
          }
          @media(max-width: 992px){
            height: 220px;
          }
          @media(max-width: 767px){
            height: auto;
            width:100%;
            max-width:250px;
            margin-top: 30px;
          }
        }
      }
      
      .situations-moment-title{
        font-size: 35px;
        font-weight: 700;
        color: #09425A;
        line-height: 40px;
        margin-top: 0px;
        @media(max-width:1366px)
        {
          font-size:30px;
          line-height:35px;
        }
        @media(max-width:1200px)
        {
          font-size:25px;
          line-height:30px;
        }
        @media(max-width:992px)
        {
          font-size:20px;
          line-height:25px;
        }
        @media(max-width:767px)
        {
          font-size:15px;
          line-height:20px;
        }
      }

      .situations-sub-moment
      {
        font-size: 25px;
        line-height: 32px;
        font-weight: 400;
        color:#0099BA;
        margin-top: 0px;

        @media(max-width:1366px)
        {
          font-size: 22px;
          line-height: 32px;
        }
        @media(max-width:1200px)
        {
          font-size:20px;
          line-height: 25px;
        }
        @media(max-width:992px)
        {
          font-size:18px;
        }
        @media(max-width:767px)
        {
          font-size:14px;
        }
      }
      .situations-sub-moment:hover{
        text-decoration: underline;
        color: #0099ba;
        cursor: pointer;
      }
     
    }

   @media(max-width: 1366px){
      margin-top:40px;
    }
    @media(max-width: 1200px){
      margin-top:30px;
    }
    @media(max-width: 992px){
      margin-top:20px;
    }
    @media(max-width: 767px){
      flex-direction: column;
    }
  }
 
// card-border

 .situations-card{
     border-radius:30px;
     padding:50px;
     box-shadow: 0px 20px 60px 0 rgb(59 73 81 / 10%);

     @media(max-width: 1366px){
      padding:40px;
     }
     @media(max-width: 1200px){
      padding: 35px;
    }
    @media(max-width: 992px){
      padding: 30px;
    }
    @media(max-width: 767px){
      padding: 15px 15px 25px 15px;
      border-radius:20px;
    }

  }
}

// gloria-card
.home-card{
  display: flex;
  justify-content: center;

  @media(max-width:1366px){
   min-height: 550px !important;
  }
  @media(max-width:1200px){
    min-height: 500px !important;
  }
  @media(max-width:992px){
    min-height: 474px !important;
  }
  @media(max-width:767px){
    min-height: 350px !important;
  }
}


.gloria-card{
  border-radius:30px;
  padding: 10px 50px 50px 50px;
  min-height: 673px;
  position: relative;
  box-shadow: 0px 20px 60px 0 rgb(59 73 81 / 10%);

  overflow: visible;
 
  .arrow_main_wrapper_prev{
    position: absolute;
    left: -50px;
    top: 250px;
    width: 45px;
    height: 45px;
    // background-color: rebeccapurple;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .arrow_sticky{
    top:20px !important;
  } 
  .arrow_sticky_next{
    top:20px !important; 
  } 

  .gloria-link{
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 5px;
    @media(max-width: 1366px){
      font-size: 23px;
      line-height: 30px;
    }
    @media(max-width: 1200px){
      font-size: 20px;
      line-height: 25px;
    }
    @media(max-width: 992px){
      font-size: 18px;
      line-height: 23px;
    }
    @media(max-width: 767px){
      font-size: 14px;
      line-height: 18px;
    }
    & .gloria-link-click
    {
      color:#0099ba;
      cursor: pointer;
      :hover
      {
        text-decoration: underline;
        color:#0099ba;
      }
    }
  }
  .gloria-step-ul{
    padding-left: 0px;
    list-style: none;
    font-size: 25px;
    line-height: 30px;
   &.gloria-step-ul-two{
    @media(max-width: 767px){
        margin-bottom: 34px;
     }
    
   }
   >li{
      position: relative;
      padding-left: 58px;
      font-weight: 700;
      color: #0099ba;
      word-break: break-word;
      margin-bottom: 24px;
     
      
       ::before{
            content: "";
            position: absolute;
            left: 0px;
            top: 8px;
            width: 18px;
            height: 18px;
            background-color: #0099ba;
            border-radius: 10px;
            @media(max-width: 1366px){
           
              width: 16px;
              height: 16px;

            }
            @media(max-width: 1200px){
              width: 14px;
              height: 14px;
           
            
            }
            @media(max-width: 1200px){
              width: 12px;
              height: 12px;
              top:5px;
            }
            @media(max-width: 992px){
              width: 10px;
              height: 10px;
            }
          }



          @media(max-width: 1366px){
           
            padding-left: 48px;
            margin-bottom: 23px;
          }
          @media(max-width: 1200px){
        
            padding-left: 38px;
            margin-bottom: 22px;
          }
          @media(max-width: 992px){
          
            padding-left: 28px;
            margin-bottom: 21px;
          }
          @media(max-width: 767px){
            padding-left: 20px;
            margin-bottom: 20px;
          }
        
    }
    
    @media(max-width: 1366px){
      font-size: 23px;
      line-height: 28px;
      margin-bottom: 28px;
    }
    @media(max-width: 1200px){
      font-size: 21px;
      line-height: 25px;
      margin-bottom: 25px;
    }
    @media(max-width: 992px){
     
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 20px;
    }
    @media(max-width: 767px)
    {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 15px;
    }

  }
  
  .problem_step{
    margin-bottom: 40px;
    @media(max-width: 767px){
      margin-bottom: 25px;
    }
    .MuiStepConnector-line{
      @media(max-width: 767px){
        border-top-width: 2px;
      }
    }
  }

  .gloria-row{
   &.gloria-center-row{
    display: flex;
    align-items: center;
    justify-content: center;
    height:auto;
    @media(max-width: 1366px){
      margin-top:40px
    }
    @media(max-width: 1200px){
      margin-top: 30px;
     }
     @media(max-width: 992px){
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
     }
     @media(max-width: 767px){
      margin-top:0px;
     }
    }
    @media(max-width: 992px){
     display:flex;
     flex-flow: column;
    }
  }

  .gloria-text{
  &.gloria-text-two{
    @media(max-width: 992px){
      order: 1;
      margin-top: 0px;
     }
    }
    @media(max-width: 992px){
      order: 2;
      margin-top: 25px;
    }
    @media(max-width: 767px){
     
      margin-top: 16px;
    }
   
  }

  .gloria-img{
    text-align: right;
    // display: flex;
    // align-items: end;
    // justify-content: end;
    // display:-webkit-flex;
    // display: -webkit-box; 
   
  &.gloria-img-two{
    @media(max-width: 992px){
    order:2;
    }
  }
    @media(max-width: 992px){
     order:1;
     text-align:center;
     display: unset;
     align-items: unset;
     justify-content: unset;
    }
    @media(max-width: 767px){
      text-align:center;
    }
  }



 .gloria-text-title{
   font-size: 33px;
   line-height: 42px;
   font-weight: 700;
   margin-bottom: 26px;
   &.mb-4{
    margin-bottom: 4px !important;
   }
   &.jose-text-title-step-three
   {
    margin: 37px 0px 37px 0px;
    @media(max-width: 1366px){
      margin: 27px 0px 27px 0px;
    }
    @media(max-width:1200px)
    {
      margin: 27px 0px 22px 0px;
    }
    @media(max-width:992px){
      margin: 27px 0px 18px 0px;
    }
    @media(max-width:767px){
      margin: 21px 0px 15px 0px;
    }
  

   }
   &.gloria-text-title-step-one{
    @media(max-width: 767px){
      margin-bottom: 16px;
    }
   }
   &.gloria-text-title-step-second{
    @media(max-width: 767px){
      margin-bottom: 21px;
    }
   }
   &.gloria-text-title-step-four{
    margin-bottom: 38px;
    @media(max-width: 1366px){
      margin-bottom: 34px;
    }
    @media(max-width: 1200px){
      margin-bottom: 30px;
    }
    @media(max-width: 992px){
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      margin-bottom: 15px;
    }
   }
  
   &.gloria-text-title-seven{
    margin: 15px 0px 48px 0px;
    font-size: 30px;
    line-height: 32px;
    @media(max-width: 1366px){
      margin: 40px 0px 40px 0px;
      font-size: 27px;
      line-height: 30px;
    }
    @media(max-width: 1200px){
      margin: 30px 0px 30px 0px;
      font-size: 25px;
      line-height: 29px;
    }
    @media(max-width: 992px){
      margin: 20px 0px 20px 0px;
      font-size: 20px;
      line-height: 25px;
    }
    @media(max-width: 767px){
      margin: 17px 0px 16px 0px;
      font-size:18px;
      line-height: 25px;
    }
    
   }
   &.gloria-text-title-three{
    margin-bottom: 51px;
    @media(max-width: 1366px){
      margin-bottom: 41px;
    }
    @media(max-width: 1200px){
      margin-bottom: 31px;
    }
    @media(max-width: 992px){
      margin-bottom: 21px;
    }
    @media(max-width: 767px){
      margin-bottom: 15px;
    }  
   }

   @media(max-width: 1366px){
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 24px;
   }
  @media(max-width: 1200px){
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 22px;
   }
  @media(max-width: 992px){
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 22px;
    }
  @media(max-width: 767px){
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 25px;
  
  }
  
 }


 .gloria-sub-text{
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 33px;
  color:  #0099BA; 
  &.jose-sub-text-step-four{
    margin-bottom: 49px;
    @media(max-width: 1366px){
      margin-bottom: 45px;
    }
    @media(max-width: 1200px){
      margin-bottom: 30px;
     }
    @media(max-width: 992px){
      margin-bottom: 25px;
    }
    @media(max-width: 767px){
      margin-bottom: 20px;
    }
  }
  &.gloria-sub-text-step-seven{
    margin-bottom: 0px;
  }
 

  @media(max-width: 1366px){
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 31px;
  }
  @media(max-width: 1200px){
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 28px;
  }
  @media(max-width: 1200px){
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 26px;
  }
  @media(max-width: 992px){
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 25px;
  }
  @media(max-width: 767px){
    font-size: 18px;
    line-height: 25px;  
    margin-bottom: 21px;

   
  }
}



  .gloria-sub-title-text{
    font-size: 25px;
    line-height: 32px;
    font-weight: 400;
    color:#09425A;
    margin:0px;
    &.gloria-middle-text{
      display:none;
      text-align:left;
      @media(max-width: 992px){
        display:block;
        margin-top: 28px;
      }
    }
    &.gloria-middle-text-two{
      text-align:left;
       @media(max-width: 992px){
        display:none;
      } 
    }
    &.gloria-sub-title-text-two{
      margin-bottom: 34px;
      @media(max-width: 1366px){
        margin-bottom:  30px;
      }
      @media(max-width: 1200px){
        margin-bottom:  28px;
      }
      @media(max-width: 992px){
        margin-bottom:  25px;
      }
      @media(max-width: 767px){
        margin-bottom:  21px;
      }
    }
    &.gloria-sub-title-text-four
    {
      margin-bottom: 20px;
    }
    &.gloria-sub-title-text-three
    {
      margin-bottom: 10px;
    }


    @media(max-width: 1366px){
      font-size: 23px;
      line-height: 28px;
    }
    @media(max-width: 1200px){
      font-size: 21px;
      line-height: 25px;
    }
    @media(max-width: 992px){
      font-size:  18px;
      line-height: 23px;
    }
    @media(max-width: 767px){
      font-size: 14px;
      line-height: 18px;
    }

  }
  .gloria-img  img{
    width:100%;
    height:auto;
    max-width:500px;
    &.gloria-img-two {
      max-width: unset;
      @media(max-width: 992px){
        max-width: 350px;
      }
    }
    &.gloria-img-step-seven{
      max-width: unset;
      @media(max-width: 992px){
        max-width: 350px;
      }
      @media(max-width: 767px){
        max-width: 250px;
      }
    }
    &.gloria-user
    {
      max-width:400px;
      @media(max-width: 992px){
        max-width: 325px;
      }
      @media(max-width: 767px){
        max-width: 200px;
      }
    }
    @media(max-width: 992px){
      max-width:350px;
    }
    @media(max-width: 767px){
      max-width: 220px;
    }

  }
   

  @media(max-width: 1366px){
    padding: 10px 40px 40px 40px;
    min-height: 625px;

  }
  @media(max-width: 1200px){
    padding: 10px 35px 35px 35px;
    min-height: 650px;
  }
  @media(max-width: 992px){
    padding: 10px 30px 30px 30px;
    min-height: 600px;
  }
  @media(max-width: 767px){
    padding: 10px 15px 25px 15px;
    border-radius:20px;
    min-height: 506px;
  }


// gloria-end
}
// gloria-end




.luke_button_top{
  margin-bottom: 50px;
  margin-top: 00px !important;
  

  button{
    @media(max-width: 992px){
      :first-child{
        margin-bottom: 15px !important;
      }
      margin-bottom: 10px !important;
    }
  }

  @media(max-width: 1366px){
    margin-bottom: 40px;
  }
  @media(max-width: 1200px){
    margin-bottom: 30px;
  }
  @media(max-width: 992px){
    margin-bottom: 20px;
  }
  @media(max-width: 992px){
    margin-bottom: 10px;
  }
}

  .tooltip_row{
    margin-left: -10px;
    margin-right: -10px;
  }
  .tooltip_col{
    padding-left: 10px;
    padding-right: 10px;
    .tooltip_gray{
      color: #A9BDC5 !important;
    }
    .tooltip_blue{
      color: #0099BA !important;
    }
    .tooltip_title{
      font-size: 25px;
      line-height: 27px;
      color: #007C91;
      font-weight: 700;

      @media(max-width: 1366px){
        font-size: 20px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
      }
    }
  }

  .step_six_table{
    

    th{
      border-left: 1px solid rgba(224, 224, 224, 1);
      font-size: 25px;
      line-height: 35px;
      color: #09425A;
      font-weight: 700;
      text-align: left;
      padding: 0 0 12px 22px;
      :first-child{
        border-left: none;
        padding-left: 0px;
      }



      @media(max-width: 1366px){
        font-size: 22px;
        line-height: 32px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
        line-height: 24px;
        padding: 0 0 12px 18px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 20px;
        padding: 0 0 10px 12px;
      }
      @media(max-width: 767px){
        font-size: 12px;
        line-height: 16px;
        padding: 0 0 10px 9px;
      }
    }
    tr{
      vertical-align: top;
    }

    td{
      padding:13px;
      text-align: left;
      font-size: 25px;
      line-height: 32px;
      border-bottom: none;
      color: #0099BA;
      border-left: 1px solid rgba(224, 224, 224, 1);

      &.bottom-border{
        border-bottom: 1px solid rgba(224, 224, 224, 1);
      }

      :first-child{
        border-left: none;
          padding-left: 0px;
      }
      :last-child{
          padding-right: 0px;
      }
      @media(max-width: 1366px){
        font-size: 22px;
        line-height: 32px;
        padding: 11px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
        line-height: 24px;
        padding: 9px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 20px;
        padding: 7px;
      }
      @media(max-width: 767px){
        font-size: 12px;
        line-height: 16px;
      }
      
    }
  }
  .luke_border{
    height: 1px;
    width: 100%;
    background-color: #A9BDC5;
    margin-top: 60px;
    margin-bottom: 60px;

    @media(max-width: 1366px){
      margin-top: 50px;
      margin-bottom: 50px;
    }
    @media(max-width: 1200px){
      margin-top: 40px;
      margin-bottom: 40px;
    }
    @media(max-width: 992px){
      margin-top: 15px;
      margin-bottom: 30px;
    }
    @media(max-width: 767px){
      margin-top: 10px;
      margin-bottom: 25px;
    }
  }
  .sticky-button{
    background: red;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 1550px;
    left: 50%;
    transform: translateX(-50%);
  }
  .large_btn_luke{
    @media(max-width: 992px){
      flex-direction: column !important;
    }
  }

  .flex-end{
    justify-content: flex-end;
  }
  .start_button_step{
    @media(max-width: 992px){
      flex-direction: column-reverse !important;
    }
  }
  .luke_button{
    margin-top: 35px;
    display: flex;

    .luke_inner_col{
      @media(max-width: 767px){
        margin-left: 10px;
        margin-right: 10px;
      }
    }

      @media(max-width: 1366px){
        margin-top: 40px;
      }

      @media(max-width: 1200px){
        margin-top: 30px;
      }
      @media(max-width: 992px){
        margin-top: 25px;
        flex-direction: row;
      }
      @media(max-width: 767px){
        margin-top: 19px;
        @media(max-width: 767px){
          margin-left: -10px;
          margin-right: -10px;
        }
      }
   




     button{

        @media(max-width: 992px){
          margin-bottom: 15px;

         
        }
        @media(max-width: 1366px){
          font-size: 19px !important;
          line-height: normal !important;
        }
        @media(max-width: 1200px){
          font-size: 20px !important;
          line-height: normal !important;
        }
        @media(max-width: 992px){
          font-size: 18px !important;
          line-height: normal !important;
        }
        @media(max-width: 767px){
          font-size: 14px !important;
          line-height: normal !important;
        }
      }
  }

  .problem_solving_row{
    @media(max-width: 992px){
      display: flex;
      flex-direction: column
    }
  }
  .problem_solving_img{
    @media(max-width: 992px){
     order: 1;
     text-align: center;
    }
  }
  .problem_solving_text{
    @media(max-width: 992px){
     order: 2;
     margin-top: 30px;
    }
  }
  .container {
    width: 100%;
    max-width: 1600px;

      @media(max-width: 1700px){
        max-width: 1550px;
      }
      @media(max-width: 1600px){
        max-width: 1450px;
      }
      @media(max-width: 1500px){
        max-width: 1350px;
      }
      @media(max-width: 1400px){
        max-width: 1300px;
      }
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1190px;
      }
  }
  @media(max-width: 1366px){
    padding-top: 90px;
    padding-bottom: 150px;
  }
  @media(max-width: 1200px){
    padding-top: 70px;
    padding-bottom: 100px;
  }
  @media(max-width: 992px){
    padding-top: 50px;
    padding-bottom: 70px;
  }
  @media(max-width: 767px){
    padding-top: 30px;
  }



`;

export const ToolDataWrapper = styled(Box)`
  display: flex;
  flex-direction: column;


  .probsolve_title_group{
    margin-bottom: 27px;
    @media(max-width: 1366px){
      margin-bottom: 25px;
    }
    @media(max-width: 1200px){
      margin-bottom: 20px;
    }
    @media(max-width: 992px){
      margin-bottom: 18px;
    }
    @media(max-width: 767px){
      margin-bottom: 14px;
    }
  }

  .probsolve_text_btn_group{
    margin-bottom: 60px;

    @media(max-width: 1366px){
      margin-bottom: 50px;
    }
    @media(max-width: 1200px){
      margin-bottom: 40px;
    }
    @media(max-width: 992px){
      margin-bottom: 30px;
    }
    @media(max-width: 767px){
      margin-bottom: 30px;
    }
  }
`;

export const ToolPageTitle = styled(Box)`
  color: #0099ba;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
  font-family: 'Source Sans Pro';

  &.title-margin{
    margin-top: 79px;
    margin-bottom: 35px;
  }


  @media(max-width: 1366px){
    font-size: 35px;
    line-height: 40px;
    
    &.title-margin{
      margin-top: 60px;
      margin-bottom: 30px;
    }
  }

  @media(max-width: 1200px){
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 10px;

    &.title-margin{
      margin-top: 50px;
      margin-bottom: 25px;
    }
  }

  @media(max-width: 992px){
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 5px;

    &.title-margin{
      margin-top: 42px;
      margin-bottom: 20px;
    }
  }
  @media(max-width: 767px){
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 0px;

    &.title-margin{
      margin-top: 35px;
      margin-bottom: 15px;
    }
  }
`;

export const SubText = styled(Box)`
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  // margin-bottom: 27px;
  color: #a9bdc5;
  font-family: 'Source Sans Pro';
  margin-top: 15px;



  @media(max-width: 1366px){
    font-size: 18px;
    line-height: 32px;
    // margin-bottom: 25px;
  }
  @media(max-width: 1200px){
    font-size: 16px;
    line-height: 25px;
    // margin-bottom: 20px;
    margin-top: 10px;
  }
  @media(max-width: 992px){
    font-size: 14px;
    line-height: 20px;.
    // margin-bottom: 18px;
    margin-top: 5px;
  }
  @media(max-width: 767px){
    font-size: 10px;
    line-height: 15px;
    // margin-bottom: 14px;
    margin-top: 0px;
  }
`;

export const ToolDescription = styled(Box)`
  color: #09425a;
  max-width: 100%;
  font-family: 'Source Sans Pro';
  font-size: 25px;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: left;
  /* display: inline-block; */
  // margin-bottom: 70px;

  @media(max-width: 1366px){
    font-size: 22px;
    line-height: 30px;
    // margin-bottom: 50px;
  }
  @media(max-width: 1200px){
    font-size: 20px;
    line-height: 25px;
    // margin-bottom: 40px;
  }
  @media(max-width: 992px){
    font-size: 18px;
    line-height: 20px;
    // margin-bottom: 30px;
  }
  @media(max-width: 767px){
    font-size: 12px;
    line-height: 16px;
    // margin-bottom: 22px;
  }
`;

export const MediaWrapper = styled(Box)`
  object-fit: cover;
  object-position: center;

  .sticky-btns{
    position: fixed;
    bottom: 10px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1550px;


    @media(max-width: 1366px){
      max-width: 1250px;
    }

    @media(max-width: 1200px){
      padding-right: 15px;
      padding-left: 15px;
    }
    @media(max-width: 992px){
      bottom: 00px;
      margin-right: 0px !important;
      margin-left: 0px !important;
      .luke_inner_col{
        
      }
    }
  }


  .fill-your-buckets{

    .iframe-block{
      @media(max-width:767px){
        padding: 0;
        margin-top:20px
      }
    }

    .fill-frame{
      height: 815px;

      @media(max-width: 1366px){
        height: 715px;
      }

      @media(max-width: 1200px){
        height: 615px;
      }

      @media(max-width: 992px){
        height: 515px;
      }
      @media(max-width: 768px){
        height: 390px;
      }

      @media(max-width: 390px){
        height: 185px;
      }
      @media(max-width: 320px){
        height: 163px;
      }
    }

    .fill-card-title{
      font-size: 35px;
      line-height: 40px;
      margin-bottom: 40px;
      color: #09425A;

      @media(max-width:1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 30px;
      }

      @media(max-width:1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 22px;
      }

      @media(max-width:992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 18px;
      }

      @media(max-width:767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 10px;
      }
      
      &.fill-card-title-bottop-space{
        margin-bottom:25px;
  
        @media(max-width:1366px){
          margin-bottom:23px;
        }
        @media(max-width:1200px){
          margin-bottom:21px;
        }
        @media(max-width:991px){
          margin-bottom:20px;
        }
        @media(max-width:768px){
          margin-bottom:18px;
        }
      }

    }

    .fill-collapse {
      box-shadow: none;

      .fill-collapse-header {
        border-bottom: 1px solid #A9BDC5;
        padding-bottom:15px;

        @media(max-width:767px){
          .MuiAccordionDetails-root {
            padding-left: 3px;
          }
        }
      }
      .MuiAccordionSummary-root.Mui-expanded {
        min-height: auto;
        border:none;
      }
        
        .MuiAccordionSummary-root{
          padding:0
        }

        .fill-collapse-title{
          font-size:25px;
          line-height:30px;
          color: #A0B1B5;
          text-transform:uppercase;
          font-weight:bold;

          @media(max-width:1366px){
            font-size:22px;
            line-height:19px;
          }

          @media(max-width:1200px){
            font-size:19px;
            line-height:17px;
          }

          @media(max-width:992px){
            font-size:17px;
            line-height:15px;
          }

          @media(max-width:767px){
            font-size:14px;
            line-height:12px;
          }
        }

        .Mui-expanded{

          

          .fill-collapse-title{
            color:#0099BA
          }

        }

        .example_listing_block_1{
          display:flex;
          margin-bottom:30px;

          @media(max-width:1200px){
            margin-bottom:20px;
          }




          .list_img_1 {
            margin-right: 15px;

            img{
              @media(max-width:767px){
                width:20px;
                height:20px
              }
            }


          }

          .example_listing_1{
            font-size: 25px;
            line-height: 32px;
            color: #0099BA;
            position: relative;
            top: -3px;

            @media(max-width:1366px){
              font-size:22px;
              line-height:25px;
            }
  
            @media(max-width:1200px){
              font-size:19px;
              line-height:23px;
            }
  
            @media(max-width:992px){
              font-size:17px;
              line-height:22px;
            }
  
            @media(max-width:767px){
              font-size:14px;
              line-height:19px;
              top: 3px;
            }
          }
        }   
        
        .padding-left-35{
          padding-left:50px;

          @media(max-width:1200px){
            padding-left:35px;
          }
          @media(max-width:992px){
            padding-left:0px;
          }
        }     
    }

    .collapse-space{
      margin-bottom:60px;

      @media(max-width:1366px){
        margin-bottom:50px;
      }
      @media(max-width:1200px){
        margin-bottom:44px;
      }
      @media(max-width:992px){
        margin-bottom:40px;
      }
      @media(max-width:767px){
        margin-bottom:35px;
      }
    }

    .fill-padding{
      padding-right:8%;

      @media(max-width:992px){
        padding-right:15px;
      }
    }
    .fill-card-title-2{
      font-size:30px;
      line-height:45px;
      color:#09425A;
      font-weight:bold;
      margin-bottom:20px;

      @media(max-width:1366px){
        font-size: 30px;
        line-height: 35px;
      }
      @media(max-width:1200px){
        font-size: 27px;
        line-height: 30px;
      }
      @media(max-width:992px){
        font-size: 22px;
        line-height: 25px;
      }
      @media(max-width:767px){
        font-size:18px;
        line-height:18px;
        margin-bottom:8px;
      }
    }
    .fill-card-sub-title{
      font-size:18px;
      line-height:25px;
      color:#0099BA;
      font-weight:bold;
      margin-bottom:20px;

      @media(max-width:1366px){
        font-size:16px;
        line-height:23px;
      }
      @media(max-width:1200px){
        font-size:14px;
        line-height:21px;
      }
      @media(max-width:992px){
        font-size:13px;
        line-height:20px;
      }
      @media(max-width:767px){
        font-size:12px;
        line-height:16px;
        margin-bottom:14px;
      }
    }
    .fill-input{
      width:100%;
      min-height:100px !important;
      font-size:25px;
      resize:vertical;

      @media(max-width:1366px){
        font-size:22px;
        line-height:28px;
      }
      @media(max-width:1200px){        
        font-size:20px;
        line-height:22px;
      }
      @media(max-width:992px){        
        font-size:17px;
        line-height:20px;
      }
      @media(max-width:767px){
        min-height:90px !important;
        font-size:14px;
        line-height:18px;
      }
      .add_input_wrapper{
        margin-bottom:0 !important
      }
    }

    .fill-input-2{
      width:100%;
      margin-bottom:52px;
      font-size:25px;
      resize:vertical;

      @media(max-width:1366px){
        margin-bottom:47px;
      }
      @media(max-width:1200px){       
        margin-bottom:44px;
      }
      @media(max-width:992px){        
        margin-bottom:40px;
      }
      @media(max-width:767px){
        margin-bottom:30px;
      }

      input{
        font-size:25px;
        width:100%;
        min-height:60px;
        border-radius: 37px;
        background-color: #eff3f4;
        font-family: 'Source Sans Pro',sans-serif;
        padding: 0px 30px;
        border:1px solid transparent;

        &:hover{
          border-color: #0099ba;
        }
        @media(max-width:1366px){
          font-size:22px;
          line-height:28px;
          min-height:45px;
        }
        @media(max-width:1200px){        
          font-size:20px;
          line-height:22px;
          min-height:40px;
        }
        @media(max-width:992px){        
          font-size:17px;
          line-height:20px;
          min-height:40px;
        }
        @media(max-width:767px){
          // min-height:35px;
          font-size:14px;
          line-height:18px;
          padding: 0px 22px;
        }
      }
      .MuiFormHelperText-root.Mui-error {
        font-size: 20px;
        margin-top: 10px;
        color: rgb(241, 152, 64);
        padding-left:10px;

        @media(max-width:1200px){
          font-size: 16px;
          margin-top: 8px;
        }
        @media(max-width:767px){
          font-size: 12px;
          margin-top: 4px;
        }

      }
    }
    .fill-textarea{
        font-size:25px;
        width:100%;
        min-height:68px;
        margin-bottom:52px;
        border-radius: 30px !important;
        padding: 12px 20px;

        @media(max-width:1366px){
          font-size:22px;
          line-height:28px;
          min-height:45px;
          margin-bottom:47px;
        }
        @media(max-width:1200px){        
          font-size:20px;
          line-height:22px;
          min-height:40px;
          margin-bottom:40px;
        }
        @media(max-width:992px){        
          font-size:17px;
          line-height:20px;
          min-height:40px;
          margin-bottom:35px;
        }
        @media(max-width:767px){
          min-height:35px;
          font-size:14px;
          line-height:18px;
          margin-bottom:30px;
        }
    }
    .add-bottom-space{
      .fill-card-title{
        @media(max-width:767px){
          margin-bottom:29px
        }
      }
      .fill-card-title-2{
        @media(max-width:767px){
          margin-bottom:12px
        }
      }
    }

    .stepper-width{
      @media(max-width:767px){
        width:80%;
      }
      @media(max-width:480px){
        width:70%;
      }
      @media(max-width:375px){
        width:60%;
      }
      .cBRVLl {
        @media(max-width:767px){
          margin: 0px -5px;
        }
      }
    }
    .problem_solving_popup{
      #scroll-dialog-description{
        &:focus-visible {
          outline:-webkit-focus-ring-color auto 0;
        }
      }
    }




    .muilti-select-button {
      margin-top: 40px;
      
      .hQUnHt.MuiButtonBase-root.MuiButtonBase-root{
        padding-right:35px;
        padding-left:35px;
        min-height:65px;
        height:auto

        @media(max-width:1366px){
          min-height:60px
        }
        @media(max-width:1200px){
          min-height:50px
        }
        @media(max-width:992px){
          max-width:100%;
          min-height:45px
        }
        @media(max-width:767px){
          padding-right:25px;
          padding-left:25px;
          min-height:40px
        }

        .MuiButton-label{
          font-size:21px;
          line-height:25px;

          @media(max-width:1366px){
            font-size:19px;
            line-height:23px;
          }
          @media(max-width:1200px){
            font-size:17px;
            line-height:20px;
          }
          @media(max-width:992px){
            font-size:16px;
            line-height:18px;
            justify-content: left;
          }
          @media(max-width:767px){
            font-size:14px;
            line-height:16px;
          }
        }

      }
      
    }
    .desktop-view{
      @media(max-width:992px){
        display:none
      }
    }
    .mobile-view{
      display:none;

      @media(max-width:992px){
        display:block;
        margin-bottom:36px
      }
    }

    .fill-card-sub-text{
      color: #09425a;
      font-size: 25px;
      line-height: 32px;

      @media(max-width:1366px){
        font-size: 22px;
        line-height: 30px;
      }
      @media(max-width:1200px){
        font-size: 20px;
        line-height: 25px; 
      }
      @media(max-width:992px){
        font-size: 18px;
        line-height: 20px;
        margin-bottom:24px
      }
      @media(max-width:767px){
        font-size: 12px;
        line-height: 16px;
      }
    }
    
    .fill-phase-2{
      @media(max-width:767px){
        padding-top: 35px;
      }
    }
    
    // .luke_button{
    //   button{
    //     @media(max-width:767px){   
    //       max-width:120px;
    //     }
    //   }
    // }
      
    
  }


  .luke_card{
    padding: 10px 50px 50px 50px;
    border-radius: 30px;
    box-shadow: 0px 20px 60px 0 rgb(59 73 81 / 10%);
    position: relative;
    overflow: visible;

    .arrow_main_wrapper_prev{
      position: absolute;
      left: -50px;
      top: 250px;
      width: 45px;
      height: 45px;
      // background-color: rebeccapurple;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  
    .arrow_sticky{
      top:20px !important;
    } 
    .arrow_sticky_next{
      top:20px !important;
    } 

    .exm_input_text_group{
      margin-bottom: 20px;
      @media(max-width: 1366px){

        margin-bottom: 20px;
      }
      @media(max-width: 1200px){

        margin-bottom: 20px;
      }
      @media(max-width: 992px){

        margin-bottom: 20px;
      }
      @media(max-width: 767px){

        margin-bottom: 10px;
      }
    }
    .exm_input_text_title{
      font-size: 30px;
      line-height: 32px;
      color: #09425A;
      font-weight: 700;


      @media(max-width: 1366px){
        font-size: 28px;
        line-height: 30px;
      }
      @media(max-width: 1200px){
        font-size: 25px;
        line-height: 30px;
      }
      @media(max-width: 992px){
        font-size: 20px;
        line-height: 22px;
      }
      @media(max-width: 767px){
        font-size: 18px;
        line-height: 20px;
      }
    }

    .exm_input_sub_text_title{
      color: #0099BA;
      font-weight: 700;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    .exm_step_six_main_form_border{
      border-bottom: 3px solid #CFD7D9 ;
      margin-bottom: 20px;
    }
    .example_text_area_five{
      max-width: 100%;
      width: 100%;
      resize: none;
    }
    .flexible_idea_pros_cons{
      :last-child{
        .step_ul{
          padding-right: 00px;
        }
      }
      .step_ul{
        padding-right: 50px;
        @media(max-width: 1366px){
          padding-right: 30px;
        }
        @media(max-width: 992px){
          padding-right: 0px;
        }
      }
    }
    .exm_step_six_main_wrapper{
      @media(max-width: 992px){
        flex-direction: column;
      }
    }
    .step_one_collapse_open  {
      border-bottom: 1px solid #A9BDC5;

      @media(max-width: 992px){
        border-bottom: 0px solid #A9BDC5;
      }
    }
    .example_two_image_col{
      @media(max-width: 992px){
        margin-top: 20px;
      }
    }

    .solution_types{
      @media(max-width: 992px){
        display: flex;
      align-items: center;
      }
    }

    .exm_two_solving_text{
      padding-right: 60px;
      @media(max-width: 1366px){
        padding-right: 50px;
      }
      @media(max-width: 1200px){
        padding-right: 40px;
      }
      @media(max-width: 992px){
        padding-right: 15px;
      }

    }
    .exm_step_six{
      .exm_six_table{
        margin-bottom: 50px;
        @media(max-width: 1366px){
          margin-bottom: 50px;
        }
        @media(max-width: 1200px){
          margin-bottom: 40px;
        }
        @media(max-width: 992px){
          margin-bottom: 30px;
        }
      }
     
      .here_exm_text{
        font-size: 18px;
        line-height: 21px;
        font-weight: 700;
        color: #A9BDC5;
        padding-bottom: 10px;
        // border-bottom: 1px solid #A9BDC5;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .collapse_arrow_main{
          width: 18px;
          height: 9px;
          @media(max-width: 1200px){
            width: 15px;
            height: 7px;
          }
          @media(max-width: 992px){
            width: 13px;
            height: 6px;
          }
        }
        .open_collapse{
          transform: scale(-1);
          width: 18px;
          height: 9px;
          @media(max-width: 1200px){
            width: 15px;
            height: 7px;
          }
          @media(max-width: 992px){
            width: 13px;
            height: 6px;
          }
        }




        @media(max-width: 1366px){
          font-size: 18px;
          line-height: 21px;
          margin-bottom: 23px;
          padding-bottom: 8px;
        }
        @media(max-width: 1200px){
          font-size: 16px;
          line-height: 18px;
          margin-bottom: 18px;
          padding-bottom: 7px;
        }
        @media(max-width: 992px){
          font-size: 14px;
          line-height: 16px;
          margin-bottom: 18px;
          padding-bottom: 6px;
        }
        @media(max-width: 767px){
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 15px;
        }
      }
      .six_step_title{
        padding-top: 80px;

        @media(max-width: 1366px){
          padding-top: 70px;
        }
        @media(max-width: 1200px){
          padding-top: 50px;
        }
        @media(max-width: 992px){
          padding-top: 0px;
        }
        @media(max-width: 767px){
          padding-top: 00px;
        }
      }
      .exm_step_six_problem{
        padding-left: 10px;
        font-size: 25px;
        line-height: 35px;
        font-weight: 700;
        color: #09425A;
        margin-bottom: 15px;

        @media(max-width: 1366px){
          font-size: 22px;
          line-height: 30px;
          margin-bottom: 12px;
        }
        @media(max-width: 1200px){
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 10px;
        }
        @media(max-width: 992px){
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 8px;
          padding-left: 00px;
          min-width: 100px;
          padding-right: 10px;
        }
        @media(max-width: 767px){
          font-size: 12px;
          line-height: 14px;
          min-width: 70px;
          margin-bottom: 5px;
        }
      }
      .luke_image_six{
        text-align: center;
      }
      .exm_step_six_solution_text{
        font-size: 25px;
        line-height: 35px;
        font-weight: 700;
        color: #09425A;
        margin-top: 40px;
        margin-bottom: 20px;

        @media(max-width: 1366px){
          font-size: 22px;
          line-height: 30px;
        }
        @media(max-width: 1200px){
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 15px;

        }
        @media(max-width: 992px){
          font-size: 18px;
          line-height: 20px;
        }
        @media(max-width: 767px){
          font-size: 14px;
          line-height: 16px;
        }

        

        span{
          color: #0099BA;
          @media(max-width: 767px){
            font-size: 12px;
            line-height: 14px;
          }
        }
      }
      
      .exm_step_collapse_sol_text{
        font-size: 25px;
        line-height: 35px;
        font-weight: 700;
        color: #09425A;
        margin-top: 30px;
        margin-bottom: 60px;

        @media(max-width: 1366px){
          font-size: 22px;
          line-height: 30px;
          margin-bottom: 50px;
        }
        @media(max-width: 1200px){
          font-size: 20px;
          line-height: 40px;
        }
        @media(max-width: 992px){
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 30px;
        }
        @media(max-width: 767px){
          font-size: 12px;
          line-height: 14px;
          margin-bottom: 20px;
        }

        

        span{
          color: #0099BA;
        }
      }
    }

    .pro_con_res_row_step_five{
      &.pro_con_res_row{
       @media(max-width: 992px){
        :last-child{
          border-bottom: 3px solid #CFD7D9 !important;
        }
       }
      }
      .pro_con_res{
        @media(max-width: 992px){
          padding-top: 0px !important;
        }
      }
    }
    .exm_luke_image_step_five{
      height: 345px;
      width: auto;
      padding-right: 30px;

      @media(max-width: 1366px){
        height: 300px;
        padding-right: 20px;
      }
      @media(max-width: 992px){
        padding-right: 00px;
        height: 250px;
      }
    }

    .exm_luke_step_five_main{
      text-align: right;

      @media(max-width: 992px){
        text-align: center;
      }
    }
    .pros_cons_main{
      @media(max-width: 992px){
        font-size: 14px !important;
        min-width: 54px;
      }
    }
    .idea_main{
      @media(max-width: 992px){
        min-width: 54px;
      }
    }


    .idea_wrapper{
      ul {
        li{
          @media(max-width: 992px){
            font-weight: 700;
          }
        }
      }
    }
    .pros_cons_ul_five{
      li{

        :last-child{
          margin-bottom: 25px !important;
          @media(max-width: 1366px){
            margin-bottom: 20px !important;
          }
          @media(max-width: 992px){
            margin-bottom: 0px !important;
            padding-left: 0px !important;
            ::before{
              content: none;
            }
          }
          @media(max-width: 767px){
            margin-bottom: 0px !important;
            padding-left: 0px !important;
            ::before{
              content: none;
            }
          }
        }
      }
    }






    .pro_con_res_row{

      @media(max-width: 992px){
        padding-top: 15px;
        padding-bottom: 20px;
        border-bottom: 3px solid #CFD7D9;

        .pros_con_li_text{
          @media(max-width: 992px){
            margin-bottom: 00px !important;
            li{
              padding-left: 0px;
              ::before{
                content: none;
              }
            }
          }
        }
        :nth-child(2){
          padding-top: 0px !important;
        }
        :last-child{
          padding-bottom: 0px;
          border-bottom: 0px solid #CFD7D9;
        }
      }
    
    }
    .pro_con_res_col{

      @media(max-width: 992px){
        margin-bottom: 15px !important;
        padding-right: 0px !important;
        display: flex;
        align-items: flex-start;
        .pro_con_res{
          padding-top: 20px;

          @media(max-width: 767px){
            padding-top: 15px;
          }
        }
        :last-child{
          margin-bottom: 0px !important;
        }
         
        input{
          margin-bottom: 0px ;
        }
      }

    }
    .idea_text_res{
      .solvable_unsolvable_title {
        @media(max-width: 992px){
          margin-bottom: 10px !important;
        }
      }
      @media(max-width: 992px){
        margin-bottom: 0px !important;
      }
    }
    .pro_con_res{
      display: none;
      @media(max-width: 992px){
        display: block;
        padding-right: 20px;
        margin-bottom: 0px !important;
      }
    }
    .pro_con_desk_title{
      @media(max-width: 992px){
        display: none;
      }
    }
    .exm_step_four_ul{
      margin-bottom: 60px;

      @media(max-width: 1366px){
        margin-bottom: 50px;
      }
      @media(max-width: 1200px){
        margin-bottom: 40px;
      }
      @media(max-width: 992px){
        margin-bottom: 30px;
      }
      @media(max-width: 767px){
        margin-bottom: 20px;
      }
    }
    .add_input_wrapper{
      display: unset;
    }
    .exm_step_four_add_input_wrapper{
      display: unset;
      width: 100%;
      @media(max-width: 992px){
        width: 100%;
      }
    }
    .exm_step_four_pro_cons{
      margin-bottom: 0px !important;
      .main_pro_con_res_row{
        margin-left: -30px;
        margin-right: -30px;
        max-width: initial;
        width: auto !important;

        @media(max-width: 1200px){
          margin-right: -15px !important;
          margin-left: -15px !important;
        }

        @media(max-width: 992px){
          margin-right: -0px !important;
          margin-left: -0px !important;
        }
      }
      .solvable_unsolvable_col {
        padding-right: 30px !important;
        padding-left: 30px !important;

        @media(max-width: 1200px){
          padding-right: 15px !important;
          padding-left: 15px !important;
        }
        @media(max-width: 992px){
          padding-right: 0px !important;
          padding-left: 0px !important;
        }
      }
    }


    .add_input_icon{
      width: 62px;
      height: 62px;

      @media(max-width: 1366px){
        width: 60px;
        height: 60px;
      }
      @media(max-width: 1200px){
        width: 55px;
        height: 55px;
      }
      @media(max-width: 992px){
        width: 45px;
        height: 45px;
      }
      @media(max-width: 992px){
        width: 40px;
        height: 40px;
      }
    }
    .exm_step_three_img{
      text-align: right;
      .luke_image{
        width: 80%;

        @media(max-width: 1200px){
          width: 100%
        }
        @media(max-width: 992px){
            max-width: 350px;
        }
        @media(max-width: 767px){
            max-width: 300px;
        }
      }

      @media(max-width: 992px){
        text-align: center;
      }
    }
    .collapse_ul{
      margin-top: 30px;
      margin-bottom: 40px;

      @media(max-width: 1366px){
        margin-top: 25px;
        margin-bottom: 30px;
      }
      @media(max-width: 1200px){
        margin-top: 20px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        margin-top: 15px;
        margin-bottom: 20px;
      }
      @media(max-width: 767px){
        margin-top: 13px;
        margin-bottom: 12px;
      }
    }
    .example_radio{
      margin-bottom: 60px;
      margin-left: 30px;

      @media(max-width: 1366px){
        margin-left: 25px;
        margin-bottom: 50px;
      }
      @media(max-width: 1200px){
        margin-left: 20px;
        margin-bottom: 40px;
      }
      @media(max-width: 992px){
        margin-left: 0px;
        margin-bottom: 30px;
      }
    
    }
    .collapse_arrow_icon{
      width: 25px;
      height: auto;
      margin-left: 60px;
      padding-top: 10px;

      @media(max-width: 1366px){
        width: 15px;
        height: auto;
        margin-left: 55px;
      }
      @media(max-width: 1200px){
        width: 13px;
        height: auto;
        margin-left: 50px;
        
      }
      @media(max-width: 992px){
        padding-top: 5px;
        
      }

    }
    &.exm_step_six_add_input_wrapper{
      display: unset;
      input{
        height: 88px;
        border-radius: 24px;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 25px 20px;
  
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

    .example_text_area_step_three{
      min-height: 60px;
      padding: 12px 20px;
      border-radius: 30px !important; 
      margin-bottom: 20px !important;

      @media(max-width: 1366px){
        min-height: 55px ;
        margin-bottom: 19px !important;
      }
      @media(max-width: 120px){
      min-height: 50px;
      border-radius: 25px !important; 
      margin-bottom: 18px !important;

      }
      @media(max-width: 992px){
      min-height: 45px;
      margin-bottom: 17px !important;

      }
      @media(max-width: 767px){
        min-height: 40px;
        border-radius: 15px !important; 
        margin-bottom: 16px !important;
      }
    }

    .example_text_area_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 18px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        
      }
    }

    .example_step_two_collapse{
      margin-top: 50px;
      &.collapse_title{
        width: auto;
      }
    }
    .example_two_image_col{
      text-align: center;
      .example_two_image{
        height: 380px;
        width: auto;

        @media(max-width : 992px){
          width: auto;
          height: 165px;
        }
      }
    }
    .example_two_image_row{
      margin-top: 35px;
      margin-bottom: 43px;

      .step_ul{
        margin-bottom: 35px;
      }
    }
    .example_text_area{
      resize: none;
      outline: none;
      border-radius: 30px;
      margin-top: 0px;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 25px;
      line-height: 32px;
      width: 100%;

      @media(max-width: 1366px){
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
        line-height: 20px;
        border-radius: 20px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 18px;
        border-radius: 15px;
      }
      @media(max-width: 767px){
        font-size: 14px;
        line-height: 16px;
        border-radius: 13px;
      }
    }
    .pro_con_res_col {
      .step_ul{
        margin-bottom: 20px;
        @media(max-width: 1366px){
          margin-bottom: 18px;
        }
    
        @media(max-width: 992px){
          margin-bottom: 16px;
        }
      
      }
    }

    .flexible_pro_con_res_col{
      @media(max-width: 992px){
        margin-bottom: 0px !important;
      }
    }
    .example_text_area_four{
      min-height: 70px ;
      border-radius: 24px;
      margin-bottom: 20px;
      resize: none;
      width: 100%;
      padding: 15px 20px;

      :focus{
        outline: none;
      }

      @media(max-width: 1366px){
        min-height: 60px;
        border-radius: 22px;
        font-size: 18px;
        margin-bottom: 18px;
      }

      @media(max-width: 992px){
        margin-bottom: 0px;
        min-height: 50px;
        border-radius: 20px;
      }

      @media(max-width: 767px){
        min-height: 40px;
        font-size: 15px;
        border-radius: 15px;
        padding: 8px 20px;
      }

    }
    .collapse_border {
      border-bottom: 1px solid #A9BDC5;

      @media(max-width: 992px){
        border-bottom: 0px solid #A9BDC5;
      }
    }
    .collapse_title{
      font-size: 30px;
      line-height: 32px;
      font-weight: 700;
      color: #09425A;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 30px;

      span{
        display: flex; 
        
      }

      Width: fit-content;

       @media(max-width: 1366px){
        font-size: 28px;
        line-height: 30px;
        padding-bottom: 20px;
       }
       @media(max-width: 1200px){
        font-size: 25px;
        line-height: 28px;
        padding-bottom: 15px;
       }
       @media(max-width: 992px){
        font-size: 20px;
        line-height: 25px;
        padding-bottom: 10px;
        Width: auto;
       }
       @media(max-width: 767px){
        font-size: 18px;
        line-height: 20px;
       }

    }

   

    .tooltip_gray{
      color: #A9BDC5 !important;
    }
    .tooltip_blue{
      color: #0099BA !important;
    }

    .tooltip_title{
      font-size: 25px;
      line-height: 27px;
      color: #007C91;
      font-weight: 700;

      @media(max-width: 1366px){
        font-size: 20px;
      }
      @media(max-width: 1200px){
        font-size: 18px;
      }
    }


    .example_img_col{
      text-align: center;
    }
    .problem_step{
      margin-bottom: 40px;
      @media(max-width: 767px){
        margin-bottom: 25px;
      }
      .MuiStepConnector-line{
        @media(max-width: 767px){
          border-top-width: 2px;
        }
      }
    }

    .example_step_one_row{
      display: flex;
      align-items: center;
      font-size: 0px;

      @media(max-width: 992px){
        display: block;
      }
    }
    .example_step_one_img{
      width: 100%;
      height: auto;
      max-width:500px;
      @media(max-width: 992px){
        max-width: 350px;
        margin-top: 25px
      }
    }

    .idea_pros_cons_main{
      margin-bottom: 50px;
      @media(max-width: 1366px){
        margin-bottom: 40px;
      }
      @media(max-width: 1200px){
        margin-bottom: 30px;
      }
      @media(max-width: 992px){
        margin-bottom: 25px;
      }
      @media(max-width: 767px){
        margin-bottom: 23px;
      }
      .pro_con_res_row {
        :last-child{
          .solvable_unsolvable_col {
            ul{
              li{
                margin-bottom: 0px !important;
              }
            }
          }
        }
      }
    }
    .example_step_one_title{
      
      font-size: 33px;
      line-height: 37px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        
      }
    }

    .step_five_input_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 35px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 30px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 10px;
        
      }
    }
    .step_one_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 45px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 35px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
        
      }
    }
    .step_six_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 37px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 35px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
        
      }
    }

    .step_two_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 51px;
      color: #09425A;


      &.exm_flex_one{
        margin-bottom: 28px;

        @media(max-width: 1200px){
        margin-bottom: 20px;
        }
        @media(max-width: 992px){
        margin-bottom: 15px;
        }
      }

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 45px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 40px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 22px;
        
      }
    }
    .exm_four_step_two_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 51px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        
      }
    }
    .hover_section_title{
      font-size: 33px;
      line-height: 37px;
      margin-bottom: 70px;

      @media(max-width: 1366px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 45px;
      }
      @media(max-width: 1200px){
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 40px;
      }
      @media(max-width: 992px){
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 22px;
        
      }
    }
    @media(max-width: 1366px){
      padding: 10px 40px 40px 40px;
    }
    @media(max-width: 1200px){
      padding: 10px 35px 35px 35px;
    }
    @media(max-width: 992px){
      padding: 10px 30px 30px 30px;
    }
    @media(max-width: 767px){
      padding: 10px 15px 25px 15px;
      border-radius: 20px
    }
    .luke_image{
      &.luke_image_step_six{
        @media(max-width:  767px){
          max-width: 250px;
        }
      }
        width: 100%;
        height: auto;

        @media(max-width: 992px){
          max-width: 350px;
        }
        @media(max-width:  767px){
          max-width: 300px;
        }
    }

    .luke_title_desk{
      @media(max-width: 992px){
        display: none;
      }
    }
    .luke_title_mobile{
      display: none;
      @media(max-width: 992px){
        display: block;
        text-align: left;
      }
    }
    .luke_title{
      font-size: 55px;
      line-height: 60px;
      font-weight: 600;
      margin-bottom: 35px;


      @media(max-width: 1366px){
        font-size: 50px;
        line-height: 55px;
        margin-bottom: 30px;
      }
      @media(max-width: 1200px){
        font-size: 45px;
        line-height: 50px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 20px;
      }
      @media(max-width: 767px){
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 15px;
      }
    }
    .luke_text{
       p{
         font-size: 25px;
         line-height: 32px;
         font-weight: 400;
         margin-bottom: 15px;


         @media(max-width: 1366px){
          font-size: 20px;
          line-height: 30px;
        }
         @media(max-width: 1200px){
          font-size: 18px;
          line-height: 25px;
        }
         @media(max-width: 992px){
          font-size: 16px;
          line-height: 20px;
        }
         @media(max-width: 767px){
          font-size: 14px;
          line-height: 18px;
          margin-bottom: 10px;
        }
      }
    }

      .blue_quote_text{
        font-size: 25px;
        line-height: 32px;
        font-weight: 400;
        font-weight: 700;
        color: #0099BA;
        margin-bottom: 37px;


        @media(max-width: 1366px){
         font-size: 20px;
         line-height: 30px;
         margin-bottom: 30px;
       }
        @media(max-width: 1200px){
         font-size: 18px;
         line-height: 25px;
         margin-bottom: 28px;
       }
        @media(max-width: 992px){
         font-size: 16px;
         line-height: 20px;
         margin-bottom: 25px;
       }
        @media(max-width: 767px){
         font-size: 14px;
         line-height: 18px;
         margin-bottom: 10px;
         margin-bottom: 25px;
       }
    }
    .solvable_unsolvable_title{
      font-size: 30px;
      line-height: 32px;
      font-weight: 700;
      color: #09425A;
      margin-bottom: 20px;



      @media(max-width: 1366px){
        font-size: 28px;
        line-height: 30px;
      }
      @media(max-width: 1200px){
        font-size: 25px;
        line-height: 27px;
      }
      @media(max-width: 992px){
        font-size: 18px;
        line-height: 22px;
      }
      @media(max-width: 767px){
        font-size: 14px;
        line-height: 20px;
      }
    }
    .step_three_ul{
      padding-bottom: 50px;

      @media(max-width: 1366px){
        padding-bottom: 50px;
      }
      @media(max-width: 1200px){
        padding-bottom: 40px;
      }
      @media(max-width: 992px){
        padding-bottom: 30px;
      }
    }
    .pros_step_ul{
      padding-right: 10px;
      @media(max-width: 992px){
        padding-right: 0px;
      }
      li{
        color: #007C91 !important;
        
        ::before{
          background-color: #007C91 !important;
        }
      }
    }
    .cons_step_ul{
     
      li{
        color: #753072 !important;
        ::before{
          background-color: #753072 !important;
        }
      }
    }
    .step_ul{
      padding-left: 0px;
      list-style: none;
      font-size: 25px;
      line-height: 32px;
      margin-bottom: 0px;

      @media(max-width: 1366px){
        font-size: 25px;
        line-height: 32px;
      }
      @media(max-width: 1200px){
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 20px;
      }
      @media(max-width: 767px){
        font-size: 14px;
        line-height: 18px;
      }


     .ste_li_input{
      padding-left: 31px;


      @media(max-width: 1200px){
        padding-left: 22px;
      }
      @media(max-width: 992px){
        padding-left: 20px;
      }
      @media(max-width: 767px){
        padding-left: 16px;
      }


      ::before{
        content: "";
        position: absolute;
        left: 0;
        top: 22px;
        width: 18px;
        height: 18px;
        background-color: #0099ba;
        border-radius: 10px;
        

        @media(max-width: 1366px){
          top: 20px;
          width: 16px;
          height: 16px;
        }
        @media(max-width: 1200px){
          top: 15px;
          width: 14px;
          height: 14px;
        }
        @media(max-width: 992px){
          top: 10px;
          width: 12px;
          height: 12px;
        }
        @media(max-width: 767px){
          top: 10px;
          width: 10px;
          height: 10px;
        }
      }
     }

      > li{
        position: relative;
        padding-left: 40px;
        margin-bottom: 25px;
        color: #0099ba;
        word-break: break-word;

        .step_ul_input{

          &.step_ul_textarea{
            // min-height: 61px;
            border-radius: 33px;
            margin-top: 0px;
            padding: 0 15px;
            font-size: 25px;
            background-color: #eff3f4;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.28;
            border: solid 1px transparent;
            padding-top: 12px;
            outline: none;
            color: #000;

            ::-webkit-input-placeholder { /* Edge */
              color: #A9BDC5;
            }
            
            :-ms-input-placeholder { /* Internet Explorer */
              color: #A9BDC5;
            }
            
            ::placeholder {
              color: #A9BDC5;
            }
          }





          width: 100%;
          .MuiInput-input{
            height: 61px;
            border-radius: 33px;
            margin-top:0px;
            padding: 0 15px;
            font-size: 25px;

            @media(max-width: 1366px){
              height: 55px;
              border-radius: 30px;
              font-size: 25px;
            }
            @media(max-width: 1200px){
              height: 40px;
              border-radius: 20px;
              font-size: 20px;
            }
            @media(max-width: 992px){
              height: 35px;
              border-radius: 15px;
              font-size: 16px;
            }
            @media(max-width: 992px){
              height: 32px;
              border-radius: 12px;
              font-size: 14px;
              padding: 0 10px;
            }
          }
        }
        :last-child{
          margin-bottom: 0px;
        }

        @media(max-width: 1366px){
          padding-left: 40px;
          margin-bottom: 20px;
        }
        @media(max-width: 1200px){
          padding-left: 30px;
          margin-bottom: 18px;
        }
        @media(max-width: 992px){
          padding-left: 25px;
          margin-bottom: 15px;
        }
        @media(max-width: 767px){
          padding-left: 20px;
        }
        ::before{
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 18px;
          height: 18px;
          background-color: #0099ba;
          border-radius: 10px;



          @media(max-width: 1366px){
            top: 11px;
            width: 16px;
            height: 16px;
          }
          @media(max-width: 1200px){
            top: 6px;
            width: 14px;
            height: 14px;
          }
          @media(max-width: 992px){
            top: 4px;
            width: 12px;
            height: 12px;
          }
          @media(max-width: 767px){
            top: 5px;
            width: 10px;
            height: 10px;
          }
        }
      }
    }



    .problem_should_ul{
      margin-bottom: 55px;
      @media(max-width: 1366px){
        margin-bottom: 50px;
      }
      @media(max-width: 1200px){
        margin-bottom: 45px;
      }
      @media(max-width: 992px){
        margin-bottom: 40px;
      }
      @media(max-width: 767px){
        margin-bottom: 32px;
      }
    }
    .solvable_unsolvable{
      margin-bottom: 54px;


      @media(max-width: 1366px){
        margin-bottom: 50px;
      }
      @media(max-width: 1200px){
        margin-bottom: 40px;
      }
      @media(max-width: 992px){
        margin-bottom: 30px;
      }
      @media(max-width: 767px){
        margin-bottom: 25px;
      }

      &.specific_row{
        ul {
          li {
            font-style: italic;
          }
        }
      }

      .solvable_unsolvable_col{
        :first-child{
          padding-right: 50px;
        }
        @media(max-width: 992px){
          margin-bottom: 30px;
          :first-child{
            padding-right: 0px;
          }
          :last-child{
            margin-bottom: 0px;
          }
        }


        @media(max-width: 767px){
          :first-child{
            padding-right: 0px;
          }
        }
      }
    }

    .step_bottom_text{
      > div{
        font-size: 25px;
        line-height: 32px;
        font-weight: 400;
        margin-bottom: 20px;
  
  
        @media(max-width: 1366px){
         font-size: 20px;
         line-height: 30px;
         margin-bottom: 18px;
       }
        @media(max-width: 1200px){
         font-size: 18px;
         line-height: 25px;
         margin-bottom: 16px;
       }
        @media(max-width: 992px){
         font-size: 16px;
         line-height: 20px;
         margin-bottom: 14px;
       }
        @media(max-width: 767px){
         font-size: 14px;
         line-height: 18px;
         margin-bottom: 10px;
       }
      }
    }
    .step_one_text{
       p{
         font-size: 25px;
         line-height: 32px;
         font-weight: 400;
         margin-bottom: 38px;


         @media(max-width: 1366px){
          font-size: 20px;
          line-height: 30px;
          margin-bottom: 35px;
        }
         @media(max-width: 1200px){
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 20px;
        }
         @media(max-width: 992px){
          font-size: 16px;
          line-height: 20px;
        }
         @media(max-width: 767px){
          font-size: 14px;
          line-height: 18px;
        }
      }
    }

    .step_gray_text{
      font-size: 20px;
      line-height: 23px;
      font-weight: 700;
      text-transform: uppercase;
      color: #A9BDC5;
      margin-bottom: 25px;

      @media(max-width: 1200px){
        font-size: 18px;
        line-height: 120px;
        margin-bottom: 15px;
      }
      @media(max-width: 992px){
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 10px;
      }
      @media(max-width: 1200px){
        font-size: 14px;
        line-height: 16px;
      }


      &.exm_one_step_gray_text{
        margin-top: 40px;
        margin-bottom: 35px;
        @media(max-width: 1200px){
          margin-bottom: 30px;
          margin-top: 40px;
        }
        @media(max-width: 992px){
          margin-bottom: 25px;
          margin-top: 35px;
        }
        @media(max-width: 1200px){
          margin-bottom: 20px;
          margin-top: 30px;
        }
      }
    }
    .step_two_gray_text{
      font-size: 18px;
      line-height: 21px;
      font-weight: 700;
      text-transform: uppercase;
      color: #A9BDC5;
      margin-bottom: 30px;

      @media(max-width: 1200px){
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 20px;
      }
      @media(max-width: 1200px){
        font-size: 12px;
        line-height: 14px;
      }
    }
    .luke_schedule_title{
      margin-top: 30px; 
      font-size: 25px;
      line-height: 32px;
      font-weight: 700;

      @media(max-width: 1366px){
        font-size: 20px;
        line-height: 30px;
      }
       @media(max-width: 1200px){
        font-size: 18px;
        line-height: 25px;
      }
       @media(max-width: 992px){
        font-size: 16px;
        line-height: 20px;
      }
       @media(max-width: 767px){
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 10px;
      }
    }

    .luke_schedule_text{
      font-size: 25px;
      line-height: 32px;
      font-weight: 400;
    
      div{
        margin-bottom: 2px;
        @media(max-width: 767px){
          margin-bottom: 5px;
        }
      }

      @media(max-width: 1366px){
        font-size: 20px;
        line-height: 30px;
      }
       @media(max-width: 1200px){
        font-size: 18px;
        line-height: 25px;
      }
       @media(max-width: 992px){
        font-size: 16px;
        line-height: 20px;
      }
       @media(max-width: 767px){
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 10px;
      }

      .luke_time{
        font-weight: 700;
      }
    }
  }

  .home-luke-card{
    padding: 50px !important;

    @media(max-width: 1366px){
      padding: 45px !important;
    }
    @media(max-width: 1200px){
      padding: 40px !important;
    }
    @media(max-width: 992px){
      padding: 10px 15px 25px 15px !important;
    }
   
  }

  iframe{

    @media(max-width: 1366px){
      height: 650px;
    }
    @media(max-width: 1200px){
      height: 550px;
    }
    @media(max-width: 992px){
      height: 400px;
    }
    @media(max-width: 767px){
      height: 200px;
    }
  }

 
  .luke_card{ 

    .step_six_main_wrapper{
      padding-right: 200px;
      @media(max-width: 1366px){
        padding-right: 100px;
      }
      @media(max-width: 1200px){
        padding-right: 50px;
      }
      @media(max-width: 992px){
        padding-right: 0px;
      }
    }
    .slider_main_wrapper{
      @media(max-width: 992px){
        padding: 0 10px;
      }
    }
    .exm_five_wrapper{
      .example_text_area_step_three{
        @media(max-width: 992px){
          margin-bottom: 10px !important;
        }
      }
    }

    .exm_four_main_wrapper{
      .luke_text{
        p{
          margin-bottom: 30px;

          @media(max-width: 1366px){
           margin-bottom: 28px;
          }
          @media(max-width: 1200px){
           margin-bottom: 26px;
          }
          @media(max-width: 992px){
           margin-bottom: 24px;
          }
          @media(max-width: 767px){
           margin-bottom: 20px;
          }
        }
      }
    }

    .exm_three_title{
      margin-bottom: 25px;

      @media(max-width: 992px){
        margin-bottom: 20px;
      }
    }
    .exm_three_luke_image_wrapper{
      text-align: right;

      @media(max-width: 992px){
        text-align: center;
      }
      .exm_three_luke_image{
        max-width: 500px;

        @media(max-width: 992px){
          max-width: 350px;
        }
        @media(max-width: 767px){
          max-width: 250px;
        }
      }
    }
    .exm_six_luke_image_wrapper{
      text-align: right;

      @media(max-width: 992px){
        text-align: center;
      }
      .exm_six_luke_image{
        max-width: 100%;

        @media(max-width: 992px){
          max-width: 350px;
        }
        @media(max-width: 767px){
          max-width: 200px;
        }
      }
    }
    .exm_three_input_group_text{
      margin-bottom: 20px;
      @media(max-width: 1366px){
        margin-bottom: 15px;
      }
      @media(max-width: 992px){
        margin-bottom: 10px;
      }
    }
    .exm_three_input_group{
      margin-bottom: 46px;
      @media(max-width: 1366px){
        margin-bottom: 36px;
      }
      @media(max-width: 1200px){
        margin-bottom: 25px;
      }
    
    }
    .flexible_padding{
      .exm_three_input_group{
        :last-child{
          margin-bottom: 0px;
        }
      }
    }
    .exm_one_luke_image_wrapper{
      text-align: right;
      .exm_one_luke_image{
        max-width: 500px;
        @media(max-width: 992px){
          max-width: 350px;
        }
        @media(max-width: 767px){
          max-width:250px;
        }
      }
      @media(max-width: 992px){
        text-align: center;
      }
    }
    .exm_two_luke_image_wrapper{
      text-align: right;
     
      .exm_two_luke_image{
        max-width: 446px;
        @media(max-width: 992px){
          max-width: 350px;
        }
        @media(max-width: 767px){
          max-width:250px;
        }
      }
      @media(max-width: 992px){
        text-align: center;
      }
    }
    .exm_two_sub_text{
      font-size: 30px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;


      @media(max-width: 1366px){
        font-size: 28px;
        line-height: 32px;
      }
      @media(max-width: 1200px){
        font-size: 25px;
        line-height: 28px;
      }
      @media(max-width: 992px){
        font-size: 20px;
        line-height: 25px;
      }
      @media(max-width: 767px){
        font-size: 18px;
        line-height: 20px;
      }
    }


    .exm_two_title{
      margin-bottom: 35px;

      @media(max-width: 1366px){
        margin-bottom: 30px;
      }
      @media(max-width: 1200px){
        margin-bottom: 25px;
      }
      @media(max-width: 992px){
        margin-bottom: 20px;
      }
    }

    .textarea_bottom_space{
      margin-bottom: 35px;
      font-size : 25px;
      border-radius: 33px;
      padding: 10px 30px;
      resize: none;
      min-height: 100px;

      @media(max-width: 992px){
        font-size: 14px;
        min-height: 70px;
        padding: 10px;
        border-radius: 15px;
        margin-bottom: 25px;
      }
    }
    .catch_textarea{
      height:140px;
      margin-bottom:45px;
      font-size: 25px;
      border-radius: 33px;
      padding: 10px 30px;
      resize: none;
      min-height: 100px;

      @media(max-width: 1200px){
        font-size: 20px;
        margin-bottom:40px;
      }

      @media(max-width: 992px){
        font-size: 14px;
        min-height: 70px;
        padding: 10px;
        margin-bottom: 25px;
        border-radius: 15px;
      }

    }
    .example_text{
      color:#A9BDC5;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .plus_ul_row{
      margin-top: 40px;
      @media(max-width: 1366px){
        margin-top: 35px;
      }
      @media(max-width: 1200px){
        margin-top: 30px;
      }
      @media(max-width: 992px){
        margin-top: 25px;
      }
      @media(max-width: 767px){
        margin-top: 20px;
      }
    }
    .if_you_text{
      font-Size:18px;
      line-height:20px;
      font-Weight:bold;
      color: #0099BA;

      @media(max-width: 1200px){
        font-Size:16px;
        line-height:18px;
      }
      @media(max-width: 992px){
        font-Size:14px;
        line-height:16px;
      }
      @media(max-width: 767px){
        font-Size: 14px;
        line-height:16px;
      }
    }
    .example_listing{
      font-size: 25px;
      line-height:32px;
       color:#0099BA;
       position: relative;
       top: -3px;
    }
    .example_listing_block{
      padding-bottom: 30px;
      display: flex;
      align-items: flex-start;
    }
    .example_listing_block_wrapper{
      :last-child{
        .example_listing_block{{
          padding-bottom: 0px;
        }
      }
    }
    .example_listing_block .row {
      display: flex;
    } 
    @media(max-width: 1366px){

      .exm_input_text_title {
        font-size: 25px;
        line-height: 28px;
      }
      .example_listing {
        font-size: 22px;
        line-height: 30px;
      }
    }
    
    @media(max-width: 1200px){


      .exm_input_text_title {
        font-size: 22px;
        line-height: 28px;
      }
      .example_listing {
        font-size: 20px;
        line-height: 30px;
      }
      .if_you_text{
        font-Size:16px;
        line-height:30px;
      }
      .if_you_text{
        font-Size:17px;
        line-height:30px;
      }
      @media(max-width: 992px){
 
        .exm_input_text_title {
          font-size: 20px;
          line-height: 25px;
        }
        .example_listing {
          font-size: 16px;
          line-height: 25px;
        }
        .if_you_text{
          font-Size:14px;
          line-height:28px;
        }
        .if_you_text{
          font-Size:15px;
          line-height:28px;
        }
        .example_listing_block{
          padding-bottom: 20px
        }
        .order_1{
          order:1;
        }
        .order_2{
          order:2;
        }
        .step_block_order{
          display:flex;
          flex-flow: wrap;
        }
    }
    @media(max-width: 767px){
  
      .exm_input_text_title {
        font-size: 18px;
        line-height: 25px;
      }

      .example_listing {
        font-size: 14px;
        line-height: 18px;
        position:unset
      }
      .if_you_text{
        font-Size:14px;
        line-height:28px;
      }

      .if_you_text{
        font-Size:14px;
        line-height:16px;
      }
      .example_listing_block{
        padding-bottom: 20px
      }
      .example_listing_block img{
        width:18px;
        height:18px;
      }
      .order_1 img{
        margin-bottom:24px
      }
      
    }
  }
 
  .flexible_step_2_padding{
    padding-right:10%
  }
  .card_heading {
    font-size: 35px;
    line-height: 45px;
    margin-bottom:20px;
    color:#09425A
  }
  .feelings_card {
    box-shadow: none;
    padding: 0;
    background-color: #fff;
    border-radius: 0;
    margin-bottom:0
  }
  .sub_heading{
    font-size:30px;
    line-height:32px;
    color:#09425A;
    font-weight:bold
  }
  .card-selection {
    margin: 30px 0 0 -20px;
  }
  .card-selection ul.selection {
    padding: 0 0 0 25px;
  }
  .bottom_scale_card {
    box-shadow: none;
    padding: 0;
    background-color: #fff;
    border-radius: 0;
    margin-bottom:0
  }
  .bottom_scale_card .on_a_scale{
    font-size:30px;
    line-height:32px;
    color:#09425A;
    font-weight:bold;
    margin-bottom:40px
  }
  @media(max-width: 1366px){
    .flexible_step_2_padding{
      padding-right:15px
    }
    .card_heading {
      font-size: 33px;
      line-height: 40px;
    }
    .sub_heading, .bottom_scale_card .on_a_scale{
      font-size:27px;
      line-height:30px;
    }
  }    
  @media(max-width: 1200px){
    .card_heading {
      font-size: 30px;
      line-height: 35px;
    }
    .sub_heading, .bottom_scale_card .on_a_scale{
      font-size:25px;
      line-height:28px;
    }
  }    
  @media(max-width: 992px){
    .card_heading {
      font-size: 27px;
      line-height: 32px;
      margin-bottom:10px;
    }
    .sub_heading, .bottom_scale_card .on_a_scale{
      font-size:22px;
      line-height:25px;
    }
    .card-selection {
      margin: 15px 0 0 -20px;
    }
    .bottom_scale_card .on_a_scale{
      margin-bottom:20px;
    }
  }
  @media(max-width: 767px){
    .card_heading {
      font-size: 25px;
      line-height: 30px;
    }
    .sub_heading, .bottom_scale_card .on_a_scale{
      font-size:20px;
      line-height:23px;
    }
    .step_img{
      max-width:80%
    }
    
  }

  .flexible_padding{
    padding-right:8%
  }
  .main_heading{
    font-size:35px;
    font-height:45px;
    font-weight:bold;
    color:#09425A;
    margin-bottom:30px
  }
  .sub_main_heading{
    font-size:30px;
    font-height:32px;
    font-weight:bold;
    color:#09425A;
    margin-bottom:20px
  }
  .plus_img{
    width:62px;
    height:62px;
    margin-top:20px;
    margin-bottom:20px;
  }
  .input_radius input{
    border-radius:25px;
    padding-left:25px;
    padding-right:25px
  }
  @media(max-width: 1366px){
    .main_heading{
      font-size: 33px;
      line-height: 40px;
    }
    .sub_main_heading{
      font-size:27px;
      line-height:30px;
    }
  }
  @media(max-width: 1200px){
    .main_heading{
      font-size: 30px;
      line-height: 35px;
      margin-bottom:25px
    }
    .sub_main_heading{
      font-size:25px;
      line-height:28px;
      margin-bottom:15px
    }
  }
  @media(max-width: 992px){
    .main_heading{
      font-size: 27px;
      line-height: 32px;
      margin-bottom:27px
    }
    .sub_main_heading{
      font-size: 22px;
      line-height: 25px;
    }
    .plus_img{
      width:40px;
      height:40px;
    }
    .flexible_padding{
      padding-right:15px
    }
  }
  @media(max-width: 767px){
    .main_heading{
      font-size: 25px;
      line-height: 30px;
    }
    .sub_main_heading{
      font-size: 20px;
      line-height: 23px;
    }
  }
  .main_para{
    font-size:25px;
    line-height:32px;
    color:#09425A;
    margin-bottom:20px;
  }
  @media(max-width: 1366px){ 
    .main_para{
    font-size:23px;
    line-height:30px;
    }
  }
  @media(max-width: 1200px){ 
    .main_para{
    font-size:19px;
    line-height:27px;
    }
  }
  @media(max-width: 992px){ 
    .main_para{
    font-size:16px;
    line-height:25px;
    }
  }
  @media(max-width: 767px){ 
    .main_para{
    font-size:14px;
    line-height:18px;
    }
  }
  .step_7 .card-selection {
    margin: 0px 0 0 -20px;
  }
  .list_img img{
    margin-right:15px
  }
  .step_6 .example_listing_block{
    padding-left:0 !important;
  }
`;

export const ToolDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;


  .luke_tags{
    .tags{
      align-items: flex-start;
    }
  }
  .tags {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    // align-items: center;
    
    

    @media(max-width: 992px){
      align-items: center;
    }
  }
  .tools_details_text{
    padding-right: 65px;

    @media(max-width: 1366px){
      padding-right: 40px;
    }

    @media(max-width: 1200px){
      padding-right: 20px;
    }
    @media(max-width: 992px){
      padding-right: 0px;
      margin-bottom: 9px;
    }
  }
  .tags-details-icon{
    // margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tags-details-first {
    margin-top: 0px;
    margin-right: 25px;

    @media(max-width: 767px){
      margin-right: 0px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .tags {
      justify-content: space-between;
    }
  }




  @media(max-width: 1366px){
    margin-top: 30px;
  }
  @media(max-width: 1200px){
    margin-top: 25px;
  }
  @media(max-width: 992px){
    margin-top: 20px;
  }
  @media(max-width: 767px){
    margin-top: 15px;
  }
`;

export const ToolSpecialityTitle = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  color: #0099ba;
  font-family: 'Source Sans Pro';
  line-height: 32px;
  margin-bottom: 6px;


  @media(max-width: 1366px){
    font-size: 28px;
    line-height: 32px;
  }
  @media(max-width: 1200px){
    font-size: 25px;
    line-height: 28px;
  }
  @media(max-width: 992px){
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 0px;
  }
  @media(max-width: 767px){
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }



`;

export const ToolSpeciality = styled(Box)`
  font-size: 25px;
  font-weight: normal;
  color: #09425a;
  font-family: 'Source Sans Pro';
  line-height: 32px;

  
  @media(max-width : 1366px){
    font-size: 22px; 
    line-height: 32px;
  }
  
  @media(max-width : 1200px){
    font-size: 20px; 
    line-height: 30px;
  }
  
  @media(max-width : 992px){
    font-size: 15px; 
    line-height: 20px;
  }
  
  @media(max-width : 767px){
    font-size: 12px;
    line-height: 16px;
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
  line-height: 21px;
  margin-bottom: 6px;

  @media(max-width: 1366px){
    font-size: 18px;
  }
  @media(max-width: 1200px){
    font-size: 16px;
  }
  @media(max-width: 992px){
    font-size: 14px;
    margin-bottom: 0px;
  }
  @media(max-width: 767px){
    font-size: 12px;
  }
`;

export const CardTags = styled.span`
  color: #09425a;
  font-size: 21px;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  line-height: 25px;

  @media(max-width: 1366px){
    font-size: 18px;
    line-height: 20px;
  }
  @media(max-width: 1200px){
    font-size: 16px;
    line-height: 18px;
  }
  @media(max-width: 992px){
    font-size: 14px;
    margin-bottom: 0px;
    line-height: 16px;
  }
  @media(max-width: 767px){
    font-size: 12px;
    line-height: 10px;
  }
`;

export const CardRating = styled(Rating)`
  .MuiRating-iconEmpty {
    color: #ffffff !important;
    stroke: #cfd7d9 !important;
  }

  &.MuiRating-iconFilled{
    color: red !important;
  }

  .MuiRating-label{
    margin-bottom: 0px;
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
  }


  @media(max-width: 1366px){
    .MuiSvgIcon-root {
      width: 25px !important;
      height: 25px !important;
    }
  }
  @media(max-width: 1024px){
    .MuiSvgIcon-root {
      width: 22px !important;
      height: 22px !important;
    }
  }
  @media(max-width: 992px){
    .MuiSvgIcon-root {
      width: 20px !important;
      height: 20px !important;
    }
  }
  @media(max-width: 767px){
    .MuiSvgIcon-root {
      width: 15px !important;
      height: 15px !important;
    }
  }

  &.tools_details_page {
    .MuiSvgIcon-root {
     @media(max-width: 1366px) {
       width: 30px !important;
       height: 30px !important;
     }

     @media(max-width: 767px) {
       width: 24px !important;
       height: 24px !important;
     }
   }
 }

`;

export const CardIconButton = styled(IconButton)`
  padding: 6px !important;



  &.tool-card img{
    width: 30px;
    height: 30px;
  }

  &.tool-card {
    .favorite-icon{
      font-size:30px !important;
    }
  }

  .favorite-icon{
    color:#09425a;
    font-size:32px;
  }

  @media(max-width: 1550px){
    
    &.tool-card img{
      width: 26px;
      height: 26px;
    }

    &.tool-card {
      .favorite-icon{
        font-size:26px !important;
      }
    }
  }

  @media(max-width: 1366px){
    .favorite-icon{
      font-size:30px;
    }
    img{
      width: 30px;
      height: 30px;
    }

    &.without-carousel-card {
      padding: 4px !important;

      .favorite-icon{
        font-size:26px !important;
      }

      img{
        width: 26px;
        height: 26px;
      }
    }
    
  }
  @media(max-width: 1200px){
    .favorite-icon{
      font-size:28px;
    }
    img{
      width: 28px;
      height: 28px;
    }
    &.tool-card{
      padding: 4px !important;

      .favorite-icon{
        font-size:20px !important;
      }

      img{
        width: 20px;
        height: 20px;
      }
    }
    &.without-carousel-card {
      padding: 4px !important;

      .favorite-icon{
        font-size:26px !important;
      }

      img{
        width: 26px;
        height: 26px;
      }
    }
  }

  @media(max-width: 992px){
    .favorite-icon{
      font-size:26px;
    }
    img{
      width: 26px;
      height: 26px;
    }

    &.tool-card{
      .favorite-icon{
        font-size:28px !important;
      }

      img{
        width: 28px;
        height: 28px;
      }
    }
  }

  @media(max-width: 767px){
    .favorite-icon{
      font-size:24px;
    }
    img{
      width: 24px;
      height: 24px;
    }

    &.tool-card{
      .favorite-icon{
        font-size:20px !important;
      }

      img{
        width: 20px;
        height: 20px;
      }
    }
  }

`;

export const ExploreToolsWrappers = styled(Box)`
  text-align: right;
  > button {
    border-radius: 40px;
    max-width: 100%;
    min-width: 414px !important;
    width: fit-content !important;
    font-family: 'Source Sans Pro';
    text-transform: unset;
    font-size: 25px !important;
    font-weight: 600 !important;
    margin-top: 70px;
  }

  @media(max-width: 1366px){
    > button {
      font-size: 22px !important;
      margin-top: 30px;
    }
  }
  @media(max-width: 1200px){
    > button {
      font-size: 20px !important;
      margin-top: 40px;
    }
  }

  @media(max-width: 992px){
    &.tools_details_button{
      width: 100%;
    }
    > button {
      width: 100% !important;
      font-size: 18px !important;
      margin-top: 18px;
      min-width: 100% !important;
    }
  }
  @media(max-width: 767px){
    > button {
      width: 100% !important;
      font-size: 14px !important;
      margin-top: 18px;
    }
  }



`;

export const ModalWrapper = styled(Modal)`
  margin: 0px auto;
  position: absolute !important;
`;

export const HistoryPanel = styled.div`
  border-bottom: 1px solid #A9BDC5;

  .history-content{
    cursor: pointer;
    margin: 16px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sub-detail{
      display: flex;
      align-items: center;
      margin-right: 20px;

      .count{
        background: #A9BDC5;
        width:47px;
        height: 47px;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right: 45px;

        .count-text{
          margin: -2px 0px 0px -2px;
          color: #FFFFFF;
          font-weight: 700;
        }
      }

      img{
        width:8px;
        height: auto;
      }
    }
  }

  @media(max-width: 1366px){
    .history-content{
      margin: 15px 0px;
  
      .sub-detail{
        margin-right: 18px;
  
        .count{
          width:40px;
          height: 40px;
          margin-left: 35px;
          margin-right: 35px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 600;
          }
        }
  
        img{
          width:7px;
          height: auto;
        }
      }
    }
  }
  @media(max-width: 1200px){
    .history-content{
      margin: 14px 0px;
  
      .sub-detail{
        margin-right: 16px;
  
        .count{
          width:35px;
          height: 35px;
          margin-left: 30px;
          margin-right: 30px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 500;
          }
        }
  
        img{
          width:6px;
        }
      }
    }
  }

  @media(max-width: 992px){
    .history-content{
      margin: 13px 0px;
  
      .sub-detail{
        margin-right: 14px;
  
        .count{
          width:30px;
          height: 30px;
          margin-left: 25px;
          margin-right: 25px;
  
          .count-text{
            margin: -2px 0px 0px -1px;
            font-weight: 400;
          }
        }
  
        img{
          width:6px;
        }
      }
    }
  }

  @media(max-width: 767px){
    .history-content{
      margin: 18px 0px 16px 0px;
  
      .sub-detail{
        margin-right: 10px;
  
        .count{
          width:24px;
          height: 24px;
          margin-left: 16px;
          margin-right: 16px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 300;
          }
        }
  
        img{
          width:5px;
        }
      }
    }
`;

export const HistoryPanelPopUp = styled.div`
  border-bottom: 1px solid #A9BDC5;

  .history-content{
    cursor: pointer;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .doc-detail-arrows{
      margin-right: 8px;
    }

    .doc-detail-arrows .right-arrow{
      width:16px;
    }
  
    .doc-detail-arrows .down-arrow{
      width:25px;
    }
  

    .sub-detail{
      display: flex;
      align-items: center;
      margin-right: 20px;

      .count{
        background: #A9BDC5;
        width:47px;
        height: 47px;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right: 45px;

        .count-text{
          margin: -2px 0px 0px -2px;
          color: #FFFFFF;
          font-weight: 700;
        }
      }

      img{
        width:16px;
        height: auto;
      }
    }
  }

  @media(max-width: 1366px){
    .history-content{
      margin: 15px 0px;
  
      .sub-detail{
        margin-right: 18px;
  
        .count{
          width:40px;
          height: 40px;
          margin-left: 35px;
          margin-right: 35px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 600;
          }
        }
  
        img{
          width:7px;
          height: auto;
        }
      }

      .doc-detail-arrows{
        margin-right: 7px;
      }

      .doc-detail-arrows .right-arrow{
        width:14px;
      }
    
      .doc-detail-arrows .down-arrow{
        width:22px;
      }
    }
  }
  @media(max-width: 1200px){
    .history-content{
      margin: 14px 0px;
  
      .sub-detail{
        margin-right: 16px;
  
        .count{
          width:35px;
          height: 35px;
          margin-left: 30px;
          margin-right: 30px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 500;
          }
        }
  
        img{
          width:6px;
        }
      }

      .doc-detail-arrows{
        margin-right: 6px;
      }

      .doc-detail-arrows .right-arrow{
        width:12px;
      }
    
      .doc-detail-arrows .down-arrow{
        width:20px;
      }
    }
  }

  @media(max-width: 992px){
    .history-content{
      margin: 13px 0px;
  
      .sub-detail{
        margin-right: 14px;
  
        .count{
          width:30px;
          height: 30px;
          margin-left: 25px;
          margin-right: 25px;
  
          .count-text{
            margin: -2px 0px 0px -1px;
            font-weight: 400;
          }
        }
  
        img{
          width:6px;
        }
      }
      .doc-detail-arrows{
        margin-right: 5px;
      }

      .doc-detail-arrows .right-arrow{
        width:10px;
      }
    
      .doc-detail-arrows .down-arrow{
        width:17px;
      }
    }
  }

  @media(max-width: 767px){
    .history-content{
      margin: 12px 0px;
  
      .sub-detail{
        margin-right: 10px;
  
        .count{
          width:24px;
          height: 24px;
          margin-left: 16px;
          margin-right: 16px;
  
          .count-text{
            margin: -2px 0px 0px 0px;
            font-weight: 300;
          }
        }
  
        img{
          width:5px;
        }
      }
      
      .doc-detail-arrows{
        margin-right: 4px;
      }

      .doc-detail-arrows .right-arrow{
        width:8px;
      }
    
      .doc-detail-arrows .down-arrow{
        width:14px;
      }
    }
`;
