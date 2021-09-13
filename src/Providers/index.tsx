import { ProviderChildren } from "../Types";
import { UserProvider } from "./User";
import { AuthProvider } from './Auth'

export const Providers = ({ children }: ProviderChildren) => {
  return (
  <UserProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </UserProvider>
  );
};
