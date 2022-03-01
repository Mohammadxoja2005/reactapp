import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"; 

export default function Phone() {
  return (
    <a href="tel: +998903580505" className="scroll-top" style={{display: "inline-block"}}>
       <BsFillTelephoneFill/>
    </a> 
  )
}
// style={{display: "flex", justifyContent: "center", alignItems: "center", }}