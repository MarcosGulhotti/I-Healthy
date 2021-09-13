import { Container, BoxSearch, Header } from './style'
import { CardUser } from '../../Components/CardUser'
import { useEffect, useState } from 'react'
import { api } from '../../Services/api'
import { IUserSearch} from '../../Types'
import BounceLoader from 'react-spinners/BounceLoader'
import { Menu } from '../../Components/Menu'

const PageSearch = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [load, setLoad] = useState<boolean>(true)

    const [users, setusers] = useState<IUserSearch[]>([])

    const toSchedule = async () => {
        setLoading(true)
    }

    const getUsers = async () => {
        const { data } = await api.get("/users?_limit=3")
        setLoad(false)
        setusers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getUsers()
    }, [users])



    return (
        <Container>
            <Header>
                <button>Gênero</button>
                <button>Cidade</button>
                <button>Especialidade</button>
            </Header>

             <BoxSearch>
                 {load?
                 (
                     <BounceLoader color="#37DB7F" size="100px"/>
                 )
                 :
                 (
                     <>

                    {users.map((user) => {
                        return <CardUser
                            key={user.id}
                            name={user.name ? user.name : "Não Informado"}
                            genre={user.genre ? user.genre : "Não Informado"} 
                            specialty={user.specialty}
                            city="manaus-am"
                            func={toSchedule}
                            loading={loading}
                        />
                    } )}

                    </>
                 )}
               
                    <Menu/>
             </BoxSearch>
        </Container>
    )
}

export default PageSearch;