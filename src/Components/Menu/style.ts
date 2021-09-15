import styled from 'styled-components'

export const StyledMenu = styled.ul`
  @media (min-width: 769px) {
    display: none;
  }
  
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  background: var(--Main-Black);

  li {
    list-style: none;

    .active {
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
`

export const StyledMarker = styled.div<{left: string, width: string, isProfessional: boolean}>`
  position: absolute;
  top: 0;
  transition: 0.5s;
  z-index: 1;
  left: ${props => props.left && props.left};
  width: ${props => props.width && props.width};

  ::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 40px;
    border-radius: 8px;
    background: ${props => props.isProfessional ? '#0041ff' : '#37DB7F'};
    box-shadow: ${props => props.isProfessional ? '0 0 15px #0041ff, 0 0 30px #0041ff, 0 0 45px #0041ff, 0 0 60px #0041ff' : '0 0 15px #37DB7F, 0 0 30px #37DB7F, 0 0 45px #37DB7F, 0 0 60px #37DB7F'};
  }
`