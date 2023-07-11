import React, { useState} from 'react'
import './Header.css'
import Filters from './Filters'
import { BsCart4 } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiGift } from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'



export default function Header( {state, setState ,searchparams, setSearchParams,  
  genderId , occasionId, relationshipId, setGenderId, setOccasionId,
   setRelationshipId, sortbyvalue, setSortbyvalue }) {
    
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

            <select className="sort-by"
            value={sortbyvalue}
            onChange={(e)=>{
              searchparams.delete("orderby");
              setSortbyvalue(e.target.value)
              searchparams.append("orderby", e.target.value)
              setSearchParams(searchparams);
            }}
            >
            <option value={""} className='sortby-options'>Sort By</option>
            <option value={"priceASC"}  className='sortby-options'>Price: Low to High</option>
            <option value={"priceDSC"} className='sortby-options'>Price: High to Low</option>
            <option value={"hotgifts"} className='sortby-options'>Hot Gifts</option>
            <option value={"newest"} className='sortby-options'>Newest</option>
            <option value={"discount_percentage"} className='sortby-options'>Promotions</option>
            <option value={"toandfrom"} className='sortby-options'>To&From Marketplace</option>
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
       state={state} setState={setState} searchparams={searchparams} setSearchParams={setSearchParams} 
       genderId= {genderId} occasionId={occasionId} relationshipId={relationshipId}
       setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId}
       sortbyvalue={sortbyvalue} setSortbyvalue={setSortbyvalue}
       />}</div>

    </div>
  );
}
