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
    <StyledContainer error={error}>
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
<<<<<<< HEAD
            />
=======
          />
>>>>>>> a6be5e99b9692f7c921ae0e7551d195d6391a76f
        </>
      )}
    </StyledContainer>
  );
};
