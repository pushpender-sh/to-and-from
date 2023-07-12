import "./Filters.css";
import {BiSolidRightArrow} from 'react-icons/bi'

export default function Filters({buttonstate , state, setState ,searchparams, setSearchParams,  
  genderId , occasionId, relationshipId, setGenderId, setOccasionId, setRelationshipId, sortbyvalue, setSortbyvalue }) {
    
// console.log(state)

function Filteroption(filtrevalue, filtername, Id,setId){
  return(
    <div className=" filters">
    <label style={{color:"#266270"}}>  {filtername} <br/> 
    <select className="select"
    style={{width:"280px", height:"50px"}}
        value={Id ?? searchparams.get(filtername)}
        onChange={(e) => {
          setId(e.target.value)
        }
        }
      >
        <option value="" hidden>None</option>
        {filtrevalue.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      </label>
      </div>
  )

}

function DisplayFilters() {
  // const [appliedFilters, setAppliedFilters] = useState([]);
  const handleApply = () => {
    const params = {};
    if (genderId !== "") {
      params.gender = genderId;
    }
    if (occasionId !== "") {
      params.occasion = occasionId;
    }
    if (relationshipId !== "") {
      params.relationship = relationshipId;
    }
    if (sortbyvalue !== "") {
      params.orderby = sortbyvalue;
    }
    setSearchParams(params);
  
      
      if(genderId==="" && occasionId==="" && relationshipId===""){
        setSearchParams("")
      }

      buttonstate(false);
    }

  const handleDelete = () => {
    setGenderId("");
    setOccasionId("");
    setRelationshipId("");
    // const updatedSearchParams = new URLSearchParams(searchparams);
    setSearchParams({})
    // searchparams.delete("gender");
    // searchparams.delete("occasion");
    // searchparams.delete("relationship");
    // setSearchParams(searchparams);
      buttonstate(false);
  };

  return (
      
          <div className="both-buttons">
              <button className="apply" onClick={handleApply}  style={{fontSize:"15px" , color: "white"}}>
                  Apply Changes
              </button>
              <button className="clear" onClick={handleDelete} style={{fontSize:"15px", color: "white"}} >
                  Clear Filters
              </button>
          </div>
  );
}


  return (
    <div className="display">
      <div className="top-part">
        <div>Filters </div>
        <div className='bigcross' onClick={()=>{buttonstate(false)}}>&times;</div>
      </div>
      <div>
       <button className="dealbutton" type="button" >
         Just show me great gifts {<BiSolidRightArrow /> }</button> <br/><hr/>
      </div>
  
     { Filteroption(state.genders,"Gender",genderId, setGenderId)}
     { Filteroption(state.occasions, "Occasion", occasionId, setOccasionId)}
     { Filteroption(state.relationships, "Relationship",  relationshipId, setRelationshipId)}
     {DisplayFilters()}
     
    </div>
  );
}
