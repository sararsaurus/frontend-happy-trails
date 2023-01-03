import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";

export function Home() {
  const [trails, setTrails] = useState([]);

  const handleIndexTrails = () => {
    axios.get("http://localhost:3000/trails.json").then((response) => {
      console.log(response.data);
      setTrails(response.data);
    });
  };
  useEffect(handleIndexTrails, []);
  return (
    <div>
      <TrailsIndex trails={trails} />
    </div>
  );
}
