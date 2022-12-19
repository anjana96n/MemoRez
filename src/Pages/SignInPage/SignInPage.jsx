import React from 'react'
import './SignInPage.css'
import { useNavigate } from 'react-router-dom';
import { Btn_Main } from '../../Components/Btn_Main/Btn_Main'

export const SignInPage = ()=>{
  const navigate = useNavigate();

    return(
        <div className="container">
        <div className="wrapper">

          <div className="title"><span>Log In</span></div>

          <form className='formContainer' action="#">

            <div className="row">
              <input className = "inputField" type="text" placeholder="Email or Phone" required/>
            </div>

            <div className="row">
              <input className = "inputField" type="password" placeholder="Password" required/>
            </div>
            
            <div id='signin_page_btn_container'>
                    <Btn_Main callback={()=>{navigate("/home")}} label = {"Log In"} />
                </div>

            <div className="pass"><span>Forgot your password?</span><a href="#">Click here</a></div>

          </form>
        </div>
      </div>
    )
}