import { Container, BoxSearch, Header, Modal } from "./style";
import { CardUser } from "../../Components/CardUser";
import { useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IUserSearch } from "../../Types";
import BounceLoader from "react-spinners/BounceLoader";
import { Menu } from "../../Components/Menu";
import { useHistory } from "react-router";

const PageSearch = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [load, setLoad] = useState<boolean>(true)
    const [modal1, setModal1] = useState<boolean>(false)
    const [modal2, setModal2] = useState<boolean>(false)
    const [modal3, setModal3] = useState<boolean>(false)

    const [users, setUsers] = useState<IUserSearch[]>([])
    const history = useHistory()

    const toSchedule = async (doctor: object) => {
        setLoading(true)
        history.push("/DoctorCalendar", doctor)
    }

    const getUsers = async () => {
        const { data } = await api.get("/users/?isProfessional=true")
        setLoad(false)
        setUsers(data)
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    
    const search = async (type: string, name: string, setModal: (bol: boolean) => void) => {
        setModal(false)
        
        const {data} = await api.get(`/users/?${type}=${name}`)
        setUsers(data)
/* 
        if(type==="gender"){
            const  newList = users.filter((user) => user.gender === name)
            setUsers(newList)
        }
        
        if(type==="typeCalls"){
            const  newList = users.filter((user) => user.typeCalls === name)
            setUsers(newList)
        }
        
        if(type==="specialty"){
            const  newList = users.filter((user) => user.specialty === name)
            setUsers(newList)
        }  */
       
    }

    return (
        <Container>
            <Header>

                <button onClick={() => {
                     setModal1(!modal1)
                     }}>
                    Gênero

                    {modal1 && 
                    (
                        <div className="modal-left">
                            <Modal modal={modal1}>
                                <button onClick={() => search("gender" ,"Masculino", setModal1)}>Masculino</button>
                                <button onClick={() => search("gender","Feminino", setModal1)}>Feminino</button>
                                <button onClick={() => search("gender", "Outros", setModal1)}>Outros</button>
                            </Modal>
                        </div>
                    )
                    }

                </button>

                <button onClick={() =>{
                    setModal2(!modal2)
                    }}>
                    Atendimento

                    {modal2 && 
                    (
                        <Modal modal={modal2}>
                            <button onClick={() => search("typeCalls" ,"Online", setModal2)}>Online</button>
                            <button onClick={() => search("typeCalls" ,"Presencial", setModal2)}>Presencial</button>
                            <button onClick={() => search("typeCalls" ,"Ambos", setModal2)}>Ambos</button>
                        </Modal>
                    )
                    }
                  
                </button>

                <button onClick={() => {
                    setModal3(!modal3)
                    }}>
                    Especialidade
                    {modal3 && 
                    (
                    
                    <div className="modal-right">
                        <Modal modal={modal3}>
                            <button onClick={() => search("specialty" ,"Psicólogo", setModal3)}>Psicólogo</button>
                            <button onClick={() => search("specialty" ,"Psiquiatria", setModal3)}>Psiquiatra</button>
                            <button onClick={() => search("specialty" ,"Neurocirurgião", setModal3)}>Neurocirurgião</button>
                            <button onClick={() => search("specialty" ,"Oftalmologia", setModal3)}>Oftalmologia</button>
                            <button onClick={() => search("specialty" ,"Cardiologia", setModal3)}>Cardiologia</button>
                            <button onClick={() => search("specialty" ,"Radiologia", setModal3)}>Radiologia</button>
                            <button onClick={() => search("specialty" ,"Dermatologia", setModal3)}>Dermatologia</button>
                            <button onClick={() => search("specialty" ,"Otorrinolaringologia", setModal3)}>Otorrinolari..</button>
                            <button onClick={() => search("specialty" ,"Cirurgia geral", setModal3)}>Cirurgia geral</button>
                            <button onClick={() => search("specialty" ,"Pediatria", setModal3)}>Pediatria</button>
                            <button onClick={() => search("specialty" ,"Ortopedia e Traumatologia", setModal3)}>Ortopedia e Traumatologia</button>
                            <button onClick={() => search("specialty" ,"Nefrologia", setModal3)}>Nefrologia</button>
                            <button onClick={() => search("specialty" ,"Outro", setModal3)}>Outro</button>

                        </Modal>
                    </div>
                    )
                    }
                    
                </button>
               
            </Header>

             <BoxSearch>
                 {load?
                 (  
                     <>
                        <BounceLoader color="#37DB7F" size="100px"/>
                     </>
                     
                 )
                 :
                 (
                     <>
                    {users.map((user) => {
                        return <CardUser
                            key={user.id}
                            username={user.username}
                            gender={user.gender} 
                            specialty={user.specialty}
                            typeCalls={user.typeCalls}
                            func={() => toSchedule(user)}
                            loading={loading}
                        />
                    } )}
                        <button onClick={() => getUsers()}>resetar</button>
                    </>
                 )}
               
                    <Menu/>
             </BoxSearch>
        </Container>
    )
}

export default PageSearch;
