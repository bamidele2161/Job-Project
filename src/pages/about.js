import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutPage from '../components/AboutPage'
import Sidebar from '../components/SideBar'
import Swipers from '../components/Swipers'
import {One, Two, Three} from '../components/AboutPage/data'
import AboutContent from '../components/AboutContent'




const About = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <AboutContent />
            <AboutPage  {...One}/>
            <Swipers />
            <Footer />
        </div>
    )
}

export default About;

