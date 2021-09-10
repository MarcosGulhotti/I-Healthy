import { Calendar } from '../../Components/Calendar'
import { BoxCalendar, Container} from './style'
import { Menu } from '../../Components/Menu'

const PatientCalendar = () => {
    return(
        <Container>

            <div className="box">
                <div className="box-img">
                    <img src="https://static.remove.bg/remove-bg-web/97e23b9bea3ef10227bf2e0bed160d3a30f93253/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png" alt="user" />
                </div>
                <div className="box-data">
                    <h2>Paciente</h2>
                    <p>Kamila Maciel</p>
                    <button>ver mais</button>
                </div>
            </div>

            <h1>Agenda de consultas</h1>

            <BoxCalendar>
                <Calendar/>
            </BoxCalendar>
            
            <Menu/>
        </Container>
    )
}

export default PatientCalendar;