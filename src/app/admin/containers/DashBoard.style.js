import styled from "styled-components";
import TableCell from '@material-ui/core/TableCell';
import { Button, TextareaAutosize } from "@material-ui/core";

export const AdminContainer = styled.div`
  background: #EFF3F4;
  font-family:  "Source Sans Pro", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .admin-container {
    width: 1381px;
    max-width: 1381px;

    @media(max-width: 1366px){
      width: 100%;
      max-width: 1250px;
    }
  }

  .page-container {
    padding: 75px 15px;
    width: 100%;
    max-width: 1591px;
  }

  .content-center{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-grid{
    display: flex;
    justify-content: center;
  }

  button{
    margin-top:0px;
    background: #0099BA;
    color: #FFFFFF;
    // font-size: 24px;
    font-size:18px;
    text-transform: none;
    font-family:  "Source Sans Pro", sans-serif;
    box-shadow: 0px 20px 60px #00000026;  
    font-weight: 600;
    // border-radius: 11px;
    border-radius: 9px;
  }

  .data-change-dashabord-btn{
    // min-width: 150px; 
    min-width: 113px;
    background: transparent;
    color: #09425A;
    border: 1px solid #09425A;

    &:hover{
      background: #09425a1a;
      color: #09425A;
    }

    &:focus {
      outline: none;
      color:white;
    }
  }

  .data-change-btn {
    min-width: 150px; 

    &:hover{
      background: #0099BA;
      color:white;
    }

    &:focus {
      outline: none;
      color:white;
    }
  }

  .btn{
    padding-right: 25px;
    padding-left: 25px;
    width: min-content !important;
    min-width: unset !important; 
  }

  .CSV-link{
    color: #ffffff;

    &:hover{
      text-decoration:none;
    }

    &:focus{
      text-decoration:none;
    }
  }

  .active-btn{
    background: #09425A;
    color:#FFFFFF;
    &:hover{
      background: #09425A;
      color:#FFFFFF;
    }
  }

  .shadow-none{
    box-shadow:none;
  }

  .shadow-display{
    box-shadow: 0px 20px 60px #00000026;  
  }

  .pagination-container{
    border-radius: 11px;
    background: #eef2f3;
    width: min-content;
  }

  .user-counter-box{
    margin:42px 0px;
    display: flex;
    justify-content:center;
  }

  .large-counter-box{
    display: flex;
    justify-content:center;
    margin: 42px 0px 57px 0px;
  }

  .counter-box-lg{
    width: 363px;
    height: 128px;
    background: #09425A;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 29px 30px;

    &.left{
      border-radius: 52px 23px 23px 52px;
    }

    &.right{
      border-radius: 23px 52px 52px 23px;
    }
  }

  .counter-box-mid{
    // width: 340px;
    // height: 105px;
    width: 255px;
    height: 79px;
    background: #F19840;
    border-radius: 30px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .counter-box-sm{
    // width: 255px;
    // height: 85px;
    width: 192px;
    height: 65px;
    background: #F19840;
    border-radius: 30px;
    margin: 0px 30px 49px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .chart-MH-700{
    min-height: 700px;
    max-height: 700px;
  }

  .chart-MH-600{
    min-height: 500px;
    max-height: 500px;
  }

  .chart-MH-500{
    min-height: 500px;
    max-height: 500px;
  }

  .table-MH-700{
    max-height: 700px;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #EFF3F4; 
    }
    ::-webkit-scrollbar-thumb {
      background: #A9BDC5; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #0099ba40; 
    }
  }

  .profileIcon {
    width: 268px;
    height: 268px;
    background-color: #fff;
    border-radius: 50%;
    // box-shadow: rgb(59 73 81 / 10%) 15px 15px 20px 0px;
    color: #a9bdc5;
    text-align: center;
    position: relative;

    @media(max-width: 1366px){
      width: 200px;
      height: 200px;
    }
    @media(max-width: 1200px){
      width: 170px;
      height: 170px;
    }

    @media(max-width: 992px){
      width: 120px;
      height: 120px;
    }
    @media(max-width: 767px){
      width: 80px;
      height: 80px;
    }

    .profile_placeholder {
      width: 100%;
      height: 100%;
    }
  }

  .profileImg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  .user-profile-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }

  .width-960{
    min-width: 960px;
    max-width: 960px;
  }

  .width-800{
    min-width: 800px;
    max-width: 800px;
  } 

  .thumbnailImage{
    width:50%;
    padding-right:17px;
  }
  .largeImage{
    width:50%;
    padding-left:17px;
  }
  
`;

