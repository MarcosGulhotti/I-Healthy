import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Saira';

    h1{
        margin: 10px 0;
    }

    .box{
        display: flex;
        justify-content: space-between;
        background: var(--Main-Black);
        width: 100%;
        height: 12%;
        padding: 5px 0;
        color: var(--Main-White);
        font-family: 'Roboto Mono';
    }

    
    .box-img {
        width: 100px;
        border: 1px solid var(--Main-White);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        margin-left: 15px;
    }
    
    .box-img img{
        width: 90%;
        height: 90%;
        margin-left: 15px;
    }

    .box-data{
        width: 50%;

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
    }
`

export const BoxCalendar = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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