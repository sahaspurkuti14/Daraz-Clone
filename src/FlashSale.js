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
            </div>

            <div className="product-container">
        {products?.slice(6,12).map(item => (
                    <Products
                    key={item.id}
                        id={item.id}
                        image= {item.image}
                        title= {item.title}
                        discountedPrice={item.price +500}
                        markedPrice = {item.price + 1000 }
                        />
                ))}
            </div>
        </div>
    )
}

export default FlashSale
