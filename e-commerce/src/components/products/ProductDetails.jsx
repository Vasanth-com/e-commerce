import React, { useEffect, useState } from 'react'
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
    const [afterDiscountPrice,setAfterDiscountPrice] = useState(0)

    console.log(product);


    const handleAddToCart = () =>{
        dispatch(addCartItem(product))
        navigate('/cart')
    }


    const discountPrice = () =>{
        let discountPrice = product.price * (product.discountPercentage/100);
        const priceDiscount = product.price - discountPrice;
        setAfterDiscountPrice(Math.floor(priceDiscount))
    }

    useEffect(()=>{
        discountPrice()
    },[product])
  return (
    <main className='main-container'>
        <div style={{position: "fixed",
    zIndex: "9999",
    inset: "16px",
    pointerEvents: "none"}}></div>
        {loading ? "loading":""}
        {error ? "error":""}
        {
            product && (
                <div key={product.id} className='product-detail-container'>
            <div>
                <div className="image-container">
                    <img src={product.images[0]} alt="" className='product-detail-image' />
                </div>
            </div>
            <div className="product-detail-desc">
                    <h1>{product.title}</h1>
                <div className="reviews">
                    {Array(Math.floor(product.rating)).fill().map((_,i)=>
                        <span>🌟</span>
                    )}
                    <p>({product.reviews.length} Reviews)</p>
                </div>
                <h4>Detail</h4>
                <p>{product.description}</p>
                <div className='price_container'>
                <p className='price'>${afterDiscountPrice}</p>
                <p className='price-original'>${product.price}</p>
                </div>
                <button className='btn ' onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
            )
        }
    </main>
  )
}

export default ProductDetails
