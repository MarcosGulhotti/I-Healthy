import styled from "styled-components";

export const Container = styled.div<{ isPacient: boolean }>`
  display: flex;
  justify-content: center;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 7px;
  color: var(--Main-White);
  background: var(--Main-Black);
  width: 100%;
  > div {
    > figure {
      display: flex;
      justify-content: center;
      height: 70px;
      width: 70px;
      padding: 20px;
      background: ${(props) => (props.isPacient ? "#37DB7F" : "#008FFF")};
      border-radius: 100%;
      > img {
        width: 60px;
      }
    }
  }
  @media (max-width: 400px) {
    > div {
      figure {
        margin: 0px;
        height: 55px;
        width: 55px;
      }
    }
    padding-bottom: 15px;
  }
  //desktop
  @media (min-width: 1024px) {
    justify-content: space-evenly;
    padding-bottom: 25px;
    > div {
      > figure {
        width: 100px;
        height: 100px;
        > img {
        }
      }
    }
  }
`;
export const User = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-family: var(--Font-Roboto-Mono);
  margin-right: 3rem;
  > h2 {
    font-size: 36px;
  }
  > p {
    font-size: 20px;
    margin-bottom: 25px;
    margin: 6px;
  }
  > button {
    background: var(--Main-Purple);
    color: var(--Main-White);
    width: 150px;
    padding: 5px;
    border: none;
    border-radius: 0.75rem 0;
    margin-top: 10px;
  }
  button:active {
    transform: scale(0.98);
    box-shadow: 9px 2px 32px 10px rgba(0, 0, 0, 0.24);
  }
  @media (max-width: 400px) {
    > button {
      width: 70%;
    }
    > h2 {
      font-size: 25px;
    }
    > p {
      font-size: 20px;
      margin-bottom: 15px;
      /* margin: 6px; */
      text-align: center;
      width: 202px;
    }
  }
  //desktop
  @media (min-width: 1024px) {
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 30px;
      font-family: var(--Font-Saira);
    }
    button {
      width: 250px;
      height: 28.87px;
    }
  }
`;
export const Modal = styled.div<{ modal: boolean }>`
  position: absolute;
  top: 160px;
  background: var(--Second-Black);
  font-family: var(--Font-Roboto-Mono);
  border-radius: 0 0.75rem;
  z-index: 10;

  width: 250px;
  padding: 10px;
  ul {
    width: 100%;
    height: 170px;
    li {
      background: var(--Main-Gray);
      margin-bottom: 28px;
      padding: 5px;
      border-radius: 0.5rem 0;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--Main-Black);
      display: flex;
      flex-flow: wrap;
      word-break: break-word;
      max-width: 250px;
    }
  }
  @media (max-width: 320px) {
    left: 21%;
  }
  @media (min-width: 375px) {
    left: 33%;
  }
  @media (min-width: 425px) {
    left: 41%;
  }
  //desktop
  @media (min-width: 1024px) {
    top: 21%;
    left: 53%;
  }
  @media (min-width: 1440px) {
    left: 57%;
  }
  @media (min-width: 1080px) {
    left: 59%;
  }
`;
