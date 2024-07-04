export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const UPDATE_QUANTITY_ITEM = 'UPDATE_QUANTITY_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const GET_CART_TOTAL_AMOUNT = 'GET_CART_TOTAL_AMOUNT'


export const addCartItem = (product) =>({
    type:ADD_CART_ITEM,
    payload:product
})

export const removeCartItem = (productId) =>({
    type:REMOVE_CART_ITEM,
    payload:productId
})

export const updateQuantityItem = (productId,quantity) =>({
    type: UPDATE_QUANTITY_ITEM,
    payload:{productId,quantity}
})


