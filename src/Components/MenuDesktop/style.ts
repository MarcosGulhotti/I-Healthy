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
      align-self: center;
      padding: 5px 15px;
      text-decoration: none;
      font-size: 1.5rem;
      color: ${props => props.isProfessional ? '#008FFF' : '#37DB7F'};
      border-bottom: 4px solid var(--Main-Black);

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