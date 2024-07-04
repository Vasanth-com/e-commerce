export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const SET_PRICE_TERM = 'SET_PRICE_TERM'
export const SET_BRAND_TERM = 'SET_BRAND_TERM'


export const setSearchTerm = (term) =>({
    type:SET_SEARCH_TERM,
    payload:term
})

export const setBrandTerm = (brand) =>({
    type:SET_BRAND_TERM,
    payload:brand
})

export const setPriceTerm = (price) =>({
    type:SET_PRICE_TERM,
    payload:price
})


