export function LightsIndex(props) {
  const sunrise = props.lights["sunrise"];
  const sunset = props.lights["sunset"];
  const first_light = props.lights["first_light"];
  const last_light = props.lights["last_light"];

  return (
    <div>
      <h1>Daylight Info</h1>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
      <p>First light: {first_light}</p>
      <p>Last light: {last_light}</p>
    </div>
  );
}
