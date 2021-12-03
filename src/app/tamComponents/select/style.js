import styled from 'styled-components';
import { Box, MenuItem, Select } from '@material-ui/core';

export const SelectWrapper = styled(Select)`
padding: 9px 30px;
font-family: "Source Sans Pro", sans-serif !important;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
width: 100% !important;
height: 68px !important;
border-radius: 33px;
background-color: #eff3f4;
margin-top: 5px !important;
font-size: 25px !important;

&.healthcare-select{
  background:"red";
}

@media(max-width: 1366px){
  height: 52px !important;
  padding: 9px 25px;
}

@media(max-width: 1200px){
  font-size: 18px !important;
}
@media(max-width: 767px){
  padding: 9px 40px 9px 15px ;
}
@media(max-width: 767px){
  height: 42px !important;
  font-size: 15px !important;
}

& .MuiSvgIcon-root {
  color: #0099ba;
  height: 40px;
  width: 40px;
  top: unset;
  right: 15px;

}

.MuiSelect-select:focus {
  border-radius: inherit;
  background-color: unset;

}

//Todo while active or focused change selected area shape
.MuiSelect-select.MuiSelect-select {

}


@media only screen and (max-width: 767px) {
  & .MuiSvgIcon-root {
    color: #0099ba;
    height: 30px;
    width: 30px;
    top: unset;

  }
},
`;

export const SelectLabel = styled.label`
font-family: 'Source Sans Pro', sans-serif;
font-size: 32px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
color: #09425a;
width: 100%;
margin-bottom: 11px;
margin-left: 15px;

@media(max-width: 1366px){
  font-size: 28px;
  margin-bottom: 4px; 
}
@media(max-width: 1200px){
  font-size: 24px;
  margin-bottom: 4px; 
}
@media(max-width: 767px){
  font-size: 14px;
  margin-bottom: 4px;
}

.star_input{
  font-size: 30px;
  color: #007C91;
  line-height: 32px;
  font-weight: 400;

  @media(max-width : 767px){
    font-size: 14px;
    line-height: 16px;
  }
}


  
`;

export const SubLabel = styled.label`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;
  margin-bottom: 0px;

  @media(max-width:  1366px){
    font-size: 20px;
  }
  @media(max-width:  1200px){
    font-size: 16px;
  }
  @media(max-width: 767px){
    font-size: 12px;
  }

.sub-label {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #a9bdc5;
  margin-bottom: 0px;

  @media(max-width:  1366px){
    font-size: 20px;
  }
  @media(max-width:  1200px){
    font-size: 16px;
  }
  @media(max-width: 767px){
    font-size: 12px;
  }
}
`;

export const MenuItemWrapper = styled(MenuItem)`
  font-size: 16px !important;
`;

export const PlaceHolderWrapper = styled(Box)`
  color: #a9bdc5;
  font-family: 'Source Sans Pro';
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  height: 33px;
  display: inline-flex;
  align-items: center;

  &.placeholder{
    color:#09425a;
  }


  @media (max-width: 1200px){
    font-size: 16px;
  }
`;
