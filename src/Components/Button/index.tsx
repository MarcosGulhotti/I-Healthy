import { ComponentButton } from "../../Types";
import { StyledButton } from "./style";

export const Button = ({ children, GreenTheme }: ComponentButton) => {
  return <StyledButton GreenTheme={GreenTheme}>{children}</StyledButton>;
};
