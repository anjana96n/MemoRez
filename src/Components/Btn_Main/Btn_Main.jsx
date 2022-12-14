import React from 'react'
import './Btn_Main.css'

export const Btn_Main = ({label, callback})=>{
    return(
        <button onClick={callback}>
            {label}
        </button>
        
    )
}