export function ForecastsIndex(props) {
  return (
    <div id="forecast-index">
      <h1>Weekly Forecast</h1>
      {props.forecasts.map((forecast) => (
        <div key={forecast.number}>
          <h3>{forecast.name}</h3>
          <p>{forecast.detailedForecast}</p>
        </div>
      ))}
      <small>Source: National Weather Service</small>
    </div>
  );
}
