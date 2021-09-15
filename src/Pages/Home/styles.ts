import styled from "styled-components";
import { Background } from "../../Components/Background";

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
    font-size: 19px;
    font-weight: 600;
  }
  > h1 {
    font-size: 3rem;
    margin: 30px 0;
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
      font-family: var(--Font-Saira);
      font-weight: 600;
      text-align: center;
      font-size: 24px;
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
        font-weight: 600;
        text-align: center;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 320px) {
    p {
      font-size: 17px;
    }
  }
  //Desktop
  @media (min-width: 1024px) {
    > p {
      font-size: 24px;
      padding: 0 100px;
    }
    > div {
      width: 50vh;
      display: flex;
      flex-flow: column;
      align-items: center;
      > button {
        margin-right: 10vh;
        height: 60px;
      }
      p ~ button {
        margin-left: 30vh;
      }
      p {
        padding: 10px;
        font-weight: 600;
        text-align: center;
        font-size: 24px;
      }
    }
  }
`;
