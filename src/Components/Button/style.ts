import styled from "styled-components";
import { ComponentButton } from "../../Types";


export const StyledButton = styled.button<ComponentButton>`
  width: 200px;
  height: 50px;

  background-color: ${(props) => (props.GreenTheme ? "#37DB7F" : "#008FFF")};
  border-radius: 10px;
  border: none;

  color: white;
  font-family: var(--Font-Saira);
  font-size: 1.3rem;
  font-weight: bold;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;