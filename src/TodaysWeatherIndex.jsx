export function TodaysWeatherIndex(props) {
  // Need to write a times do loop to just get the first two results

  return (
    <div>
      <h1>All forecasts</h1>

      {props.weathers.map((weather) => (
        <div key={weather.number}>
          <h2>{weather.name}</h2>
          <p>{weather.temperature}</p>
          <p>{weather.detailedForecast}</p>
        </div>
      ))}
    </div>
  );
}
