import styled from 'styled-components'

export const HeroContainer = styled.div`
    height: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const HeroDetails = styled.div`
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;

`

export const HeroH1 = styled.h1`
    width: 100%;
    font-size: 3rem;
    margin-top: 100px;
`
export const Hero2H1 = styled.h1`
    width: 100%;
    font-size: 3rem;
    margin-bottom: 30px;
`
export const HeroP = styled.p`
    width: 100%;
    font-size: 1.5rem;
`
export const Search = styled.div`
    padding: 0 3rem;
    display: flex;
    margin-top: 4rem;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 50px 5px #e5e4e2;
    padding: 1.5rem;

    
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
`
export const Button = styled.button`
border-radius: 50px;
padding: 3 2rem;
width: 7rem;
height: 3rem;
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

`