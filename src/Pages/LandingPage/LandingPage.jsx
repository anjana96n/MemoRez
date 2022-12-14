import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';


import { Btn_Main } from '../../Components/Btn_Main/Btn_Main'


export  const LandingPage =()=>{
    const navigate = useNavigate();


    return(
        <div>
            <h1>this is landing page</h1>
            <Btn_Main callback={()=>{navigate("/signin")}} label = {"Sign In"} />
            <Btn_Main callback={()=>{navigate("/signup")}} label = {"Sign Up"}  />
        </div>
    )
}