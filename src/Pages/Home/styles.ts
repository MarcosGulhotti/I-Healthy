import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  > p {
    font-family: var(--Font-Saira);
    color: var(--Second-Black);
    font-size: 18px;
    font-weight: 600;
  }
  > h1 {
    padding: 50px;
    color: var(--Second-Black);
    font-family: var(--Font-Roboto-Mono);
  }
  p + div {
    margin: 50px;
  }
  > div {
    text-align: start;
    p + button {
      margin-left: 10vh;
    }
    > p {
      text-align: center;
      padding: 10px;
      font-weight: bolder;
      text-align: center;
      font-size: 20px;
    }
  }
  @media (min-width: 460px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    > p {
      font-family: var(--Font-Saira);
      color: var(--Second-Black);
      font-size: 18px;
    }
    > h1 {
      padding: 60px;
      color: var(--Second-Black);
      font-family: var(--Font-Roboto-Mono);
    }
    > p + div {
      padding: 50px;
    }
    > div {
      width: 50vh;
      display: flex;
      flex-flow: column;
      align-items: center;
      > button {
        margin-right: 30vh;
      }
      p ~ button {
        margin-left: 60vh;
      }
      p {
        padding: 10px;
        font-weight: bolder;
        text-align: center;
        font-size: 20px;
      }
    }
  }
`;
