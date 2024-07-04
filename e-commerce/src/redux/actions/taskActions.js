import axios from 'axios'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './actions'


export const fetchProductRequest = () =>({
    type:FETCH_PRODUCT_REQUEST,
})

export const fetchProductSuccess = (products) => ({
        type:FETCH_PRODUCT_SUCCESS,
        payload:products
})

export const fetchProductFailure = (error) =>({
    type:FETCH_PRODUCT_FAILURE,
    payload:error,
})


export const fetchProducts = () => {
    return(dispatch)=>{
        dispatch(fetchProductRequest());
        axios.get('https://dummyjson.com/products?limit=100')
        .then((res)=>{
            console.log(res.data);
            dispatch(fetchProductSuccess(res.data.products))
        })
        .catch((error)=>dispatch(fetchProductFailure(error.message)))
    }
}

