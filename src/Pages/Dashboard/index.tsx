import { useHistory } from "react-router"
import { Menu } from "../../Components/Menu"
import { ProDashboard } from "../../Components/ProfessionalDashboard"
import UserHeader from "../../Components/UserHeader"
import { useAuth } from "../../Providers/Auth"
import { Container } from "./style"

export const Dashboard = () => {
  const { isAuth } = useAuth()
  const history = useHistory()

  if (isAuth === 'null') {
    history.push('/login')
  }
  return(
    <>
      <UserHeader />
      <Container>
        <ProDashboard />
        </Container>
      <Menu />
    </>
  )

}