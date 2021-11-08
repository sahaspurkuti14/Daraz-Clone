import React from 'react';
import {useSelector} from 'react-redux';
import './scss/FlashSale.scss';
import Products from './Products';
// import {Link} from 'react-router-dom';

function FlashSale() {
   const products = useSelector(state => state.allProducts.products);

    return (
        <div className="flash-sale">
            <div className="container-title">Flash Sale </div>

            <div className="container-header">
                <div className="sale-text"> On Sale Now </div>
                <div className="timer"> Ending in 
                    <div className="timer-unit"> 00 </div>:
                    <div className="timer-unit"> 00 </div>:
                    <div className="timer-unit"> 00 </div>
                </div>
             <div className="shopMore">SHOP MORE</div>
            </div>

            <div className="product-container">
        {products.slice(6,12).map(i => (
                    <Products
                    key={i.id}
                        id={i.id}
                        image= {i.image}
                        title= {i.title}
                        discountedPrice={i.price}
                        />
                ))}
            </div>
        </div>
    )
}

export default FlashSale
