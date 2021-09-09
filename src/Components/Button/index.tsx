import { ComponentButton } from "../../Types";
import { StyledButton } from "./style";

export const Button = ({ children, GreenTheme, onClick }: ComponentButton) => {
  return (
    <StyledButton onClick={onClick} GreenTheme={GreenTheme}>
      {children}
    </StyledButton>
  );
};
