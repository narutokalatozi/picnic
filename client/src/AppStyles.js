import styled from "styled-components";

export const StyledApp = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  background-color: ${(props) => props.theme.body};
  transition: all 0.25s ease;
  height: 100%;
  padding: 1.5rem 2rem;
`;

export const PieStyled = styled.div`
  width: 250px;
`;
