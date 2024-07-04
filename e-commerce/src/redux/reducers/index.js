import {combineReducers} from 'redux'
import productReducer from './reducer'
import filterReducer from './filterReducer'
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
    product:productReducer,
    filters:filterReducer,
    cartItems:cartReducer
})


export default rootReducer