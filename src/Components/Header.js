import React, { useState, useEffect } from 'react'
import './Header.css'
import Filters from './Filters'
import { BsCart4 } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiGift } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'



export default function Header( {state, setState ,SearchParams, setSearchParams,  
  genderId , occasionId, relationshipId, setGenderId, setOccasionId, setRelationshipId}) {
    
  

  const [isbuttonopen, setIsbuttonopen] = useState(false)

  const handleClick = () => {
    if (isbuttonopen) {
      setIsbuttonopen(false)
    } else {
      setIsbuttonopen(true);
    }
  };

  return (
    <div>
      <div className="mainheader">
        <div className="button-container">
          <button className="gift-filters" onClick={handleClick}>
            Gift Filters |
            {<RiArrowDropDownLine />}
          </button>
          <select className="sort-by">
            <option>Sort By</option>
            <option>hey</option>
            <option>hey</option>
            <option>hey</option>
          </select>
        </div>
        <span className='sitename'> To&From </span>
        <div className='right-icons'>
          <div className='icon'>{<BiSearchAlt2 />} </div>
          <div className='icon'> {<FiGift />} </div>
          <div className='icon'>{<BsCart4 />} </div>
        </div>

      </div>
      <div> {isbuttonopen && <Filters buttonstate={setIsbuttonopen} 
       state={state} setState={setState} SearchParams={SearchParams} setSearchParams={setSearchParams} 
       genderId= {genderId} occasionId={occasionId} relationshipId={relationshipId}
       setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId}
       />}</div>

    </div>
  );
}
