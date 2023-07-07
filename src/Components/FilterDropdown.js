import React, { useState } from 'react'
import Filters from './Filters'
import './FilterDropdown.css'
import downarrow from '../Images/downarrow.png'

export default function FilterDropdown() {
    const [isbuttonopen, setIsbuttonopen]= useState(false)

    const handleclick=()=>{
        if(isbuttonopen){
            setIsbuttonopen(false)
        } else{
            setIsbuttonopen(true);
        }
    };
  return (
    <div className='mainheader'>
       <button className='gift-filters' onClick={handleclick} >Gift Filters | <img className='downarrow' src={downarrow} style={{height:"11px"}}/></button>
      <div> {isbuttonopen && <Filters/>} </div>
       <button> Sort By</button>
       {/* <h1 className='sitename'>To&From</h1> */}
    
    </div>
  )
}
