import React from 'react'
import './SignInPage.css'

export const SignInPage = ()=>{
    return(
        <div className="container">
        <div className="wrapper">

          <div className="title"><span>Log In</span></div>

          <form className='formContainer' action="#">

            <div className="row">
                <label className='labels'>Email Address / Mobile Number</label>
              <input className = "inputField" type="text" placeholder="Email or Phone" required/>
            </div>

            <div className="row">
            <label className='labels'>Password</label>
              <input className = "inputField" type="password" placeholder="Password" required/>
            </div>
            
            <div className="buttonContainer">
              <input id = "btnSubmit"type="submit" value="Login"/>
            </div>

            <div className="pass"><span>Forgot your password?</span><a href="#">Click here</a></div>

          </form>
        </div>
      </div>
    )
}