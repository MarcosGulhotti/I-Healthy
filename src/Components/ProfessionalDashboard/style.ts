import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-family: var(--Font-Saira);
    margin-top: 2%;
    margin-bottom: 4%;
`
export const PContainer = styled.div`
    position: relative;
    background-color: var(--Main-Black);
    border-radius: 25px 0 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    padding-top: 7%;
    padding-bottom: 10%;
    width: 90%;
    height: 50%;
    overflow: auto;
`
export const PButton = styled.button`
    background-color: var(--Main-Gray);
    border: none;
    color: var(--Main-White);
    border-radius: 15px 0 15px 0;
    width: 85%;
    font-family: var(--Font-Saira);
    font-weight: bolder;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 10px 0 10px 0;
    font-size: large;
`