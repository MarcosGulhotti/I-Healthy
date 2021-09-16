import styled from "styled-components";

export const Container = styled.div`
  margin-top: 25px;
  position: relative;
  max-height: 450px;

  form {
    margin: 0 auto;
    padding: 0 1rem;
    width: 80%;
  }

  .container-inputs {
    overflow: auto;
    max-height: 310px;
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
    margin: 10px 0px;

    .box-right {
      text-align: center;
      margin-left: 8rem;
    }
    .box-left {
      text-align: center;
      margin-right: 8rem;
    }

    p {
      text-align: center;
      margin: 10px 0px;
      font-size: 24px;
      font-family: var(--Font-Saira);
      font-weight: 600;
    }

    button {
      font-family: var(--Font-Saira);
    }
  }
  @media (max-width: 320px) {
    .container-Buttons {
      .box-right {
        text-align: center;
        margin-left: 5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    margin-top: 10rem;
    display: flex;
    button {
      width: 250px;
      height: 60px;
    }
    .link {
      margin-bottom: 3rem;
      position: relative;
      > a {
        font-size: 20px;
      }
    }
    .container-inputs {
      max-height: 416px;
    }
    .container-Buttons {
      margin: 0 auto;
      margin-left: 3rem;
      .box-right {
        text-align: center;
        margin-left: 15rem;
      }
      .box-left {
        margin-right: 15rem;
      }
    }
  }
`;
