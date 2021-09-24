import styled from 'styled-components'

export const DetailsContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    background-color: #e5e4e2;
    align-items: center;
    @media only screen and (max-width: 600px) {
        height: 1200px;
    }

    
    
`

export const DetailH1 = styled.div`
    font-size: 2.5rem;
    color: black;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }
`
export const Detail2H1 = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }
`
export const SocialIconLink = styled.a`
    color: #260A81;
    font-size: 28px;

    &:hover{
        color: white;
        transition: 0.3s ease-out;
    }
`
export const DetailsWrapper = styled.div`
    max-width: 1500px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        height: 685px;
    }
`

export const DetailsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 150px;
    padding: 30px;
    height: 100px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 0 20px 5px 20px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: #260A81;
        color: white;
    }
`
export const DetailsIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 5px;

    
`

export const DetailsP = styled.p`
    font-size: 0.8rem;
    text-align: center;
`

export const DetailsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 5px;
`