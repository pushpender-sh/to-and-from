import React from 'react'
import './Body.css'


export default function Body({ state, setState, searchparams, setSearchParams,
  genderId, occasionId, relationshipId, setGenderId, setOccasionId, 
  setRelationshipId, sortbyvalue, setSortbyvalue }) {

  function giveFilter(data, filterValue) {
    let FindId = searchparams.get(filterValue);
    if (!FindId) {
      console.log("empty")
      return 
    }
    let filtername = ''
    data.map((itemname, index) => {
      if (itemname.id === FindId)
        filtername= itemname.name;
    })

    return (
      <span className='filtername'>
        <div>
          {filterValue}:  
        {filtername}
        </div>
         <div className='cross' onClick={() => {
          searchparams.delete(filterValue)
          setSearchParams(searchparams)
        }}>&times;</div>
      </span>
    )
  }

  function giveSortby(){
    let findSortby=searchparams.get("orderby");
    if (!findSortby) {
      console.log("empty")
      return 
    }
    let displayValue=""
    if(findSortby==="priceASC"){
      displayValue="Price: Low to High"
    } else if(findSortby==="priceDSC"){
      displayValue="Price: High to Low"
    } else if( findSortby==="newest"){
      displayValue="Sort: Newest"
    } else if(findSortby==="hotgifts"){
      displayValue="Sort: Hotgifts"
    } else if(findSortby==="discount_percentage"){
      displayValue="Sort: Promotion"
    } else if(findSortby==="toandfrom"){
      displayValue="Sort: To&From Marketplace"
    }
    
    return(
      <span className='sortbyname'>
      <div className='sortbyclass'>
        {displayValue}
      </div>
       <div className='cross' onClick={() => {
        searchparams.delete("orderby")
        setSearchParams(searchparams)
      }}>&times;</div>
      </span>
    )
  }


  return (
    <div className='mainbody'>
      Filters:
      {giveFilter(state.genders, "gender")}
      {giveFilter(state.occasions, "occasion")}
      {giveFilter(state.relationships, "relationship")}
      {giveSortby()}
    </div>
  )
}
