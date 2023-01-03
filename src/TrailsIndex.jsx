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
          <h3>
            Conditions:{" "}
            {trail.conditions.map((condition) => (
              <div key={condition.id}>
                <p>Trail condition: {condition.trail_condition}</p>
                <p>Temp: {condition.temp}</p>
                <p>Forecast: {condition.forecast}</p>
                <p>Id: {condition.trail_id}</p>
                <p>Sunrise: {condition.sunrise_time}</p>
                <p>Sunset: {condition.sunset_time}</p>
              </div>
            ))}
          </h3>
        </div>
      ))}
    </div>
  );
}
