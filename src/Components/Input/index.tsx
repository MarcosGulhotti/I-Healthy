import { ComponentInput } from "../../Types";
import { StyledContainer } from "./style";

export const Input = ({
  children,
  IsSelect,
  icon,
  register,
  name,
  error,
  type,
  placeholder,
  ...rest
}: ComponentInput) => {
  return (
    <StyledContainer error={error} className="container-input">
      {IsSelect ? (
        <>
          {icon}
          <select {...register(name)} {...rest}>
            {children}
          </select>
        </>
      ) : (
        <>
          {icon}
          <input
            placeholder={!!error ? error : placeholder}
            {...register(name)}
            {...rest}
            type={type}
          />
        </>
      )}
    </StyledContainer>
  );
};
