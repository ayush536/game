import {
    GET_PRODUCTS,
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_ERROR
} from "./action";

const initState = {
    laoding: false,
    error: false,
    products: []
};

export const productReducer = (store = initState, { type, payload}) => {
    switch(type) {
        case GET_PRODUCTS_LOADING:
            return {
                ...store,
                laoding:true
            };
        case GET_PRODUCTS:
            return {
                ...store,
                laoding: false,
                products: [...payload],
                error: false
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...store,
                loading: false,
                error: true
            };
            
            default:
                return store;
    }
}