import { StyledMenu } from './style'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <Link to='/'>
            
          </Link>
        </li>
        {/* <li>
          <Link>

          </Link>
        </li>
        <li>
          <Link>

          </Link>
        </li>
        <li>
          <Link>

          </Link>
        </li>
        <li>
          <Link>

          </Link>
        </li> */}
        <div id="marker"></div>
      </ul>
    </StyledMenu>
  )
}