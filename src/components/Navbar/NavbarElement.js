import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const Nav = styled.div`
    
    background: #260A81;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    
    z-index: 10;
    
    
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
   
    

`

export const Link = styled(LinkR)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 5rem;
    cursor: pointer;
    font-weight: bold;
    height: 100%;
    &:hover {
        color: #9177e6;
        transition: all 0.2s ease-in-out;
    }

    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        padding: 0 4rem;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        padding: 0 2rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        padding: 0 1rem;
    }
`
export const LinkBtn = styled(LinkR)`
    cursor: pointer;
    list-style-type: none;
    text-decoration: none;
    display: flex;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 20px;
    padding: 0 2rem;
    height: 2.5rem;
    color: #260A81;
    background: white;
    outline: none;
    margin: 1rem;
    &:hover {
        color: #9177e6;
        background: #260A81;
        border: solid #260A81;
        transition: all 0.2s ease-in-out;
    }
    @media only screen and (min-width: 1100px) and (max-width: 1350px) {
        padding: 0 1.6rem;
        margin: 0.8rem;
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        padding: 0 1.3rem;
        margin: 0.6rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
        padding: 0 1rem;
        margin: 0.4rem;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavUl = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;


    list-style: none;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`
export const SocialIconLink = styled.a`
    color: white;
    font-size: 60px;
    margin-top: 0.7rem;
    cursor: pointer;

`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transfom: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        margin-top: 25px;
    }
    @media only screen and (max-width: 600px) {
        
        margin-right: 1rem;
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 400px) {
        
        margin-right: 3.5rem;
        font-size: 1.8rem;
    }
    
`

