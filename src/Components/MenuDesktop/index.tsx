import { StyledHeaderMenu } from "./style"
import { Link } from 'react-router-dom'

export const MenuDesktop = () => {

  const handleLogout = () => {
    localStorage.clear()
  }
  
  return (
    <StyledHeaderMenu>
      <ul>
        <Link to='/dashboard'>
          <li>Dashboard</li>
        </Link>
        <Link to='/contact'>
          <li>Contato</li>
        </Link>
        <Link to='/login' onClick={handleLogout}>
          <li>Logout</li>
        </Link>
        <Link to='/search'>
          <li>Pesquisar</li>
        </Link>
        <Link to='/calendar'>
          <li>Calendario</li>
        </Link>
      </ul>
    </StyledHeaderMenu>
  )
}