import { FormRegisterPaciente } from '../../Components/FormRegisterPaciente'
import { FormRegisterProfissional } from '../../Components/FormRegisterProfissional'
import { Background } from '../../Components/Background' 
import { Container } from './style'
import PatientSignup from '../../Assets/Images/PatientSignup.svg' 
import ProfessionalSignup from '../../Assets/Images/ProfessionalSignup.svg' 

interface Props{
    profissional?: boolean;
}



const PageRegister = ({ profissional }: Props) => {
    return (
        <Container>
            {profissional? 
            (
                <Background image={ProfessionalSignup}>
                    <FormRegisterProfissional/>
                </Background>
            )
            :
            (
                <Background image={PatientSignup}>
                    <FormRegisterPaciente/>
                </Background>
            )}
        </Container>
    )
}
export default PageRegister;