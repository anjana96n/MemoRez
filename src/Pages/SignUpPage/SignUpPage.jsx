import React from 'react'
import './SignUpPage.css'

export const SignUpPage = ()=>{
    return(
        <div id='signUpFullContainer'>
            <div id = "signUpLeftContainer">
                <form action="" id = "signUpForm">
                    <input className='signUpInput' type ="text" placeholder = "First Name" required id = "firstName" />
                    <input className='signUpInput' type ="text" placeholder = "Second Name" id = "lastName"/>
                    <input className='signUpInput' type ="email" placeholder = "Email" required id = "email" />
                    <input className='signUpInput' type="tel"  placeholder = "Mobile" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="phone"/>
                    <select className='signUpInput' name="cars" id="province" >
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
                    <input className='signUpInput' type ="password" placeholder = "Password" id = "password"/>
                    <input className='signUpInput' type ="password" placeholder = "Conform Password" id = "conformPassword"/>
                    <input className='signUpInput' type="submit" value = "Submmit" id= "btnSubmit"/>
                </form>
            </div>
            <div id = "signUpRightContainer">

            </div>
            
        </div>
    )
}