import styled from "styled-components";

export const StyledFooter = styled.footer`
  flex-shrink: 0;

  #footer .simple-footer > .legal-text {
    font-family: "Source sans pro";
    font-size: 14px;
    color: #666666;
  }

  #footer .footer-primary .footer-local {
    margin-right: unset;
    margin-left: unset;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }

  #footer .content {
    margin-left: unset;
    margin-right: unset;
    width: 100%;
  }

  #footer .footer-local .simple-footer {
    border-color: #cccccc;
    padding: 12px 24px;
  }

  #footer .footer-local .legal-text {
    padding: 0px 0px;
  }
`;
