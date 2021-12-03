import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const ToolsSectionWrapper = styled.section`

.bt_date_col{
  padding: 0 30px;
  @media(max-width: 1200px){
    padding: 0 15px;
  }
}

.by_date_row{
  margin-left: -30px;
  margin-right: -30px;
  max-width: initial;
  width: auto !important;


  @media(max-width: 1200px){
    margin-left: -15px;
    margin-right: -15px;
  }
}

.my_last_activity_row{
  @media(min-width: 1200px){
    margin-right: -30px;
    margin-left: -30px;
  }
}
.my_last_activity_col{
  @media(min-width: 1200px){
    padding-right: 30px;
    padding-left: 30px;
  }
}

  padding-top: 70px;
  background-color: #eff3f4;

  // .main_tools_slider{
  //   @media(max-width:767px){
  //     padding: 0px;
  //   }
  // }

  .tab_data{
    margin-bottom: 100px;

    @media(max-width: 767px){
      margin-bottom: 70px;
    }
  }
  .tab_home{
    margin-bottom: 50px;

    ::-webkit-scrollbar
    {
      width: 12px;  /* for vertical scrollbars */
      height: 0px; /* for horizontal scrollbars */
    }

    @media(max-width: 992px){
      justify-content: center;
      margin-top: 50px !important;

    }
    @media(max-width: 767px){
      margin-bottom: 10px;


      margin-top: 30px;
      display: -webkit-inline-box;
      width: 100%;
      flex-wrap: nowrap;
      max-width: 100%;
      overflow: auto;
    }

    .tab_text{
      margin-right: 60px !important;
      cursor: pointer;

      :last-child{
         @media(max-width: 992px){
           margin-right:0px !important; 
         }
      }

        @media(max-width:1366px){
            font-size: 35px !important;
          }
        @media(max-width: 1200px){
            font-size: 30px !important;
          }
        @media(max-width: 992px){
            font-size: 25px !important;
            line-height: 30px;
             margin-right: 40px !important;
             margin-bottom: 00px !important; 
          }
        @media(max-width: 767px){
            font-size: 20px !important;
            line-height: 30px;
            padding-bottom: 10px !important:
          }

      u{
        text-decoration: unset;
        font-size: 38px;
        font-weight: 700;

       @media(max-width: 767px){
          white-space: nowrap;
       }
      }
    }


    .activetab{
      margin-right: 60px !important;
      cursor: pointer;


      :last-child{
         @media(max-width: 992px){
           margin-right:0px !important;
         }
      }
        @media(max-width:1366px){
            font-size: 35px !important;
          }
        @media(max-width: 1200px){
            font-size: 30px !important;
          }
        @media(max-width: 992px){
            font-size: 25px !important;
            line-height: 30px;
            margin-right: 40px !important;
            margin-bottom: 0px !important;
          }
        @media(max-width: 767px){
            font-size: 20px !important;
            line-height: 30px;
            padding-bottom: 10px !important;
          }

        
      u{
        border-bottom: 7px solid #3599ba;
        padding-bottom: 10px;
        text-decoration: unset; 


        @media(max-width:1366px){
          border-bottom: 6px solid #3599ba;
        }
        @media(max-width: 1200px){
          border-bottom: 5px solid #3599ba;
        }
        @media(max-width: 992px){
          border-bottom: 4px solid #3599ba;
        }
        @media(max-width: 767px){
          padding-bottom: 2px ;
          border-bottom: 3px solid #3599ba;
        }
      }
    }
  }
  .login_after_row{

    @media(max-width: 992px){
      display: flex;
      flex-direction: column;
      padding-top: 0px;
    }
    @media(min-width: 1200px){
      margin-right: -30px;
      margin-left: -30px;
    }
  }
  .login_after_right{
    padding-top: 82px;

    @media(min-width: 1200px){
      padding-right: 30px;
      padding-left: 30px;
    }
    @media(max-width: 1200px){
      padding-top: 74px;
    }
    @media(max-width: 992px){
      padding-top: 0px;
      padding-bottom: 35px;
      margin-top: -120px;
      order: 1;
    }
  }

  .login_after_left{
    @media(max-width: 992px){
        order: 2;
      } 
    @media(min-width: 1200px){
      padding-right: 30px;
      padding-left: 30px;
    }
  }


  .feelings_card{
    border-radius: 30px;
  }
  .rate_card{
    border-radius: 30px;
  }
  .experienced_card{
    border-radius: 30px;
  }
  .container {
    width: 100%;
    max-width: 1550px;

    @media(max-width: 1366px){
      width: 100%;
      max-width: 1250px;
    }
  }

  .testimonials_wrapper{
    margin-top: 62px;
    margin-bottom: 115px;
    

    @media(max-width:992px){
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }

  .testimonials_title{
    font-size: 38px;
    margin-bottom: 20px;

    @media(max-width:992px){
      font-size: 20px;
      text-align: center;
      margin-bottom: 0px;
    }
  }

   .rate_level{
      margin-top: 30px;
      margin-bottom: 20px;
      padding: 0;
      margin-left: 10px;
      margin-right: 10px;
      width: calc(100% - 20px);      
    }
    @media only screen and (max-width:767px){
        padding-top: 35px;

        .help_me_find { 
          h1{
                margin-bottom: 15px;
                font-size: 20px;
                text-align: left;
          }
        }
        .rate_level{
          padding: 20px 10px 20px 0px;
          margin-top: 10px;
            margin-left: 0px;
            margin-right: 0px;
            width: calc(100% - 0px);
        }
        .help_me_find{
          .card-title{
            font-size: 20px;
          }
          .card-number{
            width: 20px;
            height: 20px;
            display: flex;
            align-items:center;
            justify-content:center;
            min-width: 20px;
            font-size: 14px;
          }
          .MuiSlider-thumb{
            width: 10px;
            height: 10px;
          }
          .MuiTypography-body1{
            font-size: 15px;
          }
          .MuiSvgIcon-root{
            width: 20px;
            height: 20px;
          }
          .MuiGrid-container{
            flex-direction:column;
          }
         
        }
    }
`;
export const ToolsRightFormMeTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #09425a;
  font-size: 18px;
  ${'' /* font-weight: bold; */}

  .tools-right-for-me-title {
    font-weight: normal !important;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    width: 80%;
  }
.card-header{

    .card-title{
      font-size:10px;
    }
}
`;


