import React from 'react'
import './SignUpPage.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';


 const SignUpPage = ()=>{

    const [email, setEmail] = useState('');
    const [pasword, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const handleChangeemail = event => {
        setEmail(event.target.value);
      };
      const handleChangePassword = event => {
        setPassword(event.target.value);
      };
      const handleChangeConfirm = event => {
        setConfirm(event.target.value);
      };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(pasword == confirm && pasword.length>=8){
            alert("welcome to Memorez...")
            navigate("/home")
        }else{
            alert("Password is not maching or it may be less than 8 characters")
        }
      }

      if(true) {
        history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
          history.go(1);
        };
      }

    return(
        <div id='signUpFullContainer'>
            <div id = "signUpLeftContainer">
                <h2>Sign Up</h2>
                <form action="" id = "signUpForm" onSubmit={handleSubmit}>
                    <input className='signUpInput' type ="text" placeholder = "First Name" required id = "firstName" />
                    <input className='signUpInput' type ="text" placeholder = "Second Name" id = "lastName"/>
                    <input className='signUpInput' onChange={handleChangeemail} type ="email" placeholder = "Email" required id = "email" />
                    <input className='signUpInput' type="tel"  placeholder = "Mobile" name="phone" pattern="[0-9]{10}" id="phone"/>
                    <select className='signUpInput' name="province" id="province" >
                        <option value="" disabled selected>Province</option>
                        <option value="bp">Baticaloa</option>
                        <option value="ep">Eastern</option>
                        <option value="np">Northern</option>
                        <option value="nc">North Central</option>
                        <option value="nw">North Western</option>
                        <option value="sg">Sabaragamuwa</option>
                        <option value="sp">Southern</option>
                        <option value="up">Uva</option>
                    </select>
                    <input className='signUpInput' type ="text" placeholder = "Adderess First line" id = "adreesFirstLine"/>
                    <input className='signUpInput' type ="text" placeholder = "Adderess Second line" id = "adreesSecondLine"/>
                    <input className='signUpInput' type ="password" onChange={handleChangePassword} placeholder = "Password" id = "password"/>
                    <input className='signUpInput' type ="password" onChange={handleChangeConfirm} placeholder = "Conform Password" id = "conformPassword"/>
                    <input className='signUpInput' type="submit" value = "Submmit"  id= "btnSubmit"/>
                </form>
            </div>
            
        </div>
    )
}

export default SignUpPage;