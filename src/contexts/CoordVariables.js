import React, { createContext, useState } from "react";

export const CoordVariables = createContext();
const CoordVariables = (props) => {
  const [southArapaho, setSouthArapho] = useState();
  const [loneEagle, setLoneEagle] = useState();
  const [lakeIsabelle, setLakeIsabelle] = useState();
  const [caribouLake, setCaribouLake] = useState();

  return (
    <CoordVariables.Provider
      value={{
        southArapaho,
        loneEagle,
        lakeIsabelle,
        caribouLake,
      }}
    >
      {props.children}
    </CoordVariables.Provider>
  );
};
export default CoordVariablesProvider;
