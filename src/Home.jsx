import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";
// import { TrailsNew } from "./TrailsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { TrailsShow } from "./TrailsShow";

export function Home() {
  const [trails, setTrails] = useState([]);
  const [isTrailsShowVisible, setIsTrailsShowVisible] = useState(false);
  const [currentTrail, setCurrentTrail] = useState({});

  const handleIndexTrails = () => {
    axios.get("http://localhost:3000/trails.json").then((response) => {
      console.log(response.data);
      setTrails(response.data);
    });
  };
  // CREATE TRAIL
  // const handleCreateTrail = (params, successCallback) => {
  //   console.log("handleCreateTrail", params);
  //   axios.post("http://localhost:3000/trails.json", params).then((response) => {
  //     setTrails([...trails, response.data]);
  //     successCallback();
  //   });
  // };

  const handleShowTrail = (trail) => {
    console.log("handleShowTrail", trail);
    setIsTrailsShowVisible(true);
    setCurrentTrail(trail);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTrailsShowVisible(false);
  };

  useEffect(handleIndexTrails, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      {/* <TrailsNew onCreateTrail={handleCreateTrail} /> */}
      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
