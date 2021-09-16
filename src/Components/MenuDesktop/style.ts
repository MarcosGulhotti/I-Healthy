import styled from 'styled-components'

export const StyledHeaderMenu = styled.header<{isProfessional: boolean}>`
  @media (max-width: 768px) {
    display: none;
  }

  width: 100%;
  background: var(--Main-Black);
  display: flex;

  ul {
    margin: 0 auto;
    display: flex;
    list-style-type: none;

    a {
      display: flex;
      align-items: center;
      align-self: center;
      padding: 5px 5vw;
      text-decoration: none;
      font-size: 1.2rem;
      color: var(--Main-White);
      border-bottom: 4px solid var(--Main-Black);
      gap: 10px;

      &:hover {
        border-bottom: ${props => props.isProfessional ? '4px solid #008FFF' : '4px solid #37DB7F'};
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 25px;

    input {
      border: 1px solid black;
      height: 25px;
      opacity: 0.8;
    }
  }
`