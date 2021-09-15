import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Saira";

  h1 {
    margin: 10px 0;
  }
`;

export const BoxCalendar = styled.div`
  background: var(--Main-Black);
  height: 74%;
  width: 100%;
  padding: 0rem 5px;
  padding-bottom: 10px;
  color: var(--Main-White);
  border-radius: 1rem 0;
`;
