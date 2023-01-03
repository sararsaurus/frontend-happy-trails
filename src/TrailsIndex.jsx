export function TrailsIndex(props) {
  return (
    <div>
      <h1>All TRAILS (but not)</h1>
      {props.trails.map((trail) => (
        <div key={trail.id}>
          <h2>{trail.name}</h2>
          <img src={trail.image_url} alt="trail photo" />
          <p>Description: {trail.description}</p>
          <p>Length: {trail.length}</p>
          <p>Difficulty: {trail.difficulty}</p>
          {trail.conditions.map((condition) => (
            <div key={condition.id}>
              <h3>Conditions:</h3>
              <p>Trail condition: {condition.trail_condition}</p>
              <p>Temp: {condition.temp}</p>
              <p>Forecast: {condition.forecast}</p>
              <p>Trail id: {condition.trail_id}</p>
              <p>Sunrise: {condition.sunrise_time}</p>
              <p>Sunset: {condition.sunset_time}</p>
            </div>
          ))}
          {trail.fast_facts.map((fast_fact) => (
            <div key={fast_fact.id}>
              <h3>Fast Facts:</h3>
              <p>General: {fast_fact.general} </p>
              <p>Nearby_landmarks: {fast_fact.nearby_landmarks} </p>
              <p>Lake_info: {fast_fact.lake_info} </p>
              <p>Backcountry_zones: {fast_fact.backcountry_zones} </p>
              <p>Ecological_zones: {fast_fact.ecological_zones} </p>
              <p>Trail_id: {fast_fact.trail_id} </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
