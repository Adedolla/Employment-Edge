import React from 'react'
import './navbar.css'
import { TbHexagonLetterDFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className="NavHome">
        <div className="NavHome-Logo">
        <NavLink><TbHexagonLetterDFilled style={{color:'yellow',fontSize:[50]}} /></NavLink>
        </div>
        <ul className='navList'>
        <NavLink to='/' style={{color:'yellow', fontSize:[]}}><li >Home</li></NavLink>
            <li><a href="./">About</a></li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar