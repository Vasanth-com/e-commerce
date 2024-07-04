import React, { useState } from 'react'
import Search from '../search/Search'
import Category from '../category/Category'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import logo from '../../assets/shopify.png'
import './navbar.css'
const Navbar = ({handleLoginClick}) => {
  const {products} = useSelector((state)=>state.product)

  const handleClick = () =>{
    handleLoginClick()
  }
  return (
    <div className='navbar'>
        <Link to='/'>
        <img src={logo} alt="" />
        </Link>
      <div>
      <Search/>
      </div>
      <div>
      <Category products={products} /> 
     </div> 
     <div>
         <button className='sign__btn' onClick={handleClick}>Sign In</button>
      </div> 
     <Link to='/cart'  className='cart-btn'><FaCartPlus/></Link>
    </div>
  )
}

export default Navbar
