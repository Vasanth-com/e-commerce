import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import ProductDetails from './components/products/ProductDetails'
import Cart from './components/card/Cart'
import Header from './components/header/Header'
import LoginPopUp from './components/loginpopup/LoginPopUp'

function App() { 
  const [isShowLogin,setIsShowLogin] = useState(false)

  const handleLoginClick = () =>{
    setIsShowLogin((isShowLogin)=>!isShowLogin)
  }
  
  return (
    <>
    {isShowLogin ? <LoginPopUp setIsShowLogin={setIsShowLogin} /> :<></>}
    <div className='app'>
      <Header handleLoginClick={handleLoginClick}/>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='product-details/:id' element={<ProductDetails/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
