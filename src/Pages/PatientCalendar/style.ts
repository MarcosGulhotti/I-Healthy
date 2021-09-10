import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Saira';

    h1{
        margin: 20px 0;
    }


        p{
            font-size: 1.1rem;
            margin-bottom: 2px;
            color: var(--Main-Green);
        }

        button{
            width: 80%;
            height: 20px;
            background: var(--Main-Purple);
            color: var(--Main-White);
            border: 0;
            border-radius: 0.5rem 0;
            margin-bottom: 10px;
        }
`

export const BoxCalendar = styled.div`
  
    background: var(--Main-Black);
    height: 50%;
    width: 100%;
    padding: 0rem 5px;
    padding-bottom: 10px;
    color: var(--Main-White);
    border-radius: 1rem  0;

    display: flex;
    align-items: center;
    justify-content: center;

`