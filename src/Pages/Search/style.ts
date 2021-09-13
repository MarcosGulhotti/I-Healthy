import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BoxSearch = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 90%;
    height: 75vh;
    border-radius: 1rem 0;
    margin: 0 auto;
    background: var(--Main-Black);
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
`