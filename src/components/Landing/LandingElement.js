import styled from 'styled-components'

export const LandingContainer = styled.div`
    height: 700px;
    margin-top: 60px;
    display: flex;

    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        height: 700px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        height: 600px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        height: 600px;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1.5fr 1.5fr;
        display: grid;
        grid-template-areas: 
        "LandingRight"
        "LandingLeft"
        ;
        height: 685px;
    }
`
export const LandingLeft = styled.div`
    width: 35%;
    padding: 150px 15px 0 100px;
    grid-area: LandingLeft;

    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        padding: 140px 15px 0 90px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        padding: 130px 10px 0 80px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        padding: 120px 5px 0 65px;
    }
    @media only screen and (max-width: 600px) {
        grid-area: LandingLeft;
        margin-left: 2rem;
        height: 16rem;
        width: 25rem;
        margin-top: 2rem;
        padding: 0px 0px 0 0px;
    }
    
`
export const LandingRight = styled.div`
    width: 65%;
    margin-top: 30px;
    @media only screen and (max-width: 600px) {
        grid-area: LandingRight;
        margin-left: 2rem;
        height: 20rem;
        width: 25rem;
        
    }

`
export const LandingImg = styled.img`
    height: 97%;
    animation-name: plate-sit;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
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
    @media only screen and (max-width: 400px) {
        width: 80%;
    }
    


@keyframes plate-sit {
    
    0%{ transform: translate(0, 0px);}
    50%{ transform: translate(0, 15px);}
    100%{ transform: translate(0, -0px);}
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
        font-size: 26px;  
        
    }
    @media only screen and (max-width: 400px) {
        font-size: 24px; 
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
    @media only screen and (max-width: 600px) {
        font-size: 16px;  
        
    }
    @media only screen and (max-width: 400px) {
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
        padding: 12px; 
        font-size: 16px;
        
    }

`