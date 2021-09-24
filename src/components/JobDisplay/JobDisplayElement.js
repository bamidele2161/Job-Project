import styled from 'styled-components'

export const JobsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e5e4e2;
    align-items: center;   
    width: 100%;
    
`

export const JobH1 = styled.div`
    font-size: 2.5rem;
    color: black;
    margin-top: 30px;
    text-align: center;
    font-weight: bold;
`
export const EntireResult = styled.div`
`
export const NoResult = styled.p`
    font-size: 2rem;
    color: black;
    margin-top: 5px;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-left: 28rem;
    margin-bottom: 3rem;
    @media only screen and (max-width: 600px) {
        margin-left: 0rem;
        font-size: 1rem;
        width: 100%;
        margin-top: 0px;
        
    }
    @media only screen and (max-width: 400px) {
        margin-left: 0rem;
        font-size: 1rem;
        width: 100%;
        margin-top: 0px;
    }
`
export const Job2H1 = styled.div`
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
`

export const JobImage = styled.h1`
    width: 100%;
    height: 100px;
    color: #260A81;
    font-family: 'Allison', cursive ;
    text-align: center;
    font-size: 4.5rem;

    &:hover{
        color: white;
        background: #260A81;
        transition: 0.3s ease-out;
    }
    @media only screen and (max-width: 1000px) {
        font-size: 2.8rem;
        height: 80px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 2.5rem;
        height: 60px;
    }
    @media only screen and (min-width: 1000px) {
    
        font-size: 2.8rem;
        height: 60px;
    }
`
export const JobsWrapper = styled.div`
    max-width: 1600px;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    margin-top: 5rem;
    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 800px;
        grid-gap: 10px;
    }
    @media only screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
        max-width: 800px;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 6px;
    }
    @media only screen and (min-width: 1000px) {
        grid-gap: 10px;

        
    }
`

export const JobsCard = styled.div`
    background: #fff;
    border-radius: 10px;
    height: 300px;
    width: 310px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin: 0 20px 5px 20px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    @media only screen and (max-width: 1000px) {
        
        width: 180px;
        height: 270px;
    }
    @media only screen and (max-width: 800px) {

        
        width: 180px;
        height: 250px;
    }
    @media only screen and (min-width: 1000px) {

        
        width: 180px;
        height: 280px;
        
    }
`
export const JobsIcon = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
    

    
`
export const JobSalary = styled.p`
    font-size: 16px;
    padding-left: 1rem;
    @media only screen and (max-width: 1000px) {
        
        
        font-size: 12px;
        padding-left: 0.8rem;
    }

`
export const JobsP = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 5px 5px 5px 0px;
    padding-left: 1rem;
    @media only screen and (max-width: 1000px) {
        
    
        font-size: 0.8rem;
        padding-left: 0.8rem;
    }
`

export const JobsH2 = styled.h2`
    font-size: 1.0rem;
    margin: 5px 5px 5px 0px;
    padding-left: 1rem;
    @media only screen and (max-width: 1000px) {
        
        font-size: 1rem;
        padding-left: 0.8rem;
    }
    
`

export const JobApply = styled.a`
    border: solid #260A81;
    background: #260A81;
    border-radius: 50px;
    text-decoration: none;
    padding: 8px;
    float: right;
    margin: 10px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
        color: #260A81;
        background: white;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        
    }
    @media only screen and (max-width: 1000px) {
        font-size: 0.8rem;
       
        padding: 7px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 0.6rem;
        padding: 5px;
    }
`

export const Search = styled.div`
    padding: 0 3rem;
    display: flex;
    margin-top: 4rem;
    border-radius: 0.8rem;
    background-color:white;
    box-shadow: 5px 5px 50px 5px #e5e4e2;
    padding: 1.5rem;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
    
`
export const SearchOne = styled.input`
margin: 0 1rem;
border-radius: 0.7rem;
width: 250px;
background: #e5e4e2;
padding: 1rem;
border: none;
font-weight: bold;
font-size: 18px;
@media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
}
`
export const SearchTwo = styled.input`
margin: 0 1rem;
border-radius: 0.7rem;
border: none;
background: #e5e4e2;
width: 250px;
padding: 1rem;
font-weight: bold;
font-size: 18px;
@media only screen and (max-width: 600px) {
    margin-bottom: 1rem;
}
`
export const Button = styled.button`
border-radius: 50px;
padding: 1rem;
width: 7rem;
cursor: pointer;
color: white;
background: #260A81;
outline: none;
white-space: nowrap;
border: none;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover{
    background: white;
    color: #260A81;
    border: solid #260A81;
}
@media only screen and (max-width: 600px) {
    padding: 1rem;
    margin-left: 1.2rem;
}

`