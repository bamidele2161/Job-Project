import styled from 'styled-components'

export const LandingContainer = styled.div`
    height: 700px;
    margin-top: 60px;
    display: flex;
`
export const LandingLeft = styled.div`
    width: 40%;
    padding: 150px 20px 0 100px;
    
`
export const LandingRight = styled.div`
    width: 60%;
`
export const LandingImg = styled.img`
    height: 100%;
    width: 100%;

`
export const LandingH1 = styled.h1`
    font-weight: bold;
    font-size: 45px;


`
export const LandingP = styled.p`
font-size: 20px;
margin-top: 30px;

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

`