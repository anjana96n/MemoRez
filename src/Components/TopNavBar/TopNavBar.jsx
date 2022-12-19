import React from "react";
import "./TopNavBar.css"


export  const  TopNavBar = () =>(
    <div className="topnav">

        <div className="logo"/>

        <div className = "link-set">
            <nav>
                <a className="single-link" href="#contact">Contact</a>
                <a className="single-link" href="#about">About</a>
            </nav>
        
        </div>
    </div>
)