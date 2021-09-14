import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  > h1 {
    padding: 50px;
    font-family: var(--Font-Roboto-Mono);
    color: var(--Second-Black);
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
      padding: 20px;
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
`;
