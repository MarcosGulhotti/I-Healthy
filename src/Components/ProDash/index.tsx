import { useState, useEffect } from "react"
import { api } from "../../Services/api"
import { IuserData } from "../../Types"
import toast from "react-hot-toast";
import { PButton, PContainer, Title } from "./style";

export const ProDashboard = () =>{

    const[id, setId] = useState<number>(() => {
        const data = localStorage.getItem("@Kenzie:id");
        if(data) {
            return JSON.parse(data)
        } else {
            return 0;
        }
    });
    const [user, setUser] = useState<IuserData>({} as IuserData);
    const getUser = async (id: number) => {
        try {
          const { data } = await api.get(`/users?id=${id}`);
          setUser(data[0]);
        } catch {
          toast.error("algo deu errado");
        }
      };
      useEffect(() => {
        getUser(id);
        
      }, [id]);
    return(
        <>
        <Title>Seus Pacientes</Title>
        <PContainer>
            {
                user?.patients.map((e) => 
                    <PButton>{e}</PButton>
                )
            }
        </PContainer>
        </>
    )
}