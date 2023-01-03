import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";
import { TrailsNew } from "./TrailsNew";

export function Home() {
  const [trails, setTrails] = useState([]);

  const handleIndexTrails = () => {
    axios.get("http://localhost:3000/trails.json").then((response) => {
      console.log(response.data);
      setTrails(response.data);
    });
  };

  const handleCreateTrail = (params, successCallback) => {
    console.log("handleCreateTrail", params);
    axios.post("http://localhost:3000/trails.json", params).then((response) => {
      setTrails([...trails, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexTrails, []);
  return (
    <div>
      <TrailsNew onCreateTrail={handleCreateTrail} />
      <TrailsIndex trails={trails} />
    </div>
  );
}
