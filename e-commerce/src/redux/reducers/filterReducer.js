import {
    SET_SEARCH_TERM,
    SET_PRICE_TERM,
    SET_BRAND_TERM
} from '../actions/filterActions'


const initialState = {
    searchTerm :"",
    price:"",
    brand:""
}

const filterReducer = (state = initialState , action) =>{
    switch(action.type){
        case SET_SEARCH_TERM:
            return{
                ...state,
                searchTerm:action.payload
            }
        case SET_BRAND_TERM:
            return{
                ...state,
                brand:action.payload
            }    

        case SET_PRICE_TERM:
            return {
                ...state,
                price:action.payload
            }   
        default:
            return state    
    }
}

export default filterReducer