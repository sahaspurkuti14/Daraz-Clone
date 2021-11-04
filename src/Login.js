import React , {useState } from 'react';
import {Link , useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './scss/Login.scss';
import MainHeader from './MainHeader';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))

    }
    console.log(auth);

    const responseSuccess = (response) => {
        console.log('[Login Success] current user:', response.profileObj);
        alert("hello"+response.profileObj.name)
        }

    const responseFailure = (response) => {
        console.log('[Login Failed] error:', response);
        }

    const logout = () => {
        alert("logout successful");
    }

    
    return (
        <>
        <MainHeader/>
        <div className="login">
            <div className="title">
                <div className="login-title">Welcome to Daraz! Please login. </div>
                <div className="register-link"> New member? <Link className="register" to="/register">Register </Link>here. </div>
            </div>
            <div className="login-container">
                <div className="column1">
                    <form>
                        <div className="input-title"> Email* </div>
                        <input type="text" placeholder="Please enter your Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <div className="input-title"> Password* </div>   
                        <input type="password" placeholder="Please enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                        
                    </form>
                </div>
                <div className="column2">
                    <button type="submit" onClick={signIn} className="normal-login"> LOGIN </button>
                    <span>Or,login with</span>
                    <button className="facebook-login">Facebook</button>
                    
                    <GoogleLogin
                    clientId="658891278066-og9pe2u30fptm6dlbguvnl4b0kdk2a6u.apps.googleusercontent.com"
                    render={renderProps => (
                    <button className="google-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
                    )}  
                    buttonText="Login"
                    onSuccess={responseSuccess}
                    onFailure={responseFailure}
                    cookiePolicy={'single_host_origin'}
                                      
                />
                </div>
                
                <GoogleLogout
      clientId="658891278066-og9pe2u30fptm6dlbguvnl4b0kdk2a6u.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
            </div>

        </div>
        </>
    )
}

export default Login
