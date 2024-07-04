import React from 'react'
import './search.css'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../../redux/actions/filterActions'
const Search = () => {
  const dispatch = useDispatch();

 const handleOnChange = (e) =>{
    dispatch(setSearchTerm(e.target.value))
 }

  return (
    <div className='form'>
     <input type="text" placeholder='Search product' onChange={handleOnChange} />  
     
    </div>
  )
}

export default Search
