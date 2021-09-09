import styled from "styled-components";
import { IinputStyle } from "../../Types";

export const StyledContainer = styled.div<IinputStyle>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border-bottom: ${(props) =>
    !!props.error ? "3px solid #ff4500" : "3px solid #282830"};

  i {
    font-size: 30px;
    margin-right: 1rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  select,
  input {
    flex: 1;
    width: 100%;
    border: none;
    background: transparent;
    font-family: var(--Font-Saira);
    color: var(--Second-Black);
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  option {
    font-family: var(--Font-Saira);
    background: transparent;
    color: var(--Second-Black);
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
