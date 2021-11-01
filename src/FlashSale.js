import React , {useState , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import './scss/FlashSale.scss';
import Products from './Products';
import {Link} from 'react-router-dom';
import {setProducts} from './redux/action/productActions';
import axios from 'axios';

function FlashSale() {
    const dispatch = useDispatch();
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
             <Link to="/product_detail">   <div className="shopMore">SHOP MORE</div></Link>
            </div>

            <div className="product-container">
        {products.map(i => (
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
