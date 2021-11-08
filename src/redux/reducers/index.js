import {combineReducers} from 'redux';
import {productReducer , selectedProductReducer } from "./productReducer";
import {userReducer , userLogout} from './userReducer';

export const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    users : userReducer,
    // logout : userLogout
});