import { useState, useEffect } from "react";
import axios from "axios";
// Daylight API
import { LightsIndex } from "./LightsIndex";
// Weather API - today/tonight
import { TodaysWeatherIndex } from "./TodaysWeatherIndex";

// HIKES
export function HikesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateHike(props.hike.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyHike(props.hike);
  };

  // Light API

  const [lights, setLights] = useState([]);

  const handleIndexLights = () => {
    console.log("handleIndexLights");
    axios.get("http://localhost:3000/lights.json").then((response) => {
      console.log(response.data);
      setLights(response.data);
    });
  };

  useEffect(handleIndexLights, []);

  // TODAY/TONIGHT FORECAST
  const [weathers, setWeathers] = useState([]);

  const handleIndexWeathers = () => {
    console.log("handleIndexWeathers");
    axios.get("http://localhost:3000/forecasts.json").then((response) => {
      console.log(response.data);
      setWeathers(response.data);
    });
  };

  useEffect(handleIndexWeathers, []);

  return (
    <div>
      <h1>Happy Trails!</h1>
      <p>Date: {props.hike.date}</p>
      <p>Trail: {props.hike.trail_name}</p>
      {props.hike.conditions.map((condition) => (
        <div key={condition.id}>
          <h3>Conditions:</h3>
          <p>Trail condition: {condition.trail_condition}</p>

          <p>TESTING Trail_id: {condition.trail_id}</p>
        </div>
      ))}
      <LightsIndex lights={lights} />
      <TodaysWeatherIndex weathers={weathers} />
      {props.hike.fast_facts.map((fast_fact) => (
        <div key={fast_fact.id}>
          <h3>Fast Facts:</h3>
          <p>General: {fast_fact.general} </p>
          <p>Nearby: {fast_fact.nearby_landmarks} </p>
          <p>Lake Stats: {fast_fact.lake_info} </p>
          <p>Backcountry Zones: {fast_fact.backcountry_zones} </p>
          <p>Ecological Zones: {fast_fact.ecological_zones} </p>
          <p>TESTING Trail_id: {fast_fact.trail_id} </p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          Trail ID: <input defaultValue={props.hike.trail_id} name="trail_id" type="text" />
        </div>
        <div>
          Date: <input defaultValue={props.hike.date} name="date" type="date" />
        </div>
        <button type="submit">Update hike</button>
      </form>
      <button onClick={handleClick}>Remove hike</button>
    </div>
  );
}
