import { SecondButtonProps } from "../../Types";
import { StyledButton } from "./style";

export const SecondButton = ({ children, func, param }: SecondButtonProps) => {
  return <StyledButton onClick={() => func(param)}>{children}</StyledButton>;
};
