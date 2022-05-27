import React, { useState } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import { auth } from "./firebase";
import './Login.css';
import { toast } from "react-toastify";
function Login() {
    const history = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name ,setName] = useState('');
    const signIn = e=> {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
    }

    const register =e =>{
        e.preventDefault();
        // 

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history('/')
                }
            })
            .catch(error => alert(error.message))

    
        
    }
  return (
    <div className='login'>
             <Link to='/'>
                <img
                    className="login__logo"
                    src='images/ll.png' 
                />
            </Link>
            <div className='login__components'>
                    <div className='login__container'>
                        <h1>
                            Sign-in
                        </h1>
                        <form>
                            <h5>E-mail</h5>
                            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                            <h5>Password</h5>
                            <input type='password'value={password} onChange={e=>setPassword(e.target.value)}/>
                            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                        </form>
                        {/* <button  className='login__registerButton' onClick={register}>Create your Instazon Account</button> */}
                    </div>

                    <div className='login__container'>
                        <h1>
                            Register
                        </h1>
                        <form>
                            <h5>Name</h5>
                            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
                            <h5>E-mail</h5>
                            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                            <h5>Password</h5>
                            <input type='password'value={password} onChange={e=>setPassword(e.target.value)}/>
                        </form>
                            <button  className='login__registerButton' onClick={register}>Create your Instazon Account</button>
                    </div>
            </div>

    </div> 
  )
}
export default Login
