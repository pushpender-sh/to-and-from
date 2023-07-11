import React from 'react'
import './Body.css'

export default function Body({state, setState ,SearchParams, setSearchParams,  
  genderId , occasionId, relationshipId, setGenderId, setOccasionId, setRelationshipId}) {

    function Givefilter(){
      
    }
  return (
    <div className='mainbody'>

      Filters:  {genderId}
    </div>
  )
}
