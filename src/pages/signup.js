import React from 'react'
import { useState } from 'react/cjs/react.development'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import SignupPage from '../components/SignUpPage'
const Signup = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <SignupPage  firstname="dele money"/>
            <Footer />
        </div>
    )
}

export default Signup
