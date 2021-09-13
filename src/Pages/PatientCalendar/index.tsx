import { UserCalendar } from '../../Components/UserCalendar'
import { BoxCalendar, Container} from './style'
import { Menu } from '../../Components/Menu'
import Header from '../../Components/UserHeader'
import { useAuth } from '../../Providers/Auth'
import { useHistory } from 'react-router'

const PatientCalendar = () => {
    const { isAuth } = useAuth()
    const history = useHistory()

    if (isAuth === "null") { 
        history.push('/login')
    }
    return(
        <Container>
            <Header/>

            <h1>Agenda de consultas</h1>

            <BoxCalendar>
                <UserCalendar/>
            </BoxCalendar>
            
            <Menu/>
        </Container>
    )
}

export default PatientCalendar;