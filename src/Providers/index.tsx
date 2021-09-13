import { ProviderChildren } from "../Types";
import { UserProvider } from "./User";

export const Providers = ({ children }: ProviderChildren) => {
  return <UserProvider>{children}</UserProvider>;
};
