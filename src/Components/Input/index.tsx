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
    <StyledContainer>
      {IsSelect ? (
        <>
          {icon}
          <select
             {...register(name)}
            {...rest}
          >
            {children}
          </select>
          {!!error && console.log(error)}
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
            {!!error && console.log(error)}
        </>
      )}
    </StyledContainer>
  );
};
