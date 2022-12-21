import React from 'react'
import './SignInPage.css'
import { useNavigate } from 'react-router-dom';
import { Btn_Main } from '../../Components/Btn_Main/Btn_Main'
import {useState} from 'react';


export const SignInPage = ()=>{
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pasword, setPassword] = useState('');

  const handleChangeemail = event => {
    setEmail(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  

  const navig = ()=>{
    if(email == "gayansanjeewa@gmail.com" && pasword =="qwertyui"){
      navigate("/home")
    }
    else{
      alert("you are not a valid user. please check the pasword and email")
    }
    
  }



    return(
        <div className="container">
        <div className="wrapper">

          <div className="title"><span>Log In</span></div>

          <form className='formContainer' action="#">

            <div className="row">
              <input className = "inputField" type="text" placeholder="Email or Phone" onChange={handleChangeemail}   required/>
            </div>

            <div className="row">
              <input className = "inputField" type="password" placeholder="Password" onChange={handleChangePassword} required/>
            </div>
            
            <div id='signin_page_btn_container'>
                    <Btn_Main callback={navig} label = {"Log In"} />
                </div>

            <div className="pass"><span>Forgot your password?</span><a href="#">Click here</a></div>

          </form>
        </div>
      </div>
    )
}