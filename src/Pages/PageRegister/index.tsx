import { FormRegisterPaciente } from '../../Components/FormRegisterPaciente'
import { FormRegisterProfissional } from '../../Components/FormRegisterProfissional'
import { Background } from '../../Components/Background' 
import { Container } from './style'
import PatientSignup from '../../Assets/Images/PatientSignup.svg' 
import ProfessionalSignup from '../../Assets/Images/ProfessionalSignup.svg' 
import { motion } from 'framer-motion'

interface Props{
    profissional?: boolean;
}

const PageRegister = ({ profissional }: Props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
        >
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
        </motion.div>
    )
}
export default PageRegister;