import { StyledHeaderMenu } from "./style"
import { Link } from 'react-router-dom'
import { useUser } from '../../Providers/User'

export const MenuDesktop = () => {
  const { user } = useUser()

  const handleLogout = () => {
    localStorage.clear()
  }

  return (
    <StyledHeaderMenu isProfessional={user?.isProfessional}>
      <ul>
        <Link to='/contact'>
          <i className='far fa-id-card'></i>
          <li>Contato</li>
        </Link>
        <Link to='/search'>
          <i className='fas fa-search'></i>
          <li>Pesquisar</li>
        </Link>
        <Link to='/dashboard'>
          <i className='fas fa-home'></i>
          <li>Dashboard</li>
        </Link>
        <Link to='/calendar'>
          <i className='far fa-calendar-alt'></i>
          <li>Calendario</li>
        </Link>
        <Link to='/login' onClick={handleLogout}>
          <i className='fas fa-sign-out-alt'></i>
          <li>Logout</li>
        </Link>
      </ul>
    </StyledHeaderMenu>
  )
}