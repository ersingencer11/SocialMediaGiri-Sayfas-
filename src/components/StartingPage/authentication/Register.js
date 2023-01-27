import React from 'react'
import './authentication.css' 


function Register(props) {
  return (props.trigger) ? (
    <div className='register-popup'>
        <div className='register-inner'>
            <h1>Join Us.</h1>
            

            <form action='http://localhost:8000/users/register' method='POST'>
              <label for="email">Email: </label>
              <br/>
              <input type="text" name='email' placeholder='Enter email' required></input>
              <br/>
              <br/>
              <label for="password" >Password: </label>
              <br/>
              <input type="password"  name='password' placeholder='Enter password' required></input>
              <br/>
              <br/>
              <label for="password-rpt" >Repat Password: </label>
              <br/>
              <input type="password"   placeholder='Repeat password' required></input>
              <br/>
              <br/>

              
                <button onClick={()=>{props.setLoginTrigger(true); props.setTrigger(false)}} className='signup-btn' type='submit'>
                  Sign Up
                </button>
            </form>

            <button onClick={()=>props.setTrigger(false)} className='close-btn'><i className="fa-solid fa-circle-xmark"></i></button>
            {props.children}

            <props.loginPopup trigger={props.loginTrigger} setTrigger={props.setLoginTrigger} />
        </div>
    </div>
  ) : ""
}

export default Register