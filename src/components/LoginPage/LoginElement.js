import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 900px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    
`
export const LoginH1 = styled.h1`
    font-size: 2.3rem;
    color: #260A81;
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
        
    }
`
export const LoginHr = styled.hr`
    font-size: 2.3rem;
    color: #260A81;
    margin-bottom: 5rem;

`
export const LoginForm = styled.form`
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding: 3rem;
    box-shadow: 5px 5px 50px 5px #e5e4e2;
    @media only screen and (max-width: 600px) {
        width: 300px;
    }
    @media only screen and (max-width: 400px) {
        width: 250px;
    }
    
    
`
export const LoginField= styled.div`
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 15% 85%;
    background: #ebe6fc;
    height: 40px;
    max-width: 350px;
    padding: 0.4rem;
    margin: 1.5rem 0;
    border-radius: 0.5rem;


`
export const LoginInput = styled.input`
    font-size: 1.1rem;
    background: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    outline: none;
    @media only screen and (max-width: 600px) {
        font-size: 1rem;
        
    }
`
export const LoginButton = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    
`

export const Btn = styled.button`
    border-radius: 10px;
    margin: 30px 0;
    padding: 3 2rem;
    width: 350px;
    border: none;
    height: 3rem;
    cursor: pointer;
    color: white;
    background: #260A81;
    outline: none;
    font-size: 1rem;
    white-space: nowrap;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    font-weight: bold;

    &:hover{
        background: white;
        color: #260A81;
        border: solid #260A81;
}
@media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    
}
    
`
export const LoginIcon= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    padding: 7px;
    margin: 5px;
`
export const LoginA= styled.a`
margin-left: 230px;
cursor: pointer;
color: #260A81;
font-weight: bold;
@media only screen and (max-width: 600px) {
    margin-left: 164px;
    
}
@media only screen and (max-width: 400px) {
    margin-left: 140px;
    font-size: 13px;
    
}
`

export const LoginP= styled.p`
color: #260A81;
font-weight: bold;
margin: 2rem 0;
align-items: center;
display: flex;
justify-content: center;

`
export const SocialIconLink= styled.i`
    justify-content: space-around;
    font-size: 2rem;
    cursor: pointer;
    color: #260A81;
    padding: 0.3rem;
    border-radius: 5rem;
    &:hover{

        transition: 0.3s ease-out;
        color: white;
        background: #260A81;
        border: solid #260A81;
        justify-content: center;
        align-items: center;
        padding-top: 0.4rem;
    }
    @media only screen and (max-width: 600px) {
        font-size: 1.6rem;
        
    }

`
export const InputIcon = styled.div`
    text-align: center;
    color: #acacac;
    font-size: 1.2rem;
    margin-top: 0.5rem;
`