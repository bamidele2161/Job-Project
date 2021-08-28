import React, {useState} from 'react'
import '../../src/App.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Sidebar from '../components/SideBar'
import JobDisplay from '../components/JobDisplay'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div path="Home" id="Home">
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <JobDisplay />
      <Footer />
    </div>
  )
}

export default Home
