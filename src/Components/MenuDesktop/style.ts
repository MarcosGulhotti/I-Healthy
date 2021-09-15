import styled from 'styled-components'

export const StyledHeaderMenu = styled.header`
  @media (min-width: 768px) {
    width: 100%;
    background: #08074794;
    display: flex;
    ul {
      margin: 0 auto;
      display: flex;
      list-style-type: none;
      a {
        align-self: center;
        padding: 53px 15px;
        text-decoration: none;
        font-size: 2rem;
        color: white;
        &:hover {
          border-bottom: 4px solid black;
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
  }
`