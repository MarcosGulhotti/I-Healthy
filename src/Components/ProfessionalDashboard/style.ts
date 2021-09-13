import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-family: var(--Font-Saira);
`
export const PContainer = styled.div`
    position: relative;
    background-color: var(--Main-Black);
    border-radius: 10px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    /* height: 300px; */
    width: 90%;
    /* height: 90%; */
`
export const PButton = styled.button`
    background-color: var(--Main-Gray);
    border: none;
    color: var(--Main-White);
    border-radius: 10px 0 10px 0;
    width:90%;
    height: 30px;
    font-family: var(--Font-Roboto-Mono);
    font-weight: bolder;
    margin-top: 10px;
    margin-bottom: 10px;
`