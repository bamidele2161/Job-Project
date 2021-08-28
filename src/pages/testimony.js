import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TestimonyPage from '../components/TestimonyPage'
import Sidebar from '../components/SideBar'
import MyApi from '../components/MyApi/'

const Testimony = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <TestimonyPage />
            <MyApi/>
            <Footer />
        </div>
    )
}

export default Testimony;

