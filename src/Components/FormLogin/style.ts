import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  form {
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 1rem;
    width: 85%;
  }

  .link {
    text-align: right;
  }

  svg {
    margin-right: 5px;
  }

  input {
    margin: 5px 0px;
  }
  .container-Buttons {
    margin: 8px 0px;

    .box-right {
      text-align: center;
      margin-left: 6rem;
    }
    .box-left {
      text-align: center;
      margin-right: 6rem;
    }
    p {
      text-align: center;
      font-family: var(--Font-Saira);
      margin: 10px 0px;
      font-size: 24px;
      font-weight: 600;
    }
  }
  p.link {
    margin-bottom: 50px;
  }

  @media (min-width: 1024px) {
    .container-Buttons {
      align-self: center;
      button {
        height: 60px;
      }
    }
  }
`;
