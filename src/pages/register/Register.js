import React from 'react'
import "./register.css"
import { Link } from "react-router-dom"

export const Register = () => {
  return (
    <div className='register'>
        
        <form className='registerForm'>
            <div className='registerTitle'>Register</div>
            <label className='registerLabel'>Name</label>
            <input type='text' className='registerInput' placeholder='Enter your username...' />
            <label className='registerLabel'>Username</label>
            <input type='text' className='registerInput' placeholder='Enter your username...' />
            <label className='registerLabel'>Email</label>
            <input type='text' className='registerInput' placeholder='Enter your email...' />
            <label className='registerLabel'>Password</label>
            <input type='password' className='registerInput' placeholder='Enter your password...' />
            <label className='registerLabel'>Password Confirm</label>
            <input type='password' className='registerInput' placeholder='Enter your confirm password...' />
            <button className='registerButton'>Register</button>
            
        </form>
        <button className='registerLoginButton'>
            <Link className='link' to="/login">Login</Link>
        </button>
        
    </div>
  )
}
