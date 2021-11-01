import React from 'react';
import "./scss/MainHeader.scss";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function MainHeader() {
    return (
        <div className="mainheader">
                <img className="logo" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png" alt="#"/>
                <input className="search-box" type="text" placeholder="Search in Daraz"/>
                <button className="search-button">{<SearchIcon/>}</button>
                {<ShoppingCartOutlinedIcon className="cart-icon"/>}                
                <img className="last-ad" src="https://icms-image.slatic.net/images/ims-web/9a6f2bbd-0287-4e3e-acd7-497ac2d66cc7.gif" alt=""/>  
        </div>
    )
}

export default MainHeader;
