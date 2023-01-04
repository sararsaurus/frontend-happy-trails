export function TrailsShow(props) {
  return (
    <div>
      <h1>Trail information</h1>
      <p>Name: {props.trail.name}</p>
      <p>Description: {props.trail.description}</p>
      <p>Miles: {props.trail.length}</p>
      <p>Difficulty: {props.trail.difficulty}</p>
      {props.trail.conditions.map((condition) => (
        <div key={condition.id}>
          <h3>Conditions:</h3>
          <p>Trail condition: {condition.trail_condition}</p>
          <p>Temp: {condition.temp}</p>
          <p>Forecast: {condition.forecast}</p>
          <p>TESTING Trail_id: {condition.trail_id}</p>
          <p>Sunrise: {condition.sunrise_time}</p>
          <p>Sunset: {condition.sunset_time}</p>
        </div>
      ))}
      {props.trail.fast_facts.map((fast_fact) => (
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
    </div>
  );
}