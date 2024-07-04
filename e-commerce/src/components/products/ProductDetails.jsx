import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import {addCartItem} from '../../redux/actions/cartActions'

import './productdetail.css'
const ProductDetails = () => {
    const {id} = useParams();
    const {products,loading,error} = useSelector(state => state.product)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const product = products.find((p)=>p.id === parseInt(id))

    console.log(product);


    const handleAddToCart = () =>{
        dispatch(addCartItem(product))
        navigate('/cart')
    }


  return (
    <div className='product_details'>
        {loading ? "loading":""}
        {error ? error :""}
       { product &&
        ( 
        <div key={product.id} className="product_details__content">
            <div className='product-img'>
            <img src={product.images[0]} alt="" />
            </div>
            <div className='product__content-right'>
                <div className='row-1'>
                <b>{product.title}</b>
                <p>{product.description}</p>
                </div>
               <div className='row-2'>
               <p>Price: ${product.price} </p>
                <p>Discount: {product.discountPercentage} %</p>
                <p>Stock: {product.stock}</p>
                <p>Quantity: {product.minimumOrderQuantity}</p>
                </div>
                <div className='rating__col'>
                    <p>Rating:</p>
                {Array(Math.floor(product.rating)).fill().map((_,i)=>
                <p>🌟</p>
                    )}
                    <p>({product.reviews.length} Reviews)</p>
                </div>
            <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
            <Link style={{textDecoration:"none",textAlign:"center"}} to= '/' className='btn'>Go back</Link>
            </div>
        </div>)}
     
    </div>
  )
}

export default ProductDetails
