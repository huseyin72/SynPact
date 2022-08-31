import React, { useState } from 'react'
import "./Navbar.css"
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

  const [click,setClick] = useState(false);

  const handleClick = () =>{setClick(!click)}
  return (
    <div className=''>
      <nav className='navbar bg-light p-4'>

        <div className="col-md-2 text-center">
          <div className="row">
            <div className="md-4">
            <img src="" alt="LOGO" />

            </div>
         
          </div>
        </div>
        <div className="col-md-2 hamburger" onClick={handleClick}>
          {click ? (<FaTimes size={25} />) : (<FaBars size={25}/>)}
        </div>

        <div className="col-md-8 text-center mr-auto ulPart">
         <div className="row">
         <ul className={click ? "navContent-active bg-light" : "navContent"} >
            <li className='nav-item mx-5'><a className='nav-link' href="">Projelerimiz</a></li>
            <li className='nav-item mx-5' ><a className='nav-link'  href="">Hakkımızda</a></li>
            <li className='nav-item mx-5'><a className='nav-link' href="">Bize Ulaşın</a></li>
          </ul>
         </div>
        </div>

        

      </nav>
    </div>
  )
}

export default Navbar





/* import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src="" alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

 */
/* import React, { Component } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css"
import { useState } from "react";




const Navbar = () => {

  const [click,setClick] = useState(false)
  const handlerClick = () =>{setClick(!click)}



  return (
    <div className=' header '> 
    <nav className="navbar">
      <a href="/" className='logo'>
        <img src="" alt="Logo" />
        
      </a>

      <div className="hamburger " onClick={handlerClick}> 
      {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
       </div>
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li className="nav-item dropdown"><a href="">Projeler</a></li>
        <li className="nav-item"><a href="">Hakkımızda</a></li>
        <li className="nav-item"><a href="">Bize Ulaşın</a></li>
      </ul>
    </nav>
   
    </div>
  )
}

export default Navbar */