import React from 'react';
import './scss/Products.scss';
import {Link} from 'react-router-dom';

function Products( {id , image , title , discountedPrice, markedPrice}) {

    let discountPercent = (markedPrice - discountedPrice)/markedPrice * 100;


    return (
        <Link to={`/product_detail/${id}`} style={{ textDecoration: 'none' }}>
        <div className="product">
            <img className="product-image" src= {image} alt="img"/>
            <div className="product-title"> {title} </div>
            <div className="discounted-price"> Rs.{discountedPrice} </div>
            {markedPrice? 
            <div className="product-price">
                <div className="marked-price"> Rs.{markedPrice} </div>
                <div className="discount-percent"> -{discountPercent.toFixed(2)}% </div>
            </div>  : "" }          
        </div>
        </Link>
    )
}

export default Products
