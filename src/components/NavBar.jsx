import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assests/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false); 
    const handleClick = () => {setNav(!nav)}
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[black] text-white font-serif'>
    {/* Menu */}
        <ul className='hidden md:flex'>
        <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
        </li>
        <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
        </li>
        <li>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
        </li>
        <li>
            <Link to="work" spy={true} smooth={true} duration={500}>
              Work
            </Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1f7FHlZdHLl3umKfbRSrnI1rmiQ6Blpm4/view?usp=sharing">Resume</a>
        </li>
        <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
        </li>
        <li>Playground</li>
        </ul>

    {/* Hamburger */}
    <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
        </li>
        <li className='py-6 text-4xl'>
          <a href="https://drive.google.com/file/d/1f7FHlZdHLl3umKfbRSrnI1rmiQ6Blpm4/view?usp=sharing">Resume</a>
        </li>
        <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
        </li>
        <li className='py-6 text-4xl'>
          Playground
        </li>
    </ul>
    <div>
        <img src={Logo} alt="Logo Image" style={{width: '150px'}}/>
    </div>
    </div>
  )
}

export default NavBar