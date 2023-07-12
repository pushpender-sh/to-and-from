import React from 'react'
import './Body.css'


export default function Body({ state, setState, searchparams, setSearchParams,
  genderId, occasionId, relationshipId, setGenderId, setOccasionId, 
  setRelationshipId, sortbyvalue, setSortbyvalue }) {
  
    function filterText(){
      const queryString = window.location.search;
    const hasParameters = queryString.length > 1;
    if(hasParameters){
        return (
        <div className='button-on-body'>
          <div>Filters: </div>
            {giveFilter(state.genders, setGenderId, "gender", "Gift For")}
            {giveFilter(state.occasions,  setOccasionId,"occasion", "Occasion")}
            {giveFilter(state.relationships,  setRelationshipId,"relationship", "Relationship")}
            {giveSortby()}

          <div className='on-body-clear-button' onClick={() => {
            setSearchParams("")
            setGenderId("")
            setOccasionId("")
            setRelationshipId("")
       
          }}>
            Clear Filters
          </div>
        </div>
      );
    } else{
      return
    }

    }

  function giveFilter(data, setId, filterValue, filternameOnScreen) {
    let FindId = searchparams.get(filterValue);
    if (!FindId) {
     // console.log("empty")
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
          {filternameOnScreen}: {""} 
        {filtername}
        </div>
         <div className='cross' onClick={() => {
          searchparams.delete(filterValue)
          setSearchParams(searchparams)
          setId("");
        }}>&times;</div>
      </span>
    )
  }

  function giveSortby(){
    let findSortby=searchparams.get("orderby");
    if (!findSortby) {
      //console.log("empty")
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
      displayValue="Sort: Hot Gifts"
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
        setSortbyvalue("")
      }}>&times;</div>
      </span>
    )
  }


  return (
    <div className='mainbody'>
      {filterText()}
    </div>
  )
}
