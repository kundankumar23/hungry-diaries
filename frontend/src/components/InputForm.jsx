import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function InputForm({setIsOpen}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState("");

    const handleOnSubmit = async(e) => {
        e.preventDefault();
        let endpoint = (isSignUp) ? "signUp" : "login";
        await axios.post(`http://localhost:5000/${endpoint}`, {email, password})
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setIsOpen();
        })
        .catch(data => setError(data.response?.data?.error))
    }

  return (
    <>
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-control">
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id='email' className='input' onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter your email"/>
            </div>
            <div className="form-control">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id='password' className='input' onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter your password"/>
            </div>
            <button type='submit'>
                {(isSignUp) ? "Sign Up" : "Login"}
            </button>
            <br />
            {(error != "") && <h6 className='error'>{error}</h6>}
            <p onClick={()=>setIsSignUp(!isSignUp)}>
                {(isSignUp) ? "Already have an account" : "Create new account"}
            </p>
        </form>
    </>
  )
}