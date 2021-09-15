import { Background } from '../../Components/Background'
import LoginPage from '../../Assets/Images/LoginPage.svg' 
import { FormLogin } from '../../Components/FormLogin';
import { Container, Content } from './style'



const PageLogin =  () => {
    return(
        <Container className="container-login">
            <Background image={LoginPage}>
                <Content className="content-login">
                    <FormLogin/>
                </Content>
            </Background>
        </Container>
    )
}

export default PageLogin;