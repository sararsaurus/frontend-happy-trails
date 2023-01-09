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
// MAP
import { Map } from "./Map";
import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";
// Weather API - all
import { ForecastsIndex } from "./ForecastsIndex";

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

  // WEATHER API FORECAST
  const [forecasts, setForecasts] = useState([]);
  // const [isForecastsShowVisible, setIsForecastsShowVisible] = useState(false);
  // const [currentForecast, setCurrentForecast] = useState({});

  const handleIndexForecasts = () => {
    console.log("handleIndexForecasts");
    axios.get("http://localhost:3000/forecasts.json").then((response) => {
      console.log(response.data);
      setForecasts(response.data);
    });
  };

  // const handleShowForecast = (forecast) => {
  //   console.log("handleShowForecast", forecast);
  //   setIsForecastsShowVisible(true);
  //   // setCurrentForecast(forecast);
  // };

  // const handleCloseForecast = () => {
  //   console.log("handleCloseForecast");
  //   setIsForecastsShowVisible(false);
  // };

  useEffect(handleIndexForecasts, []);

  // MAP
  // BUTTONS
  // const southArapaho = [-105.63751, 40.01713];
  // const loneEagle = [-105.660218, 40.071131];
  // const lakeIsabelle = [-105.6193149, 40.0689275];
  // const caribouLake = [-105.68425, 40.01607];
  // // let coords = [southArapaho, loneEagle, lakeIsabelle, caribouLake];
  // // let center = coords[Math.floor(Math.random() * coords.length)];

  // mapboxgl.accessToken =
  //   "pk.eyJ1Ijoic2FyYXJzYXVydXMiLCJhIjoiY2xja3YzamdzMHV1MDN3bW01eTdtangxaCJ9.2M9D5IUyyAOWKH4shxugBQ";

  // const mapContainer = useRef();

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/satellite-streets-v11",
  //     center: caribouLake,
  //     zoom: 14,
  //     pitch: 60,
  //     bearing: 270,
  //   });
  //   map.on("load", () => {
  //     map.addSource("mapbox-dem", {
  //       type: "raster-dem",
  //       url: "mapbox://mapbox.mapbox-terrain-dem-v1",
  //       tileSize: 512,
  //       maxZoom: 16,
  //     });
  //     map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
  //     map.addLayer({
  //       id: "sky",
  //       type: "sky",
  //       paint: {
  //         "sky-type": "atmosphere",
  //         "sky-atmosphere-sun": [0.0, 90.0],
  //         "sky-atmosphere-sun-intensity": 15,
  //       },
  //     });
  //   });
  // }, []);

  // HTML
  return (
    <div>
      <TrailsNew onCreateTrail={handleCreateTrail} />
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} onUpdateHike={handleUpdateHike} onDestroyHike={handleDestroyHike} />
      </Modal>
      {/* <div id="map" ref={mapContainer} style={{ width: "100%", height: "50vh" }}>
        {" "}
      </div> */}
      <Map />
      ;
      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />
      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow onCreateHike={handleCreateHike} trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
      <ForecastsIndex forecasts={forecasts} />
    </div>
  );
}

// <button type="button" onClick={handleClick}>
// Crater Lake/Lone Eagle
// </button>
// <button type="button" onClick={handleClick}>
// Lake Isabelle
// </button>
// <button type="button" onClick={handleClick}>
// Caribou Lake
// </button>
// const handleClickSouthArapaho = () => {
//   map["center"] = southArapaho;
// };
// <div className="d-flex justify-content-center">
//         <button type="button" onClick={handleClickSouthArapaho}>
//           South Arapaho Peak
//         </button>
//       </div>
