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
`;
export const User = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 350px) {
    > button {
      width: 100%;
    }
  }
`;
export const Modal = styled.div<{ modal: boolean }>`
  display: none;
  position: absolute;
  top: 160px;
  left: 40%;
  padding: 30px;
  background: var(--Main-Black);
  border-radius: 0 0.75rem;
  z-index: 10;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.modal ? "0" : "100")};
`;
