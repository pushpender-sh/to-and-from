import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    genders: [],
    occasions: [],
    relationships: [],
  });

  const [genderId, setGenderId] = useState(
    SearchParams.get("gender") ?? ""
  );
  const [occasionId, setOccasionId] = useState(
    SearchParams.get("occasion") ?? ""
  );
  const [relationshipId, setRelationshipId] = useState(
    SearchParams.get("relationship") ?? ""
  );

  return (
    <UserContext.Provider
      value={{
        SearchParams,
        setSearchParams,
        state,
        setState,
        genderId,
        setGenderId,
        occasionId,
        setOccasionId,
        relationshipId,
        setRelationshipId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
