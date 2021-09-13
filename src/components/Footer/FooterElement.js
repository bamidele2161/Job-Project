import styled from "styled-components";

export const FooterContainer = styled.div`
    border: solid #3b3845;
    height: 300px;
    width: 100%;
    background: #3b3845;
    @media only screen and (max-width: 600px) {
        height: 500px;
        width: 100vw;
    }
    @media only screen and (max-width: 400px) {
        height: 550px;
        width: 100vw;
    }
`
export const FooterBelow = styled.div`
    background: #3b3845;
`
export const FooterElement = styled.div`
    background: #3b3845;
    height: 200px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "firstCard secondCard"
        "thirdCard fourthCard"
        ;
        height: 400px;
        padding: 0 0 0 2rem;
    }

`
export const FooterIcon = styled.div`
    background: #3b3845;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 1.5rem;

    &:hover{
        cursor: pointer;
        transition: all 1s ease-in-out;
        color: #260A81;
    }

`
export const FooterCopy = styled.div`
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
`
export const SocialIconLink = styled.i`
    color: white;
    padding: 0 1.5rem;
    
    &:hover{
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        color: #260A81;
    }
`
export const FooterCard = styled.div`
    width: 200px;
    height: 200px;
    color: white;
`
export const FooterH2 = styled.h3`
    margin: 0.3rem;
` 
export const FooterP = styled.p`
    margin: 0.5rem;
    font-size: 0.8rem;

` 
export const FooterHrDiv = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`
