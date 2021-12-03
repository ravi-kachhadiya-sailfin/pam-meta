import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const ContentWrapper = styled(Box)`
  padding: 38px 90px 0px 162px;
  background-color: #eff3f4;
  font-family: 'Source Sans Pro';
  color: #09425a;

  @media (min-width: 481px) and (max-width: 768) {
    padding: 20px 40px 0px 40px;
  }

  @media only screen and (max-width: 480px) {
    padding: 20px 20px 0px 16px;
  }
`;
