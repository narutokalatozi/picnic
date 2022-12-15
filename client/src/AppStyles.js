import styled from "styled-components";

export const StyledApp = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
`;
