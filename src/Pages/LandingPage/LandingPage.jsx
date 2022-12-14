import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';


import { Btn_Main } from '../../Components/Btn_Main/Btn_Main'


export  const LandingPage =()=>{
    const navigate = useNavigate();


    return(
        <div id='landing_page_container'>
            <div id='landing_page_background'>
                <div id='landing_page_btn_container'>
                    <Btn_Main callback={()=>{navigate("/signin")}} label = {"Sign In"} />
                    <Btn_Main callback={()=>{navigate("/signup")}} label = {"Sign Up"}  />
                </div>
            </div>
            
        </div>
    )
}