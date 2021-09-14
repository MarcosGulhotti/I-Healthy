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
`;
export const User = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-family: var(--Font-Roboto-Mono);
  > h2 {
    font-size: 36px;
  }
  > p {
    font-size: 24px;
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
      font-size: 24px;
      margin-bottom: 15px;
      /* margin: 6px; */
      text-align: center;
      width: 202px;
    }
  }
`;
export const Modal = styled.div<{ modal: boolean }>`
  position: absolute;
  top: 160px;
  left: 51%;
  padding: 30px;
  background: var(--Second-Black);
  font-family: var(--Font-Roboto-Mono);
  border-radius: 0 0.75rem;
  z-index: 10;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.modal ? "100" : "0")};
  ul {
    li {
      background: var(--Main-Gray);
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 0.5rem 0;
      font-weight: 600;
      color: var(--Main-Black);
      display: flex;
      flex-flow: wrap;
      word-break: keep-all;
      max-width: 250px;
    }
  }

  @media (max-width: 400px) {
    left: 30%;
  }
`;
