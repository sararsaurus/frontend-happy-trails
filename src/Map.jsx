import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = "pk.eyJ1Ijoic2FyYXJzYXVydXMiLCJhIjoiY2xiNDVuM2c5MDQ1YjNvbGoyN2RyeGM2aSJ9.34yW7dvW_g6Fgg-6KYod8A";

export const Map = () => {
  const mapContainer = useRef();

  // South Arapaho: -105.64972, 40.019683
  // Lone Eagle Peak: -105.660218, 40.071131
  // Lake Isabelle: -105.6193149, 40.0689275
  // Caribou Lake: -105.68272, 40.02078

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only created once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [-105.6377, 40.01717],
      zoom: 14,
      pitch: 60,
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
    });
  }, []);

  return (
    <div id="map" ref={mapContainer} style={{ width: "100%", height: "50vh" }}>
      {" "}
    </div>
  );
};
