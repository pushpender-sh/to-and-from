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

    return(
      <span className='sortbyname'>
      <div className='sortbyclass'>
        Sort: {sortbyvalue}
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
