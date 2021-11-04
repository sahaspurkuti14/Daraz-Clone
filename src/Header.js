import React from 'react';
import "./scss/Header.scss";
import Login from './Login';
import {Link} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

function Header() {
    const logout = () => {
        alert("logout successful");
    }
    return (
        <div className="container">  
            <div className ="header">         
                <div className="header-item" style={{color:"#ff6801"}}> SAVE MORE ON APP </div>
                <div className="header-item"> SELL ON DARAZ</div>
                <div className="header-item"> CUSTOMER CARE </div>
                <div className="header-item"> TRACK MY ORDER</div>
                <Link to="/login"><div className="header-item"> LOGIN </div></Link>
                <Link to="/register"><div className="header-item"> SIGN UP </div></Link> 
                <GoogleLogout
                    clientId="658891278066-og9pe2u30fptm6dlbguvnl4b0kdk2a6u.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    render={renderProps => (
                    <div className="header-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>LOG OUT</div>
                    )} 
                    />
            </div>                     
        </div>
    )
}

export default Header
