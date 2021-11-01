import React from 'react';
import "./scss/Header.scss";

function Header() {
    return (
        <div className="container">  
            <div className ="header">         
                <div className="header-item" style={{color:"#ff6801"}}> SAVE MORE ON APP </div>
                <div className="header-item"> SELL ON DARAZ</div>
                <div className="header-item"> CUSTOMER CARE </div>
                <div className="header-item"> TRACK MY ORDER</div>
                <div className="header-item"> LOGIN </div>
                <div className="header-item"> SIGN UP </div> 
            </div>                     
        </div>
    )
}

export default Header