import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavUl,
    MobileIcon,
    NavBtn,
    Link,
    LinkBtn
} from './NavbarElement'
import { SocialIconLink } from './NavbarElement'
import {FaFortAwesomeAlt, FaBars} from 'react-icons/fa'
import { red } from '@material-ui/core/colors'

const Navbar = ({toggle}) => {


    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFortAwesomeAlt />
                    </SocialIconLink>
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavUl>
                      <Link 
                      
                      to="/home">
                        Home</Link>
                      
                      <Link 
                       to="/about">About</Link>


                      <Link  to="/find">Find</Link>
                       
                    
                  </NavUl>
                  <NavBtn>
                  <LinkBtn to="/login">Login</LinkBtn>
                  <LinkBtn  to="/signup"> Sign Up </LinkBtn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