export const CounterLG = styled.div`
  font-size: 47px;
  color: #FFFFFF;
  line-height: 37px;
`;

export const TextLG = styled.div`
  font-size: 27px;
  color: #FFFFFF;
  line-height: 32px;
  margin-top:5px;
`;

export const CounterMD = styled.div`
  font-size: 39px;
  color: #FFFFFF;
  line-height: 30px;
`;

export const TextMD = styled.div`
  font-size: 21px;
  color: #FFFFFF;
  line-height: 26px;
`;

export const CounterSM = styled.div`
  font-size: 29px;
  color: #FFFFFF;
  line-height: 23px;
`;

export const TextSM = styled.div`
  font-size: 16px;
  color: #FFFFFF;
  line-height: 19px;
  margin-top:5px;
`;

export const ChartContainer = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 29px;
  line-height: 23px;
  color: #0099BA;
  padding: 5px 0px;
  margin-bottom: 20px;


  &.title-line-height{
    line-height:45px;
  }

`;

export const FormFeildname = styled.div`
  font-size: 30px;
  line-height: 32px;
  color: #09425A;
  font-weight: bold;
  min-width: 15%;
`;

export const FeildContainer = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  margin-bottom: 25px;

  
  .multi-select-custom{

    .MuiSelect-icon{
      right: 16px;
      top: calc(50% - 20px);
    }

    .MuiSvgIcon-root{
      width: 2.5em;
      height: 2.5em;
      color: #0099ba;
    }

  &.normal-input-feild:hover {
    border: 1px solid #272d3b80;
  }

  &.normal-input-feild {
    border: 1px solid #272d3b80;
  }
  &.MuiInput-underline:before{
    border-bottom: 0px;
  }
  &.MuiInput-underline:hover:not(.Mui-disabled):before{
    border-bottom: 0px;
  }
  &.MuiInput-underline:after{
    border-bottom: 0px;
  }

    .select-chips{
      display:flex;
      flex-wrap: wrap;

      .MuiChip-root{
        display:flex;
        margin-bottom:10px;
        margin-right:10px;
        line-height:24px;
        font-size:16px;
        color:#09425a;
        background-color:#0099ba12;
      }
    }
    &.normal-input-feild{
      overflow:auto;
     
      &:hover{
        outline:none !important;
      }
      &:focus{
        outline:none !important
      }
    }
    .MuiSelect-select:focus {
      background-color: transparent !important;
    }
  }

  &.flex{
    display: flex;
    justify-content: space-between;
  }

  .normal-input-feild{
    padding: 10px 20px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #272d3b80;
    border-radius: 0px;

    :focus{
      outline: 1px solid #0096b880;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px;
    }
  }

  img{
    width: 100%;

    border-radius: 19px 19px 0px 0px;
  }

  option{
    text-size: 25px !important;
  }
`;

export const CustomFileInput = styled.div`
  border: 1px solid #272d3b80;
  border-radius: 0px;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 50%;

  input[type="file"]{
    display: none;
  }

  .flex{
    display: flex;
    align-items: center;
  }

  .button{
    border-radius: 13px;
    font-size: 30px;
    color: #EFF3F4;
    background: #0099BA;
    border: none;
    font-weight:400;
    padding: 6px 32px;
    cursor: pointer;
    margin-right: 14px;
    margin-bottom: 0px;
  }

  .file-name{
    font-size: 30px;
    line-height: 32px;
    color: #09425A;
    font-weight: bold;
    min-width: 15%;
    cursor: pointer;
  }


`;

