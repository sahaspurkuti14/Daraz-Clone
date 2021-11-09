import React from 'react';
import "./scss/Header.scss";
import {Link} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import {useSelector} from 'react-redux';
import {setLogout} from './redux/action/userActions';

function Header() {
    const user = useSelector(state => state.users.user);

    const logout = () => {
         console.log("logout")
    }
    return (
        <div className="container">  
            <div className ="header">   
                <div className="header-item" style={{color:"#ff6801"}}> SAVE MORE ON APP </div>
                <div className="header-item"> SELL ON DARAZ</div>
                <div className="header-item"> CUSTOMER CARE </div>
                <div className="header-item"> TRACK MY ORDER</div>
                {/* {user?
                    <>
                    <div className="header-item"> {user.name} 's Account</div>
                    <GoogleLogout
                        cientId="658891278066-og9pe2u30fptm6dlbguvnl4b0kdk2a6u.apps.googleusercontent.com"
                        bulttonText="Logout"
                        onLogoutSuccess={logout}
                        render={renderProps => (
                        <div className="header-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>LOG OUT</div>
                        )} 
                        /> 
                    </>
                :
                <> */}
                <Link to="/login" style={{ textDecoration: 'none' }}><div className="header-item"> LOGIN </div></Link>
                <Link to="/register" style={{ textDecoration: 'none' }}><div className="header-item"> SIGN UP </div></Link> 
                {/* </>
                } */}
            </div>                     
        </div>
    )
}

export default Header
