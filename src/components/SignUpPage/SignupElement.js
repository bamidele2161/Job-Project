import styled from "styled-components";

export const LoginContainer = styled.div`
    height: 1100px;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;

    
`
export const LoginH1 = styled.h1`
    font-size: 2.3rem;
    color: #260A81;
    font-weight: bold;
    float: left;
    @media only screen and (max-width: 600px) {
        font-size: 2rem;
        
    }
`
export const LoginHr = styled.hr`
    font-size: 2.3rem;
    color: #260A81;
    margin-bottom: 5rem;
    margin-top: 3rem;

`
export const LoginForm = styled.form`
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 415px;
    padding: 2.5rem;
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
    border-radius: 0.5rem;
    width: 100%;
    height: 40px;
    max-width: 400px;
    padding: 0.4rem;
    margin: 1.5rem 0;

`
export const LoginInput = styled.input`
    font-size: 1.2rem;
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
    border-radius: 50px;
    margin: 50px 0;
    padding: 3 2rem;
    width: 400px;
    height: 3rem;
    cursor: pointer;
    color: white;
    background: #260A81;
    outline: none;
    font-size: 1rem;
    white-space: nowrap;
    border: none;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

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
export const LoginP= styled.p`
    color: #260A81;
    font-weight: bold;
    margin: 2rem 0;

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