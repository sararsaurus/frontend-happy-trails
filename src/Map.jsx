// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = "pk.eyJ1Ijoic2FyYXJzYXVydXMiLCJhIjoiY2xja3YzamdzMHV1MDN3bW01eTdtangxaCJ9.2M9D5IUyyAOWKH4shxugBQ";

// export const Map = () => {
//   const mapContainer = useRef();
//   const southArapaho = [-105.6497, 40.02];
//   const loneEagle = [-105.660218, 40.071131];
//   const lakeIsabelle = [-105.6193149, 40.0689275];
//   const caribouLake = [-105.68248, 40.02103];
//   const Audubon = [-105.6164, 40.0989];
//   const stVrain = [-105.5873, 40.1616];

//   const [center, setCenter] = useState({});

//   const handleClick = () => {
//     setCenter(southArapaho);
//   };

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/satellite-streets-v11",
//       center: [-105.56153, 40.03224],
//       zoom: 11,
//       pitch: 63,
//       bearing: 270,
//     });
//     map.on("load", () => {
//       map.addSource("mapbox-dem", {
//         type: "raster-dem",
//         url: "mapbox://mapbox.mapbox-terrain-dem-v1",
//         tileSize: 512,
//         maxZoom: 16,
//       });
//       map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
//       map.addLayer({
//         id: "sky",
//         type: "sky",
//         paint: {
//           "sky-type": "atmosphere",
//           "sky-atmosphere-sun": [0.0, 90.0],
//           "sky-atmosphere-sun-intensity": 15,
//         },
//       });
//       map.addSource("points", {
//         type: "geojson",
//         data: {
//           type: "FeatureCollection",
//           features: [
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: southArapaho,
//               },
//             },
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: caribouLake,
//               },
//             },
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: lakeIsabelle,
//               },
//             },
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: loneEagle,
//               },
//             },
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: Audubon,
//               },
//             },
//             {
//               type: "Feature",
//               properties: {},
//               geometry: {
//                 type: "Point",
//                 coordinates: stVrain,
//               },
//             },
//           ],
//         },
//       });
//       // Add a circle layer
//       map.addLayer({
//         id: "circle",
//         type: "circle",
//         source: "points",
//         paint: {
//           "circle-color": "#4264fb",
//           "circle-radius": 8,
//           "circle-stroke-width": 2,
//           "circle-stroke-color": "#ffffff",
//         },
//       });
//       map.on("click", "circle", (e) => {
//         map.flyTo({
//           center: e.features[0].geometry.coordinates,
//         });
//       });
//       map.on("mouseenter", "circle", () => {
//         map.getCanvas().style.cursor = "pointer";
//       });
//       map.on("mouseleave", "circle", () => {
//         map.getCanvas().style.cursor = "";
//       });
//       // Add zoom and rotation controls to the map.
//       map.addControl(new mapboxgl.NavigationControl());
//     });
//   }, []);

//   return (
//     <div id="map" ref={mapContainer} style={{ width: "100%", height: "50vh" }}>
//       {" "}
//     </div>
//   );
// };
