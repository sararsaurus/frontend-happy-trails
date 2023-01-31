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
// import { Map } from "./Map";
import React, { useRef } from "react";
import mapboxgl from "mapbox-gl";

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

  // Click on trail to change map
  function handleClick() {
    console.log("clicked!");
  }

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

  // map
  mapboxgl.accessToken = "TOKEN";

  const Map = () => {
    const mapContainer = useRef();
    const southArapaho = [-105.6497, 40.02];
    const loneEagle = [-105.660218, 40.071131];
    const lakeIsabelle = [-105.6193149, 40.0689275];
    const caribouLake = [-105.68248, 40.02103];
    const Audubon = [-105.6164, 40.0989];
    const stVrain = [-105.5873, 40.1616];

    const [center, setCenter] = useState({});

    const handleClick = () => {
      setCenter(southArapaho);
    };

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/satellite-streets-v11",
        center: [-105.56153, 40.03224],
        zoom: 11,
        pitch: 63,
        bearing: 270,
      });
      map.on("load", () => {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxZoom: 16,
        });
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        map.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 90.0],
            "sky-atmosphere-sun-intensity": 15,
          },
        });
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: southArapaho,
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: caribouLake,
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: lakeIsabelle,
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: loneEagle,
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: Audubon,
                },
              },
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: stVrain,
                },
              },
            ],
          },
        });
        // Add a circle layer
        map.addLayer({
          id: "circle",
          type: "circle",
          source: "points",
          paint: {
            "circle-color": "#4264fb",
            "circle-radius": 8,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });
        map.on("click", "circle", (e) => {
          map.flyTo({
            center: e.features[0].geometry.coordinates,
          });
        });
        map.on("mouseenter", "circle", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "circle", () => {
          map.getCanvas().style.cursor = "";
        });
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
      });
    }, []);

    return (
      <div id="map" ref={mapContainer} style={{ width: "100%", height: "50vh" }}>
        {" "}
      </div>
    );
  };

  // HTML
  return (
    <div>
      <TrailsNew onCreateTrail={handleCreateTrail} />
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} onUpdateHike={handleUpdateHike} onDestroyHike={handleDestroyHike} />
      </Modal>
      <Map />
      <div class="d-flex justify-content-center">
        <button type="button">South Arapaho Peak</button>
        <button type="button">Crater Lake/Lone Eagle</button>
        <button type="button">Lake Isabelle</button>
        <button type="button">Caribou Lake</button>
      </div>
      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />
      <Modal show={isTrailsShowVisible} onClose={handleClose}>
        <TrailsShow onCreateHike={handleCreateHike} trail={currentTrail} />
      </Modal>
      <TrailsIndex trails={trails} onShowTrail={handleShowTrail} />
    </div>
  );
}
