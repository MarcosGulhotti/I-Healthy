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
            //   {...register(name)}
            {...rest}
          >
            {children}
          </select>
        </>
      ) : (
        <>
          {icon}
          <input
            placeholder={!!error ? error : placeholder}
            {...register(name)} // linha estava comentada...
            {...rest}
            type={type}
          />
        </>
      )}
    </StyledContainer>
  );
};
