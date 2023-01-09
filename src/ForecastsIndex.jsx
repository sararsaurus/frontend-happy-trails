export function ForecastsIndex(props) {
  return (
    <div>
      <h1>Weekly Forecast</h1>
      {props.forecasts.map((forecast) => (
        <div key={forecast.number}>
          <h2>{forecast.name}</h2>
          <p>{forecast.temperature}</p>
          <p>{forecast.detailedForecast}</p>
        </div>
      ))}
    </div>
  );
}
