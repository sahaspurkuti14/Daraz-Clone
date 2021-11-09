import React , {useState} from 'react';
import './scss/CartItems.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartItems({id , image , title , discountedPrice, markedPrice}) {
    let [count , setCount] = useState(1);
    let discountPercent = (markedPrice - discountedPrice)/markedPrice * 100;
    
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
                <img className="product-img" src={image} alt="img"/>
                <div className="title-brand">
                    <div className="product-title">{title}</div>
                    <div className="brand-and-others">No Brand, Color Family:Black </div>
                </div>
            </div>

            <div className="price-section">
                <div className="discounted-price">{discountedPrice}</div>
                <div className="marked-price">{markedPrice}</div>
                <div className="discount-percent">-{discountPercent.toFixed(2)}% </div>
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
