import { useContext, createContext, useState } from "react";
// import toast from "react-hot-toast";
import { ProviderChildren, AuthProviderData } from "../../Types";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ProviderChildren) => {
  const [isAuth, setIsAuth] = useState<string>(
    localStorage.getItem("@Kenzie:id") || "null"
  );

  console.log(isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
