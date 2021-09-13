import styled from "styled-components";

export const AboutContainer = styled.div`
margin-top: 80px;
`
export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "Col1 Col2";

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1.5fr 1.5fr;
            grid-template-areas: 
            "Col2"
            "Col1"
            ;
        }
`

export const Col1 = styled.div`
    grid-area: Col1;
    padding: 6rem 0 0 6rem;
    @media only screen and (max-width: 600px) {
        padding: 3rem 2rem 2rem 4rem;
    }
`

export const Col2 = styled.div`
    grid-area: Col2;
    @media only screen and (max-width: 600px) {
        
        padding: 3rem 3rem 2rem 3rem;
    }
`

export const LandingImg = styled.img`
    height: 98%;
    width: 100%;
    &:hover{
    
    transition: all 0.2s ease-in-out;
    }
    
    
    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        height: 90%;
        width: 90%;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        margin-top: 80px;
        height: 85%;
        width: 100%;
        
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        margin-top: 85px;
        height: 75%;
        width: 100%;
        
    }

`
export const LandingH1 = styled.h1`
    font-weight: bold;
    font-size: 45px;

    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        font-size: 40px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        font-size: 35px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 600px) {
        
        font-size: 32px;
    }


`
export const LandingP = styled.p`
font-size: 20px;
margin-top: 30px;
@media only screen and (min-width: 1100px) and (max-width: 1350px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        font-size: 14px;
    }
    

`
export const LandingButton = styled.button`
    border: none;
    margin-top: 30px;
    background-color: #260A81;
    border-radius: 10px;
    cursor: pointer;
    padding: 16px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    outline: none;

    &:hover {
        color: #260A81;
        background: white;
        border: solid #260A81;
        transition: all 0.2s ease-in-out;
    }

    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        font-size: 18px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 600px) {
        
        padding: 14px;
        font-size: 18px;
    }
`