import styled from 'styled-components'

export const JobsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    background-color: #e5e4e2;
    align-items: center;

    
    
`

export const JobH1 = styled.div`
    font-size: 2.5rem;
    color: black;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
`
export const Job2H1 = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
`
export const JobImage = styled.img`
    width: 100%;
    height: 150px;

    &:hover{
        color: white;
        transition: 0.3s ease-out;
    }
`
export const JobsWrapper = styled.div`
    max-width: 1500px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`

export const JobsCard = styled.div`
    background: #fff;
    
    border-radius: 10px;
    max-height: 280px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 0 20px 5px 20px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const JobsIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 5px;

    
`

export const JobsP = styled.p`
    font-size: 0.7rem;
    text-align: center;
    margin: 5px 5px 5px 5px;
`

export const JobsH2 = styled.h2`
    font-size: 0.8rem;
    margin: 5px 5px 5px 5px;
`

export const JobApply = styled.button`
    border: solid #260A81;
    background: #260A81;
    border-radius: 50px;
    padding: 8px;
    float: right;
    margin: 10px;
    color: white;
    cursor: pointer;
`