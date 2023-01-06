import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = "TOKEN";

export const Map = () => {
  const mapContainer = useRef();

  const southArapaho = [-105.63751, 40.01713];
  const loneEagle = [-105.660218, 40.071131];
  const lakeIsabelle = [-105.6193149, 40.0689275];
  const caribouLake = [-105.68425, 40.01607];

  useEffect(() => {
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: caribouLake,
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
