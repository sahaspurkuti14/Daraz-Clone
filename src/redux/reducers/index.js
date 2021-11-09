import {combineReducers} from 'redux';
import {productReducer , selectedProductReducer } from "./productReducer";
import {userReducer , userLogout} from './userReducer';
import {addToCart , removeFromCart} from './cartReducer';

export const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    users : userReducer,
    // logout : userLogout,
    addCart : addToCart,
    removeCart : removeFromCart,
});