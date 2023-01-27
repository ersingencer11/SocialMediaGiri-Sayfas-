import { useState } from "react";
import Register from "./authentication/Register"
import Login from "./authentication/Login";
import './index.css'

export default function StartingNavbar(){

    const [registerPopup, setRegisterPopup]=useState(false)
    const [loginPopup, setLoginPopup]=useState(false)

    return(
        <div className='main'>
        <nav>
          <div className="logo">
            <a href="/"><i className="fa-brands fa-medium"></i><b>Medium</b></a>
          </div>
          <div className="menu">
            <a href="/about">About</a>
            <button onClick={()=>setLoginPopup(true)}>Sign in</button>
            <button onClick={()=>setRegisterPopup(true)}>Get started</button>
          </div>
        </nav>

        <Register trigger={registerPopup} setTrigger={setRegisterPopup} loginTrigger={loginPopup} setLoginTrigger={setLoginPopup} loginPopup={Login}/>
        <Login trigger={loginPopup} setTrigger={setLoginPopup} />
      </div>
    )
}