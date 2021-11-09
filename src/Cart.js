import React from 'react';
import MainHeader from './MainHeader';
import './scss/Cart.scss';
import {useSelector} from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CartItems from './CartItems';
import {Link} from 'react-router-dom';

function Cart() {
    const user = useSelector(state => state.users.user);
    const cartItem = useSelector(state => state.addCart.cart);
    return (        
        <>
            <MainHeader/>
            {console.log(cartItem)}
            <div className="cart">
                {Object.keys(cartItem)?.length === 0 ?
                    <div className="no-items">            
                        <div className="text">There are no items in this cart</div>
                        <Link to="/"><button> CONTINUE SHOPPING </button></Link>
                    </div>
                    :
                <>
                <div className="cart-section">
                        <div className="cart-header">
                            <div className="checkbox-side"><input type="checkbox"/> SELECT ALL (2 ITEM(S))</div>
                            <button className="delete-btn"><DeleteOutlineIcon/> DELETE </button>
                        </div>
                        <div className="cart-items-display">
                            {cartItem?.map(item => (
                                <CartItems
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

                <div className="order-summary">
                    <h3>Order Summary </h3>
                    <div className="subtotal-row">
                        <div className="subtotal-heading">Subtotal (0 items)</div>
                        <div className="subtotal"> Rs. 0 </div>
                    </div>
                    <div className="coupon">
                        <input type="text" placeholder="Enter Voucher Code"/>
                        <button>APPLY</button>
                    </div>
                    <div className="total-row">
                        <div className="total-heading">Total </div>
                        <div className="total"> Rs. 0 </div>
                    </div> 
                    <button className="checkout-btn">PROCEED TO CHECKOUT </button>           
                </div>
                </>
}
            </div>
        </>
    )
}

export default Cart
