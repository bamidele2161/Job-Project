import React, {useState} from 'react'
import '../../src/App.css'
import Navbar from '../components/Navbar'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Sidebar from '../components/SideBar'
import Landing from '../components/Landing'
import Swipers from '../components/Swipers'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div path="Home" id="Home">
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Landing />
      <Details />
      <Swipers />
      <Footer />
    </div>
  )
}

export default Home
