import React, { useState } from 'react'
import './category.css'
import { useDispatch } from 'react-redux';
import {setBrandTerm, setPriceTerm} from '../../redux/actions/filterActions'
const Category = ({products=[]}) => {
  const [brand,setBrand] = useState('');
  const [price,setPrice] = useState('');
  const dispatch = useDispatch();

  const uniqueBrands = [...new Set(products.map(product => product.brand))]

  const handleBrandOnChange = (e) =>{
      setBrand(e.target.value);
      dispatch(setBrandTerm(e.target.value));
  }

  const handlePriceOnChange = (e) =>{
    setPrice(e.target.value);
    dispatch(setPriceTerm(e.target.value))
  }



  return (
    <div className='categories'>
            <div className='cate_conte'>
            {/* <p>brand</p> */}
            <select value={brand} onChange={handleBrandOnChange}>
              <option value="">All Brands</option>
              {
                uniqueBrands.map((brand,idx)=>{
                 return (<option key={idx} value={brand}>{brand}</option>)
                })
              }
            </select>
            {/* <p>price</p> */}
            {/* <input type="number" value={price} onChange={handlePriceOnChange}  /> */}
        </div>
    </div>
  )
}

export default Category
