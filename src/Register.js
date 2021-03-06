import React , {useState } from 'react';
import {Link , useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './scss/Login.scss';
import MainHeader from './MainHeader';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <>
        <MainHeader/>
        <div className="login">
            <div className="title">
                <div className="login-title"> Create your Daraz Account. </div>
                <div className="register-link"> Already member? <Link to="/login" className="register">Login </Link>here. </div>
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
                    <button type="submit" onClick={register} className="normal-login"> SIGN UP</button>
                    <span>By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy Policy </span>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Login
