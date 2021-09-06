import { StyledMenu } from './style'
import { Link } from 'react-router-dom'

export const Menu = () => {
  const marker: any = document.querySelector('#marker')
  const list = document.querySelectorAll('ul li')
  
  const moveIndicator = (num: number) => {
    marker.style.left = num + 'px'
    marker.style.width = num + 'px'
  }

  return (
    <StyledMenu>
      <li>
        <Link to='/' onClick={() => moveIndicator(22)}>
          <i className="fas fa-home"></i>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => moveIndicator(64)}>
          <i className="fas fa-user"></i>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => moveIndicator(108)}>
          <i className="fas fa-plus-circle"></i>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => moveIndicator(152)}>
          <i className="fas fa-search"></i>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => moveIndicator(194)}>
          <i className="far fa-calendar-alt"></i>
        </Link>
      </li>
      <div id="marker"></div>
    </StyledMenu>
  )
}