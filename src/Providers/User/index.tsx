import { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { IuserData, ProviderChildren, UserProviderData } from "../../Types";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: ProviderChildren) => {
  const [user, setUser] = useState<IuserData>({} as IuserData);
  const id = localStorage.getItem("@Kenzie:id") || "";

  const getUser = async (id: string) => {
    try {
      const { data } = await api.get(`/users?id=${id}`);
      setUser(data[0]);
    } catch {
      toast.error("algo deu errado");
    }
  };

  useEffect(() => {
    getUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <UserContext.Provider value={{ user, getUser, id }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
