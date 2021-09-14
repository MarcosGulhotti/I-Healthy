import styled from "styled-components";
import User from '../../Assets/Images/User.svg'

export const Container = styled.div`
    width: 85%;
    height: 180px;
    overflow: auto;
    border-radius: 1rem 0;
    background: var(--Main-Gray);
    color: var(--Main-White);
    margin: 10px 0;

    .box-pai{
        font-family: 'Roboto mono';
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    p{
        margin: 4px 0;
    }


    .box-content{
        height: 100px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h2{
            text-align: left;
        }
    }

    .box-img{
        background: var(--Main-Blue) url(${User}) no-repeat center;
        background-size: 50px;
        border-radius: 50%;
        width:  100px;
        height: 100px;
    }

    .box-button{
        width: 100%;
        text-align: center;

        button{
            width: 70%;
            height: 25px;
            border: 0;
            border-radius: 1rem 0;
            background: var(--Main-Purple);
            color: var(--Main-White);
            font-weight: bold;
        }
        .button-loading{
            background:#818de8;
        }
    }
    

`