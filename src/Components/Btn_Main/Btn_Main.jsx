import React from 'react'
import './Btn_Main.css'

export const Btn_Main = ({label, callback})=>{
    return(
        <button id='btn_landing' onClick={callback}>
            {label}
        </button>
        
    )
}