import "./Headers.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Header() {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    genders: [],
    occasions: [],
    relationships: [],
  });

  const [genderId, setGenderId] = useState(SearchParams.get("gender")?? "");
  const [occasionId, setOccasionId] = useState(SearchParams.get("occasion")?? "");
  const [relationshipId, setRelationshipId] = useState(SearchParams.get("relationship")?? "");



  useEffect(() => {
    (async () => {
      const [genders,occasions, relationships] = await Promise.all([
        fetch(`https://api.toandfrom.com/v2/gender?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data),
        fetch(`https://api.toandfrom.com/v2/occasion?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data),
          fetch(`https://api.toandfrom.com/v2/relationship?all=true&status=activate`)
          .then((res) => res.json())
          .then((res) => res.data)
        
      ]);
      setState({
        genders,
        occasions,
        relationships
      });
    })();
  }, []);

function Filteroption(filtrevalue, filtername, Id,setId){
  return(
    <div className=" filters">
    <label> {filtername}
    <select
        value={Id}
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
      setSearchParams({gender:genderId, occasion: occasionId, relationship:relationshipId})
  };

  const handleDelete = () => {
      setSearchParams({})
  };

  return (
      <div>
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
    <div className="App">
     { Filteroption(state.genders,"Gender",genderId, setGenderId)}
     { Filteroption(state.occasions, "Occasion", occasionId, setOccasionId)}
     { Filteroption(state.relationships, "Relationship",  relationshipId, setRelationshipId)}
     {DisplayFilters()}
    </div>
  );
}
