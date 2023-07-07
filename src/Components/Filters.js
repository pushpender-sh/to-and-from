import React, { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom';
import { useLocation } from "react-router-dom";


import "./Filters.css";
export default function Filters() {
    const location = useLocation();

    const checkparams = new URLSearchParams(location.search);
   

    const [searchParams, setSearchParams] = useSearchParams();
    const queryParameters = new URLSearchParams(window.location.search)

       
    const gend = queryParameters.get("gender")
    const occa  = queryParameters.get("occasion")
    const rela = queryParameters.get("relationship")

    const [genderinput, setgenderInput] = useState(gend || "");
  const [occasioninput, setoccasionInput] = useState(occa || "");
  const [relationshipinput, setrelationshipInput] = useState(rela || "");


    const [gender, setGender] = useState([]);
    const [occasion, setOccasion] = useState([]);
    const [relationship, setRelationship] = useState([]);

    const [genderId, setGenderId] = useState("");
  const [occasionId, setOccasionId] = useState("");
  const [relationshipId, setRelationshipId] = useState("");

    useEffect(() => {
        getGender();
        getOccasion();
        getRelationship();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const getGender = () => {
        fetch(`https://api.toandfrom.com/v2/gender?all=true&status=activate`)
          .then((response) => response.json())
          .then((json) => {
            const result = json.data;
            setGender(result);
          });
      };
    
      const getOccasion = () => {
        fetch(`https://api.toandfrom.com/v2/occasion?all=true&status=activate`)
          .then((response) => response.json())
          .then((json) => {
            const result = json.data;
            setOccasion(result);
          });
      };
    
      const getRelationship = () => {
        fetch(`https://api.toandfrom.com/v2/relationship?all=true&status=activate`)
          .then((response) => response.json())
          .then((json) => {
            const result = json.data;
            setRelationship(result);
          });
      };

    function Select(input, setinput, data,id, setId, heading) {
        return (
            <div className="display">
                
                <label style={{fontWeight: "bold"}}> 
                    {heading} <br/>
                <select
                    placeholder="Select"
                    style={{ width: "200px" }}
                    value={input}
                    onChange={(e) => {
                        const res=e.target.value;
                        setinput(res);
                        setId(data.filter((val)=>val.name===res).map((item)=>item.id))

                    }}
                    
                >
                    <option>Select</option>
                    {data.map((item, index) => (
                        <option key={index 
                        } 
                        >{item.name}</option>
                        //  console.log(item.name)
                    ))}
                </select>
                </label>
            </div>
        );
    }


    function DisplayNames( data, param, string ) {
        const hasQueryParams = checkparams.toString().length > 0;
        if(hasQueryParams){

        if(param){
        let Display = ""
        data.map((items) => {
          if (items.id === param) {
            Display= items.name;
          }
          
        })
        return (
          <div>
            
            {string}: {Display}
           
          </div>
        )
        }}
      };

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
        <div>
            <div className="filters">
                {Select(genderinput, setgenderInput, gender,genderId, setGenderId, "Gender")}
                {Select(occasioninput, setoccasionInput, occasion, occasionId, setOccasionId,"Occasion")}
                {Select(relationshipinput, setrelationshipInput, relationship,relationshipId, setRelationshipId, "Relationship")}
            </div>
            {DisplayFilters()}
            <div className="displaynames">
            {DisplayNames(gender,gend, "Gender")}
            {DisplayNames(occasion,occa, "Occasion")}
            {DisplayNames(relationship,rela, "Relationship")}
            </div>
            

        </div>
    );
}
