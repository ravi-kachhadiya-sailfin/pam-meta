import styled from "styled-components";

// A flexbox container that wraps the App component. Along with the flexbox attributes set
// in the Body and Footer components, it positions the Footer at the bottom of the viewport,
// or immediately after the Body if the Body extends below the viewport.
const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position:relative;
`;

export const Page = (props) => {
  return <StyledPage>{props.children}</StyledPage>;
};
