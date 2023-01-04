import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";
// import { TrailsNew } from "./TrailsNew";
import { Modal } from "./Modal";
import { TrailsShow } from "./TrailsShow";
import { HikeSchedulesIndex } from "./HikeSchedulesIndex";

export function Home() {
  const [trails, setTrails] = useState([]);
  const [isTrailsShowVisible, setIsTrailsShowVisible] = useState(false);
  const [currentTrail, setCurrentTrail] = useState({});

  const [hikes, setHikes] = useState([]);

  const handleIndexHikes = () => {
    console.log("handleIndexHikes");
    axios.get("http://localhost:3000/hike_schedules.json").then((response) => {
      console.log(response.data);
      setHikes(response.data);
    });
  };
  useEffect(handleIndexHikes, []);

  // const hikes = [
  //   {
  //     id: 1,
  //     trail_id: "test",
  //     trail_name: "testy",
  //     user_id: 1,
  //     date: 20230601,
  //     conditions: "frosty",
  //     fast_facts: "cool",
  //   },
  // ];

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
      {/* <TrailsNew onCreateTrail={handleCreateTrail} /> */}
      <HikeSchedulesIndex hikes={hikes} />
      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
