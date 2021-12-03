import styled from "styled-components";

// main tag should be moved to a main component
const StyledBody = styled.main`
  flex: 1 0 auto;
`;

export const Body = (props) => {
  return <StyledBody>{props.children}</StyledBody>;
};
