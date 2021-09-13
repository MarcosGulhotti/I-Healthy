import { PButton, PContainer, Title } from "./style";
import { useUser } from "../../Providers/User";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";

export const ProDashboard = () =>{

    // const[id, setId] = useState<number>(() => {
    //     const data = localStorage.getItem("@Kenzie:id");
    //     if(data) {
    //         return JSON.parse(data)
    //     } else {
    //         return 0;
    //     }
    // });
    // const [user, setUser] = useState<IuserData>({} as IuserData);
    // const getUser = async (id: number) => {
    //     try {
    //       const { data } = await api.get(`/users?id=${id}`);
    //       setUser(data[0]);
    //     } catch {
    //       toast.error("algo deu errado");
    //     }
    //   };
    //   useEffect(() => {
    //     getUser(id);
        
    //   }, [id]);

  const id = localStorage.getItem("@Kenzie:id")
  const [patients, setPatients] = useState([])

  useEffect(() => {
      api
      .get(`/users/${id}`)
      .then((response) => {
        setPatients(response.data.patients)
      })
  }, [])
  
    return(
        <>
        <Title>Seus Pacientes</Title>
        <PContainer>
            {
                patients.map((e) => 
                    <PButton>{e}</PButton>
                )
            }
        </PContainer>
        </>
    )
}