import { Background } from '../../Components/Background'
import LoginPage from '../../Assets/Images/LoginPage.svg' 
import { FormLogin } from '../../Components/FormLogin';
import { Container, Content } from './style'
import { motion } from 'framer-motion'


const PageLogin =  () => {
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
        >
            <Container className="container-login">
                <Background image={LoginPage}>
                    <Content className="content-login">
                        <FormLogin/>
                    </Content>
                </Background>
            </Container>
        </motion.div>
    )
}

export default PageLogin;