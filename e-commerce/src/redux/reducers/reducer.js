import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from '../actions/actions'

const initialState = {
    products:[],
    loading:false,
    error:null,
}

 const productReducer = (state = initialState,action) =>{
     console.log("Reducer ",action);
    
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
        return{
            ...state,
            loading:true,
        }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }    

        default:
            return state    
    }
}

export default productReducer