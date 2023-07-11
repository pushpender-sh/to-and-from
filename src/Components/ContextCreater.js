import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searchparams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    genders: [],
    occasions: [],
    relationships: [],
  });

  const [genderId, setGenderId] = useState(
    searchparams.get("gender") ?? ""
  );
  const [occasionId, setOccasionId] = useState(
    searchparams.get("occasion") ?? ""
  );
  const [relationshipId, setRelationshipId] = useState(
    searchparams.get("relationship") ?? ""
  );

  return (
    <UserContext.Provider
      value={{
        searchparams,
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
