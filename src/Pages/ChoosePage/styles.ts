import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  > h1 {
    margin: 30px 0;
    font-family: var(--Font-Roboto-Mono);
    color: var(--Second-Black);
    font-size: 3rem;
  }
  > p {
    color: var(--Second-Black);
    font-family: var(--Font-Saira);
    font-size: 19px;
    font-weight: 600;
  }
  p + div {
    padding: 50px;
  }
  > div {
    width: 50vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    > p {
      margin: 10px 0;
      font-size: 24px;
      font-family: var(--Font-Saira);
      font-weight: 600;
    }
    > button {
      margin-right: 5rem;
    }
    p ~ button {
      margin-left: 9rem;
    }
  }
  //desktop
  @media (min-width: 1024px) {
    justify-content: center;
    > p {
      font-size: 24px;
      padding: 6rem 7rem;
    }
    > div {
      > button {
        margin-right: 10rem;
        height: 60px;
      }
      p ~ button {
        margin-left: 20rem;
      }
    }
  }
`;
export const Color = styled.strong`
  color: var(--Main-Orange);
`;
