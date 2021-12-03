import styled from 'styled-components';
import { Select } from '@material-ui/core';

export const MyProgressStyle = styled.section`
  background-color: #eff3f4;
  padding-top: 70px;
  padding-bottom: 110px;

  .loader{
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart-right-arrow, .chart-left-arrow{
    bottom: 20px !important;
    cursor:pointer;
  }

  .chart-left-arrow{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    left: 0!important;
  }
  
 .chart{
  min-height: 520px;
  max-height: 520px;
  position: relative;

    > div{
      padding-right: 30px;
    }
    img{
      position: absolute;
      bottom: 5px;
      right: 0;

      &.disabled{
        cursor:not-allowed;
      }
    }
 }

  .progress_bar{
    width: 150px;
    height : 150px;

    .MuiCircularProgress-root{
      width: 150px;
      height : 150px;
    }

    
  }
  .chart_header{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  

  @media(max-width: 1366px){
    padding-top: 60px;
    padding-bottom: 100px;
    .chart{
      min-height: 490px;
      max-height: 490px;
    }
    .chart-right-arrow{
      bottom: 20px !important;
    }
    .chart-left-arrow{
      bottom: 20px !important;
      left: 0!important;
    }
    .chart_header{
      margin-bottom: 10px;
    }
  }
  @media(max-width: 1200px){
    padding-top: 50px;
    padding-bottom: 90px;

    .chart{
      min-height: 450px;
      max-height: 450px;
    }
    .chart-right-arrow{
      bottom: 18px !important;
      right: 0px !important;
    }
    .chart-left-arrow{
      bottom: 18px !important;
      left: 2px !important;
    }
    .chart_header{
      margin-bottom: 10px;
    }
  }
  @media(max-width: 992px){
    padding-top: 40px;
    padding-bottom: 80px;
    .chart-right-arrow{
      width:12px;
      height:auto;
      bottom: 13px !important;
      right: 2px !important;
    }
    .chart-left-arrow{
      width:12px;
      height:auto;
      bottom: 13px !important;
      left: 2px !important;
    }
    .chart{
      min-height: 400px;
      max-height: 400px;
    }
    .chart_header{
      margin-bottom: 10px;
    }
  }
  @media(max-width: 767px){
    padding-top: 30px;
    padding-bottom: 70px;

    .chart{
      min-height: 200px;
      max-height: 200px;
    }
    .chart-right-arrow{
      width:8px;
      height:auto;
      bottom: 19px !important;
      right: 4px !important;
    }
    .chart-left-arrow{
      
      width:8px;
      height:auto;
      bottom: 19px !important;
      left: 4px !important;
    }
    .chart_header{
      margin-bottom: 10px;
     padding: 2% 7% 0px 7%;
    }

  }

  .progress_tool_tab{
    margin-top: 100px;
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
  .bt_date_col{
    padding: 0 30px;
    @media(max-width: 1200px){
      padding: 0 15px;
    }
  }
  .recent_activity{
    margin-left: -30px;
    margin-right: -30px;
    width: auto !important; 
    max-width: initial;

    @media(max-width: 1200px){
      margin-left: -15px;
      margin-right: -15px;
    }


    .recent_activity_col{
      padding: 0 30px;

      @media(max-width: 1200px){
        padding: 0 15px 25px 15px;
      }
    }


  }
.click_button_desk{


    @media(max-width: 1366px){
      margin-top: 35px !important;
      margin-bottom: 50px !important;
    }
    @media(max-width: 1200px){
      margin-top: 25px !important;
      margin-bottom: 35px !important;
    }
    @media(max-width: 992px){
      margin-top: 20px !important;
      margin-bottom: 30px !important;
    }
    @media(max-width: 767px){
      display: none;
    }
  }

  .complete_profile_link{
    display: none;
    @media(max-width: 767px){
      display: block;
      margin-top: 8px !important;
      margin-bottom: 20px !important;
    }
  }
  .click_button_mobile{
    display: none;
    @media(max-width: 767px){
      display: block;
      margin-top: 8px !important;
      margin-bottom: 0px !important;
    }
  }
  .click_button{
    margin-top: 40px;
    margin-bottom: 56px;
    width: 100%;
    cursor: pointer;
    color: #0099BA;

    :hover{
      text-decoration: underline;
    }
    span{
      font-size: 25px;
      color: #0099BA;
      font-weight: 600;

      @media(max-width: 1366px){
        font-size: 22px;
      }
      @media(max-width: 1200px){
        font-size: 20px;
      }
      @media(max-width: 992px){
        font-size: 16px;
      }
      @media(max-width: 767px){
        font-size: 12px;
      }
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

  .container {
    width: 100%;
    max-width: 1550px;
      @media(max-width: 1366px){
        width: 100%;
        max-width: 1250px;
    }
  }
  .panel-body {
    border-radius: 30px;
    background-color: #ffffff;
    border: none;
    padding: 50px;
    margin-top: 10px;
    margin-bottom: 90px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    color: #09425a;
    box-shadow: 0px 20px 60px #3e3e3e14;



    @media(max-width: 1366px){
      margin-bottom: 80px;
    }
    @media(max-width: 1200px){
      margin-bottom: 60px;
      padding: 30px 20px 40px 10px;
    }
    @media(max-width: 992px){
      margin-bottom: 50px;
      padding: 20px 20px 30px 10px;
    }
    @media(max-width: 767px){
      margin-bottom: 40px;
      border-radius: 20px;
      padding: 10px 0px 0px 0px;
    }
  }
`
export const PageTitle = styled.div`
  color: #0099ba;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  font-size: 110px;
  line-height: 132px;
  margin-bottom: 34px;
  letter-spacing: normal;
  text-align: left;


  @media(max-width: 1366px){
    font-size: 80px;
    margin-bottom: 34px;
  }

  @media(max-width: 1200px){
    font-size: 70px;
    line-height: 75px;
    margin-bottom: 20px;
  }
  @media(max-width: 992px){
    font-size: 55px;
    line-height: 60px;
    margin-bottom: 10px;
  }
  @media(max-width: 767px){
    font-size: 45px;
    line-height: 50px;
    margin-bottom: 0px;
  }
`
export const PageDiscription = styled.div`
  color: #09425A;
  max-width: 100ch;
  padding: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  display: inline-block;
  font-size: 25px;
  line-height: 32px;

  @media(max-width: 1366px){
    font-size: 22px;
    line-height: 32px;
  }
  @media(max-width: 1200px){
    font-size: 20px;
    line-height: 28px;
  }
  @media(max-width: 992px){
    font-size: 18px;
    line-height: 25px;
  }
  @media(max-width: 767px){
    font-size: 14px;
    line-height: 20px;
  }
`;
export const CardsTitle = styled.h1`
  margin: 0px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #0099ba;
  font-size: 38px;
  line-height: 30px;
  margin-top: 0px;
  margin-bottom: 38px;



  img{
    @media(max-width: 992px){
      width: 15px;
      height: 15px;
    }
  }

  &.recent_activity_title{
    @media(max-width: 1366px){
      font-size: 34px;
      line-height: 38px;
      margin-bottom: 30px;
    }
    @media(max-width: 1200px){
      font-size: 30px;
      line-height: 34px;
      margin-bottom: 25px;
    }
    @media(max-width: 992px){
      font-size: 20px;
      line-height: 22px;
      margin-bottom: 20px;

      justify-content: space-between;
      display: flex;
      align-items: center;
    }


    img{
      margin-left: 50px !important;


      @media(max-width: 992px){
        margin-right: 10px !important;
      }
    }
  }

  &.profile_text{
    margin-top: 36px;
    margin-bottom: 4px;



    @media(max-width: 1366px){
      font-size: 34px;
      line-height: 30px;
    }
    @media(max-width: 1200px  ){
      font-size: 30px;
      line-height: 30px;
      margin-top: 30px;
    }
    @media(max-width: 992px){
      font-size: 25px;
      line-height: 30px;
      margin-top: 25px;
    }
    @media(max-width: 767px){
      font-size: 20px;
      line-height: 25px;
      margin-top: 20px;
    }
  }
`;
export const TypeSelect = styled(Select)`
  padding: 8.6px 34px 8.7px 34px;
  font-family: "Source Sans Pro", sans-serif !important;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  width: 40% !important;
  height: 66px !important;
  border-radius: 16.7px;
  background-color: #eff3f4;
  font-size: 16px !important;
  border-radius: 33px;
  color: #007C91;

  &.chart-dropdown{
    width: 40%;
    float:right;
  }
  

  .MuiSelect-root {
      color: #007C91;
  }
  & .MuiSvgIcon-root {
    color: #0099ba;
    height: 40px;
    width: 40px;
    top: unset;

  }

  .MuiSelect-select:focus {
    border-radius: inherit;
    background-color: unset;

  }

  //Todo while active or focused change selected area shape
  .MuiSelect-select.MuiSelect-select {

  }

  @media(max-width: 1366px){
    &.chart-dropdown{
      height: 50px !important;
      > div{
        font-size : 30px !important;
      }
    }
  }

  @media(max-width: 1200px){
    &.chart-dropdown{
      height: 50px !important;
      > div{
        font-size : 28px !important;
      }
    }
  }

  @media(max-width: 992px){
    &.chart-dropdown{
      padding: 8px 25px;
      height: 50px !important;

      > div{
        font-size : 25px !important;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    & .MuiSvgIcon-root {
      color: #0099ba;
      height: 30px;
      width: 30px;
      top: unset;

    }
    &.chart-dropdown{
      padding: 8px 15px;
      width: 80% !important;
      height: 26px !important;

      > div{
        font-size : 18px !important;
      }
    }
  },
`;
;
