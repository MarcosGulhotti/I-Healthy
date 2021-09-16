import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 720px) {
    .container-form {
      width: 50%;
      position: fixed;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      form {
        width: 60%;
        display: flex;
        flex-direction: column;

        svg {
          margin-right: 10px;
        }

        .container-input {
          margin: 20px 0;
          width: 100%;
        }
      }
    }
  }
`;
export const Content = styled.div``;
