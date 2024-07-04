import React, { useState } from 'react'
import './login.css'
import crossIcon from '../../assets/cross_icon.png'
import { useNavigate } from 'react-router-dom'
const LoginPopUp = ({setIsShowLogin}) => {
  const[user,setUser] = useState({
    email:"",
    password:""
  })
  const [userData,setUserData] = useState([])
  const handleOnchange = (e) =>{
     const {name,value} = e.target;
     setUser((prev)=>({
      ...prev , [name]:value
     }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUserData(user)
    alert("Successfully login..!")
    setIsShowLogin(false)
  }

  console.log(userData);
  return (  
    <div className='login__popUp'>
        <form onSubmit={handleSubmit} className='form__container'>
        <div className='form__title'>
        <h3>Sign In</h3>
        <img onClick={()=>setIsShowLogin(false)} src={crossIcon} alt="" />
        </div>
          <div className='form__inputs'>
            <input type="email"   onChange={handleOnchange}  name='email' placeholder='Email' />
            <input type="password" onChange={handleOnchange} name='password'  placeholder='Password' />
          </div>
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPopUp
