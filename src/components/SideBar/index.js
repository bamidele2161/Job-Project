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
                        <SidebarLink to='Home' onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Testimonies</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Find</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Login</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>signup</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtn>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
