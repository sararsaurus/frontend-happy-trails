import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
// Trails
import { TrailsIndex } from "./TrailsIndex";
import { TrailsShow } from "./TrailsShow";
import { TrailsNew } from "./TrailsNew";
// Scheduled hikes
import { HikesIndex } from "./HikeSchedulesIndex";
import { HikesShow } from "./HikeSchedulesShow";
import { Map } from "./Map";

export function Home() {
  // Trails show ///
  const [trails, setTrails] = useState([]);
  const [isTrailsShowVisible, setIsTrailsShowVisible] = useState(false);
  const [currentTrail, setCurrentTrail] = useState({});

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

  // Trails create
  const handleCreateTrail = (params, successCallback) => {
    console.log("handleCreateTrail", params);
    axios.post("http://localhost:3000/trails.json", params).then((response) => {
      setTrails([...trails, response.data]);
      successCallback();
    });
  };

  /// Scheduled hikes show ///
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
  const handleShowHike = (hike) => {
    console.log("handleShowHike", hike);
    setIsHikesShowVisible(true);
    setCurrentHike(hike);
  };
  useEffect(handleIndexHikes, []);

  // Scheduled hikes new/create
  const handleCreateHike = (params) => {
    console.log("handleCreateHike", params);
    axios.post("http://localhost:3000/hike_schedules.json", params).then((response) => {
      setHikes([...hikes, response.data]);
    });
  };

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
      <TrailsNew onCreateTrail={handleCreateTrail} />

      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} onUpdateHike={handleUpdateHike} onDestroyHike={handleDestroyHike} />
      </Modal>

      <Map />

      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />

      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow onCreateHike={handleCreateHike} trail={currentTrail} />
      </Modal>

      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
