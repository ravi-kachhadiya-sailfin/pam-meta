import styled from "styled-components";

export const StyledHeader = styled.header`
  .brand-sitename > .wrap span {
    font-family: "Source sans pro";
  }

  .header-local {
    display: flex;
    justify-content: space-between;
  }

  .header-local .container {
    margin-left: 24px;
    margin-right: unset;
    padding-left: 0px;
    margin-top: 24px;
    margin-bottom: 24px;
    padding-right: 0px;
  }

  .brand {
    margin-top: 0px;
    margin-bottom: 0px;
    width: auto;
  }

  .display-name {
    margin: 10px 24px;
  }

  @media (max-width: 992px) {
    .header-local .container {
      margin-left: 24px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
`;
