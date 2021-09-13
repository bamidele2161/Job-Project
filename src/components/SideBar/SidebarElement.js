import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    &:hover{
        color: #260A81;
    }
    @media only screen and (max-width: 600px) {
        margin-right: 1.2rem;
    }
    
`
export const Icon = styled.div`
    position: absolute;
    top: 5rem;
    right: 1.5rem;
    font-size: 2rem;
    outline: none;
    background: transparent;
    cursor: pointer;

    

`
export const SidebarWrapper = styled.div`
        color: #fff;
`;
export const SidebarBtn = styled.div`
        display: flex;
        justify-content: center;
        
`
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 55%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (
        isOpen ? '100%' : '0'
    )};
    top: ${({isOpen}) => (
        isOpen ? '0' : '-100%' 
    )};

`
export const SidebarLink = styled(LinkR)`
    display: flex;
    list-style: none;
    cursor: pointer;
    color: white;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;


    &:hover {
        color: #260A81;
        transition: 0.2s ease-in-out;
    }
    
`
export const SidebarRoute = styled(LinkR)`
    border: solid red;
`
export const SidebarMenu = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`