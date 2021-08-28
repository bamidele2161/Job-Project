import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LoginPage from '../components/LoginPage'
import Sidebar from '../components/SideBar'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <LoginPage />
            <Footer />
        </div>
    )
}

export default Login
