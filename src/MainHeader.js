import React from 'react';
import "./scss/MainHeader.scss";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import Header from './Header';
import {useSelector} from 'react-redux';

function MainHeader() {
    const cart = useSelector(state => state.addCart.cart);
    return (
        <div>
        <Header/>
        <div className="mainheader">
                <Link to="/" style={{ textDecoration: 'none' }}><img className="logo" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png" alt="#"/></Link>
                <input className="search-box" type="text" placeholder="Search in Daraz"/>
                <button className="search-button">{<SearchIcon/>}</button>
                <Link to="/cart" style={{ textDecoration: 'none', color:'black' }}>
                    <div className="cart">
                        {<ShoppingCartOutlinedIcon className="cart-icon"/>}
                        <div className="cart-count">{cart.length}</div>
                    </div>
                </Link>               
                <img className="last-ad" src="https://icms-image.slatic.net/images/ims-web/9a6f2bbd-0287-4e3e-acd7-497ac2d66cc7.gif" alt=""/>  
        </div>
        </div>
    )
}

export default MainHeader;
