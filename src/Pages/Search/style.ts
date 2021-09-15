import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 720px){
    .container-card-user{
        width: 280px;
        margin: 5px;
    }

    .box-search{
        width: 90%;
        padding: 10px;
    }

    .header{
        background: none;

        button{
            color: var(--Main-White);
            background: var(--Main-Purple);
            width: 130px;
            border-radius: 0.75rem 0;
            box-shadow: 4px 4px 10px 0px rgba(176,176,176,0.96)
        }

       
    }

  }
`

export const BoxSearch = styled.div`

    overflow: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 90%;
    height: 80vh;
    border-radius: 1rem 0;
    margin: 0 auto;
    background: var(--Main-Black);
   
    h2{
      text-align: center;
      color: var(--Main-White);
      font-family: 'saira';
    }

    

    
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    width: 100%;
    background: var(--Main-Black);
    margin-bottom: 1rem;
    border-radius: 0 0rem 1rem 1rem ;

    button{
        background: transparent;
        border: none;
        padding: 2px;
        color: var(--Main-White);
        font-size: 18px;
    }

    .modal-left{
        position: relative;
        left: 40px;
        top: -40px;
    }

    .modal-right{
        position: relative;
        right: 10px;
        top: -40px;
    }
`


export const Modal = styled.div<{ modal: boolean }>`
  
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 160px;
  height: 140px;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background: var(--Second-Black);
  font-family: var(--Font-Roboto-Mono);
  border-radius: 0 0.75rem;
  z-index: 10;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.modal ? "100" : "0")};
  opacity: ${(props) => (props.modal ? "100" : "0")};

  button{
      border-radius: 15px 2px;
      width: 90%;
      margin: 8px 0;
      background: var(--Main-Purple);
  }

  button:nth-child(2n) {
    background: var(--Main-Green);
  }

`;

