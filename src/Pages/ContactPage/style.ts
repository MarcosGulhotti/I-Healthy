import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  background-color: var(--Second-Blue);
  overflow-x: hidden;

  @media (min-width: 769px) {
    height: 100vh;
  }
`;

export const StyledContactDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15vh;
  margin-bottom: 5rem;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  
  @media (max-width: 1024px) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
  }
`;
