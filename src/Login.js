import React , {useState } from 'react';
import {Link , useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './scss/Login.scss';
import MainHeader from './MainHeader';

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
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                        <div className="input-title"> Password* </div>   
                        <input type="password"  value={password} onChange={e => setPassword(e.target.value)} />
                        
                    </form>
                </div>
                <div className="column2">
                    <button type="submit" onClick={signIn} className="normal-login"> LOGIN </button>
                    <span>Or,login with</span>
                    <button className="facebook-login">Facebook</button>
                    <button className="google-login">Google</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Login
