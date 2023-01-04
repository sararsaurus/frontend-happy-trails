import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
// Trails
import { TrailsIndex } from "./TrailsIndex";
import { TrailsShow } from "./TrailsShow";
// Scheduled hikes
import { HikesIndex } from "./HikeSchedulesIndex";
import { HikesShow } from "./HikeSchedulesShow";
import { HikesNew } from "./HikeSchedulesNew";

export function Home() {
  // Trails show
  const [trails, setTrails] = useState([]);
  const [isTrailsShowVisible, setIsTrailsShowVisible] = useState(false);
  const [currentTrail, setCurrentTrail] = useState({});
  // Scheduled hikes show
  const [hikes, setHikes] = useState([]);
  const [isHikesShowVisible, setIsHikesShowVisible] = useState(false);
  const [currentHike, setCurrentHike] = useState({});

  // Trails show
  const handleIndexTrails = () => {
    axios.get("http://localhost:3000/trails.json").then((response) => {
      console.log(response.data);
      setTrails(response.data);
    });
  };
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
  useEffect(handleIndexTrails, []);

  // Scheduled hikes show
  const handleIndexHikes = () => {
    console.log("handleIndexHikes");
    axios.get("http://localhost:3000/hike_schedules.json").then((response) => {
      console.log(response.data);
      setHikes(response.data);
    });
  };
  const handleShowHike = (hike) => {
    console.log("handleShowHike", hike);
    setIsHikesShowVisible(true);
    setCurrentHike(hike);
  };
  useEffect(handleIndexHikes, []);

  // Scheduled hikes create
  const handleCreateHike = (params, successCallback) => {
    console.log("handleCreateHike", params);
    axios.post("http://localhost:3000/hike_schedules.json", params).then((response) => {
      setHikes([...hikes, response.data]);
      successCallback();
    });
  };

  // HTML
  return (
    <div>
      <HikesNew onCreateHike={handleCreateHike} />
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} />
      </Modal>
      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />

      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
