import { StyledHeaderMenu } from "./style"
import { Link } from 'react-router-dom'
import { useUser } from '../../Providers/User'

export const MenuDesktop = () => {
  const { user } = useUser()

  const handleLogout = () => {
    localStorage.clear()
  }

  return (
    <StyledHeaderMenu isProfessional={user.isProfessional}>
      <ul>
        <Link to='/dashboard'>
          <li>Dashboard</li>
        </Link>
        <Link to='/calendar'>
          <li>Calendario</li>
        </Link>
        <Link to='/search'>
          <li>Pesquisar</li>
        </Link>
        <Link to='/contact'>
          <li>Contato</li>
        </Link>
        <Link to='/login' onClick={handleLogout}>
          <li>Logout</li>
        </Link>
      </ul>
    </StyledHeaderMenu>
  )
}