export const ChartCard = styled.div`
  background: #FFFFFF;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0px 20px 60px #3E3E3E14;  
`;

export const ChartAndCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.div`
  font-size: 83px;
  font-weight: 300;
  color: #0099BA;
  line-height: 99px; 

  &.user-detials-title{
    padding-top: 21px;
    padding-bottom: 30px;
  }
`;

export const NormalCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 20px 60px #00000026;
  border-radius: 30px;
  margin-bottom: 60px;

  .hamburger-icon{
    color:#0099BA;
    font-size: 48px;
  }

`;

export const CardHeader = styled.div`
  padding-left: 50px;
  padding-right: 50px; 
  padding-top: 30px;
  padding-bottom: 20px;
  border-bottom: 1.5px solid #272D3B30;

  .user-details-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TableContainer = styled.div`
  padding: 42px;
  overflow:auto;

  &.border-btm{
    border: 1px solid #00000026; 
  }
`;

export const TableHeader = styled(TableCell)`
  font-size: 18px !important;
  font-weight: 700 !important;
  color:#09425A !important;
  padding: 12px !important;
  line-height: 24px !important;
  background:#FFFFFF !important;
  border-top: none !important;
  border-left: none !important;

  &.border-r-none{
    border-right:none !important;
  }
  &.border-b-none{
    border-right:none !important;
  }
`;

export const TableData = styled(TableCell)`
  font-size: 15px !important;
  font-weight: 700 !important;
  color:#A9BDC5 !important;
  padding: 12px !important;
  line-height: 21px !important;
  border-top: none !important;
  border-left: none !important;
  cursor:pointer;
  
  &.border-r-none{
    border-right:none !important;
  }
  &.border-b-none{
    border-bottom:none !important;
  }

  &.tag-color{
    color: #09425A !important; 
  }
`;

export const TableID = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: #20A8D8;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
`;

export const PaginationButton = styled(Button)`
  height: 56px;
  background: #FFFFFF !important;
  border-radius: unset !important;
  border-right: 1px solid #272D3B30!important;
  padding: 16px 12px!important;
  fonr-weight: 700!important;

  &.label{
    &.MuiButton-root{
      min-width: unset !important;
    }
  }

  &.active-pg-btn{
    background: #0099BA!important;

    &:hover{
      background: #0099BA!important;
    }
  }

  &.Mui-disabled{
    cursor: not-allowed !important;
    pointer-events: unset !important;

    &:hover{
      background: #FFFFFF !important;
    }
  }

  .MuiButtonBase-root.Mui-disabled{
    &:hover{
      background: #FFFFFF !important;
    }
   }

  &:hover{
    background: #0099ba00 !important;
  }

  &.prev-btn{
    border-radius: 11px 0px 0px 11px !important;
  }

  &.next-btn{
    border-radius: 0px 11px 11px 0px !important;
    border-right: unset !important;
  }
`;

export const PaginationBTNText = styled.div`
  color: #0099BA;
  font-size: 18px;
  line-height: 21px;

  &.active-pg-btn{
    color: #FFFFFF;

    &:hover{
      color: #FFFFFF;
    }
  }

  &:hover{
    color: #0099BA;
  }

  &.disabled{
    color: #A9BDC5;
  }
`;

export const Tags = styled.div`
  display:flex;
  flex-wrap:wrap;
`;

export const Tag = styled.div`
  width: max-content;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 4px;
  font-weight: 600 !important;
  border: 1px solid #e4e7e8;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const FtTextArea = styled(TextareaAutosize)`
    padding: 20px;
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