import React from 'react'
import './authentication.css' 

function Login(props) {
  return (props.trigger) ? (
    <div className='register-popup'>
        <div className='register-inner'>
            <h1>Welcome Back.</h1>
            

            <form action='http://localhost:8000/users/login' method='POST'>
              <label htmlFor="email">Email: </label>
              <br/>
              <input type="text" name='email' placeholder='Enter email' required></input>
              <br/>
              <br/>
              <label htmlFor="password" >Password: </label>
              <br/>
              <input type="password"  name='password'placeholder='Enter password' required></input>
              <br/>
              <br/>
                <button className='signup-btn' type="submit">
                  Sign Up
                </button>
              
            </form>

            <button onClick={()=>props.setTrigger(false)} className='close-btn'><i className="fa-solid fa-circle-xmark"></i></button>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default Login