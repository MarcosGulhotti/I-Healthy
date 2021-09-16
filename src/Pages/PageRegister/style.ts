import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 260px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column-reverse;
    justify-content: center;
    img {
      width: 600px;
    }
  }
`;
