import styled from 'styled-components'

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
  margin-top: 1rem;
  margin-bottom: 5rem;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
