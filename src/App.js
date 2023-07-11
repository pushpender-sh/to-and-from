// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Body from './Components/Body';


export default function App() {

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

  // console.log(state.genders)

  return (
    <div>
     <NavBar
      />
     <Header  state={state} setState={setState} SearchParams={SearchParams} setSearchParams={setSearchParams} 
      genderId= {genderId} occasionId={occasionId} relationshipId={relationshipId}
      setGenderId={setGenderId} setOccasionId={setOccasionId} setRelationshipId={setRelationshipId} />
     <Body/>
    </div>
  )
}
