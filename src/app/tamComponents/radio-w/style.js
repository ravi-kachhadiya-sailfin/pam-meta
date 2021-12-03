import { Radio } from "@material-ui/core";
import styled from "styled-components";

export const RadioWrapper = styled(Radio)`
  .MuiIconButton-label {
    .MuiSvgIcon-root {
      color: ${(props) => props.tam_color};
      width: 1.5em;
      height: 1.5em;
    }
  }
`;
