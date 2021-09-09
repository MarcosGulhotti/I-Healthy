import { Background } from '../../Components/Background'
import LoginPage from '../../Assets/Images/LoginPage.svg' 
import { FormLogin } from '../../Components/FormLogin';

const PageLogin =  () => {
    return(
        <Background image={LoginPage}>
            <FormLogin/>
        </Background>
    )
}

export default PageLogin;