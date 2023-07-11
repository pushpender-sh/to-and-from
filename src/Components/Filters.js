import "./Filters.css";


export default function Filters({buttonstate , state, setState ,searchparams, setSearchParams,  
  genderId , occasionId, relationshipId, setGenderId, setOccasionId, setRelationshipId, sortbyvalue, setSortbyvalue }) {
    
// console.log(state)

function Filteroption(filtrevalue, filtername, Id,setId){
  return(
    <div className=" filters">
    <label> {filtername} <br/> 
    <select className="select"
    style={{width:"210px", height:"40px"}}
        value={searchparams.get(Id)}
        onChange={(e) => {
          setId(e.target.value)
        }
        }
      >
        <option value="">None</option>
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
      // let filters = [];
      setSearchParams({
        gender: genderId,
        occasion: occasionId,
        relationship: relationshipId,
        orderby: sortbyvalue
      });
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
      <div className="bothbutton">
          <div className="buttons">
              <button className="apply" onClick={handleApply}>
                  Apply Changes
              </button>
              <button className="clear" onClick={handleDelete}>
                  Clear Filters
              </button>
          </div>

      </div>
  );
}


  return (
    <div className="display">
      <div className="top-part">
        <div>Filters </div>
        <div className='cross' onClick={()=>{buttonstate(false)}}>&times;</div>
      </div>
      <div>
       <button className="dealbutton" type="button" >
         Just show me great gifts  </button> <br/><hr/>
      </div>
  
     { Filteroption(state.genders,"Gender",genderId, setGenderId)}
     { Filteroption(state.occasions, "Occasion", occasionId, setOccasionId)}
     { Filteroption(state.relationships, "Relationship",  relationshipId, setRelationshipId)}
     {DisplayFilters()}
     
    </div>
  );
}
