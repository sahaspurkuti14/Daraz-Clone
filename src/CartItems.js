import React , {useState} from 'react';
import './scss/CartItems.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartItems() {
    let [count , setCount] = useState(1);
    
    let increment = () => {
        setCount(count + 1);
        }

    let decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="cart-items">
            <div className="product-details">
                <input type="checkbox"/>
                <img className="product-img" src="https://static-01.daraz.com.np/p/18ad4139181cda6ac9627e3c7024847d.jpg" alt="img"/>
                <div className="title-brand">
                    <div className="product-title">Foldable and Portable Multi-Purpose Laptop Table Stand/Study Table/Bed Table/Ergonomic & Rounded Edges/Non-Slip Legs/Engineered Wood/Color </div>
                    <div className="brand-and-others">No Brand, Color Family:Black </div>
                </div>
            </div>

            <div className="price-section">
                <div className="discounted-price">Rs. 856 </div>
                <div className="marked-price">Rs. 1500 </div>
                <div className="discount-percent">-43% </div>
                <div className="wishlist-and-delete">
                    <FavoriteBorderIcon className="wishlist-icon"/>
                    <DeleteOutlineIcon className="delete-icon"/>

                </div>
            </div>

            <div className="quantity-counter">
                <button onClick={decrement} disabled={count<2}> - </button>
                <span> {count} </span>
                <button onClick={increment} disabled={count>4}> + </button>
            </div>
        </div>
    )
}

export default CartItems
