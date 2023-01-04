import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
// Trails
import { TrailsIndex } from "./TrailsIndex";
import { TrailsShow } from "./TrailsShow";
// Scheduled hikes
import { HikesIndex } from "./HikeSchedulesIndex";
import { HikesShow } from "./HikeSchedulesShow";
// import { HikesNew } from "./HikeSchedulesNew";

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

  // Scheduled hikes edit/update
  const handleUpdateHike = (id, params, successCallback) => {
    console.log("handleUpdateHike", params);
    axios.patch(`http://localhost:3000/hike_schedules/${id}.json`, params).then((response) => {
      setHikes(
        hikes.map((hike) => {
          if (hike.id === response.data.id) {
            return response.data;
          } else {
            return hike;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  // Scheduled hikes destroy
  const handleDestroyHike = (hike) => {
    console.log("handleDestroyHike", hike);
    axios.delete(`http://localhost:3000/hike_schedules/${hike.id}.json`).then((response) => {
      setHikes(hikes.filter((h) => h.id !== hike.id));
      handleClose();
    });
  };

  // HTML
  return (
    <div>
      {/* <HikesNew onCreateHike={handleCreateHike} /> */}
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} onUpdateHike={handleUpdateHike} onDestroyHike={handleDestroyHike} />
      </Modal>
      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />

      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
