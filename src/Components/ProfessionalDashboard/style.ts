import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-family: var(--Font-Saira);
  margin-top: 2px;
  margin-bottom: 5px;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
export const PContainer = styled.div`
  background-color: var(--Main-Black);
  border-radius: 25px 0 25px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding-top: 7%;
  padding-bottom: 10%;

  width: 90%;
  height: 61%;
  max-height: 61%;

  overflow: auto;

  gap: 25px;
  h2 {
    color: var(--Main-White);
    font-family: "saira";
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;

    padding-top: 50px;
  }
`;
export const PButton = styled.div`
  background-color: var(--Main-Gray);
  border: none;
  border-radius: 15px 0 15px 0;

  width: 85%;
  height: 70px;

  color: var(--Main-White);

  font-family: var(--Font-Saira);
  font-weight: bolder;
  font-size: large;

  padding: 10px 0 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 35%;
    height: 60px;

    margin-top: 1%;
  }
`;
