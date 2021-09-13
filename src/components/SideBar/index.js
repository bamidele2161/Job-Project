import React from 'react'
import {
        CloseIcon, 
        Icon, 
        SidebarContainer,    
        SidebarWrapper, 
        SidebarLink, 
        SidebarMenu,
        SidebarBtn
} from './SidebarElement'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
                <Icon onClick = {toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/home' onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='/find' onClick={toggle}>Find</SidebarLink>
                        <SidebarLink to='/login' onClick={toggle}>Login</SidebarLink>
                        <SidebarLink to='/signup' onClick={toggle}>signup</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtn>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
