import { Menu } from "../../Components/Menu"
import { ProDashboard } from "../../Components/ProDash"
import UserHeader from "../../Components/UserHeader"
import { Container } from "./style"

export const Dashboard = () => {
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