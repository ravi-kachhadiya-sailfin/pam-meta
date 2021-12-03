import styled from "styled-components";

export const DiscoverToolsTool = styled.div`
  
     @media only screen and (max-width: 992px) {
          &:nth-child(even){
            margin-right: 10px;
          }
          &:nth-child(odd){
            margin-left: 10px;

            img{
                  order: 2;
            }
            
          }
         
     }
     @media only screen and (max-width: 992px) {
      &:nth-child(odd){
        .tool {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        padding: 2px 11px 2px 15px;
      }
    }
    
    }

.tool {

    min-height: 125px;
    padding: 2px 15px 2px 11px;
    backdrop-filter: blur(15px);
    box-shadow: 15px 15px 20px 0 rgb(59 73 81 / 10%);
    background-color: #09425a;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    width: 90%;
    float: right;
    cursor: pointer;
    transition: all 0.5s;
    margin-bottom: 20px;
    display: flex;
    align-items: center;


    @media(max-width: 1200px){
      min-height: 80px;
      width: 100%;
    }
    @media(max-width: 992px){
      min-height: 80px;
          justify-content: space-between;
    }
    @media(max-width: 767px){
      min-height: 64px;
    }

    img{
      width: 70px;
    margin-left: 20px;
    margin-right: 10px;


      @media (max-width: 1200px){
         width: 50px;
        margin-left: 10px;
        margin-right: 10px;
      }
      @media (max-width: 767px){
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    :hover {
      width: 100%;

      @media(max-width:1200px){
        width: 100%;
      }
    }
    .active {
      width: 280px;
    }
  
    .label {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 18px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
      display: table-cell;
      vertical-align: middle;
      padding:0px;
      margin-left:3px;
      white-space:inherit;

       @media(max-width: 1200px){
           font-size: 16px;
           line-height: normal;
       }
       @media(max-width: 767px){
         font-size: 14px;
        line-height: normal;


          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
       }
    }
    @media only screen and (max-width: 992px) {
      img{
        width:40px;
        height:40px;
      }
      .label {
        white-space: pre-line;
      }
      
      

     
    }
    

  }
  @media only screen and (max-width: 992px) {
    
        display: inline-block;
        width: calc(50% - 10px);
  }
`;
