import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 25px;
  max-height: 450px;

  form {
    margin: 0 auto;
    padding: 0 1rem;
    /* margin-top: 15px; */
    width: 80%;
  }

  .container-inputs {
    height: 310px;
    overflow-y: auto;
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
      height: 26rem;
      overflow: auto;
      max-width: 50vw;
    }
    .container-Buttons {
      margin: 0 auto;
      margin-left: 5rem;
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
