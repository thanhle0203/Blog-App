import React from 'react'
import "./login.css"

export const Login = () => {
  return (
    <div className='login'>
        
        <form className='loginForm'>
            <div className='loginTitle'>Login</div>
            
            <label className='loginLabel'>Email</label>
            <input type='text' className='loginInput' placeholder='Enter your email...' />
            <label className='loginLabel'>Password</label>
            <input type='password' className='loginInput' placeholder='Enter your password...' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}
