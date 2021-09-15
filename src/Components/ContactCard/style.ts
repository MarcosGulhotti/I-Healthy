import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 300px;
  height: 600px;
  background-color: var(--Main-Black);
  border-radius: 10px;
  box-shadow: 10px 10px 25px -8px #000000;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  .Profile {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid var(--Main-Gray);
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    border-radius: 100%;  
    cursor: pointer;
    width: 60px;
    height: 60px;
  }
`;

export const StyledNameRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5rem;

  h1 {
    color: var(--Main-White);
    font-family: var(--Font-Roboto-Mono);
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  h2 {
    color: var(--Main-White);
    font-family: var(--Font-Roboto-Mono)
  }
`;

export const StyledCellphone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;

  i {
    font-size: 30px;
    color: var(--Main-White);
    margin-right: 1rem;
  }
  
  p {
    color: var(--Main-White);
    font-family: var(--Font-Saira);
    font-weight: bold;
  }
`;
