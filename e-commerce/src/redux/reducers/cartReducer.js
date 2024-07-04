import {
    ADD_CART_ITEM,REMOVE_CART_ITEM,UPDATE_QUANTITY_ITEM
} from '../actions/cartActions'

const initialState = {
    items:[],
}

const cartReducer = (state = initialState ,action) =>{
        console.log(action);
        switch(action.type){
            case ADD_CART_ITEM:
                const item = state.items.find((item)=>item.id === action.payload.id)
                if(item){
                    return{
                        ...state,
                        items:state.items.map((item)=>
                        item.id === action.payload.id ? {...item, quantity:item.quantity +1}:item
                        )
                    }
                }
                return{
                    ...state,
                    items:[...state.items, {...action.payload,quantity:1}],
                }    
            case REMOVE_CART_ITEM:
                return{
                    ...state,
                    items:state.items.filter((item)=> item.id !== action.payload)
                }    
            case UPDATE_QUANTITY_ITEM:
                return{
                    ...state,
                    items:state.items.map((item)=>item.id  === action.payload.productId ? {...item,quantity:action.payload.quantity}:item)
                }
             default:
                return state   
        }

}


export default cartReducer