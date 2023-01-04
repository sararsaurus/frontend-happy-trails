import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";
import { TrailsShow } from "./TrailsShow";
// import { TrailsNew } from "./TrailsNew";
import { Modal } from "./Modal";

import { HikeSchedulesIndex } from "./HikeSchedulesIndex";
import { HikesShow } from "./HikeSchedulesShow";

export function Home() {
  const [trails, setTrails] = useState([]);
  const [isTrailsShowVisible, setIsTrailsShowVisible] = useState(false);
  const [currentTrail, setCurrentTrail] = useState({});

  const [hikes, setHikes] = useState([]);
  const [isHikesShowVisible, setIsHikesShowVisible] = useState(false);
  const [currentHike, setCurrentHike] = useState({});

  const handleIndexHikes = () => {
    console.log("handleIndexHikes");
    axios.get("http://localhost:3000/hike_schedules.json").then((response) => {
      console.log(response.data);
      setHikes(response.data);
    });
  };
  useEffect(handleIndexHikes, []);

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
    setIsHikesShowVisible(false);
  };

  const handleShowHike = (hike) => {
    console.log("handleShowHike", hike);
    setIsHikesShowVisible(true);
    setCurrentHike(hike);
  };

  useEffect(handleIndexTrails, []);
  return (
    <div>
      {/* <TrailsNew onCreateTrail={handleCreateTrail} /> */}

      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} />
      </Modal>
      <HikeSchedulesIndex hikes={hikes} onShowHike={handleShowHike} />

      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
