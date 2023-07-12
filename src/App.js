// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Body from './Components/Body';


export default function App() {

  const [searchparams, setSearchParams] = useSearchParams(  );
    const [state, setState] = useState({
      genders: [],
      occasions: [],
      relationships: [],
    });
    
    const [genderId, setGenderId] = useState(searchparams.get("gender")?? "");
    const [occasionId, setOccasionId] = useState(searchparams.get("occasion")?? "");
    const [relationshipId, setRelationshipId] = useState(searchparams.get("relationship")?? "");

    const [sortbyvalue, setSortbyvalue] = useState(searchparams.get("orderby")?? "")



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

  // console.log(state.genders)

  return (
    <div>
     <NavBar/>

     <Header  state={state} setState={setState} searchparams={searchparams} setSearchParams={setSearchParams} 
      genderId= {genderId} occasionId={occasionId} relationshipId={relationshipId}
      setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId}
      sortbyvalue={sortbyvalue} setSortbyvalue={setSortbyvalue} />

     <Body state={state} setState={setState} searchparams={searchparams} setSearchParams={setSearchParams} 
      genderId= {genderId} occasionId={occasionId} relationshipId={relationshipId}
      setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId}
      sortbyvalue={sortbyvalue} setSortbyvalue={setSortbyvalue} />
    </div>
  )
}
