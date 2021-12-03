import { Box } from '@material-ui/core';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

export const CarouselWrapper = styled(Carousel)`

  >div {
    :last-child {
      text-align: ${(props) => props.textAlign + "!important"};
      > button {
        :first-child {
          margin-left:0px !important;
        }
      }
    }

     @media only screen and (max-width: 1024px) {
      :last-child {
        text-align: center !important;
        > button {
          :first-child {
            margin-left:0px !important;
          }
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

export const CarouselItemWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
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
