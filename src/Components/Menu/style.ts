import styled from 'styled-components'

export const StyledMenu = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  background: #1e2759;

  li {
    list-style: none;

    &:hover {
      opacity: 1;
    }

    a {
      position: relative;
      color: #fff;
      text-decoration: none;
      display: inline-block;
      padding: 20px 21px;
      z-index: 1000;
      backdrop-filter: blur(15px);

      i {
        font-size: 1.5rem;
        pointer-events: none;
        opacity: 0.25;
        transition: 0.25s;
      }
    }
  }

  #marker {
    position: absolute;
    top: 0;
    transition: 0.5s;
    z-index: 1;

    ::before {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 40px;
      border-radius: 8px;
      background: #5da6ff;
      box-shadow: 0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff, 0 0 60px #5da6ff;
    }
  }
`