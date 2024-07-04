import React, { useState } from 'react'
import './header.css'
import Navbar from '../navbar/Navbar';
import LoginPopUp from '../loginpopup/LoginPopUp';

const Header = ({handleLoginClick}) => {
  return (
    <div className='header'>
      <Navbar handleLoginClick={handleLoginClick}/>
    </div>
  )
}

export default Header
