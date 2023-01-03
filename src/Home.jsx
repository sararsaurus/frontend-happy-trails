import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";
// import { TrailsNew } from "./TrailsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
      <Signup />
      <Login />
      <LogoutLink />
      {/* <TrailsNew onCreateTrail={handleCreateTrail} /> */}
      <TrailsIndex trails={trails} />
    </div>
  );
}
