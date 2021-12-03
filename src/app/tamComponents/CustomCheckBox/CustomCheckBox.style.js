import styled from "styled-components";
import {
  Checkbox,
} from "@material-ui/core";

export const CheckboxWrapper = styled(Checkbox)`
  .MuiIconButton-label {
    .MuiSvgIcon-root {
      color: #0099ba;
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

export const CheckboxLabel = styled.label`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 0;
  letter-spacing: normal;
  text-align: left;
  color: #007c91;
  width: 100%;
`;