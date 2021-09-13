import { UserCalendar } from '../../Components/UserCalendar'
import { BoxCalendar, Container} from './style'
import { Menu } from '../../Components/Menu'
import Header from '../../Components/UserHeader'

const PatientCalendar = () => {
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