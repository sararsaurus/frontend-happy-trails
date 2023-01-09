export function TodaysWeatherIndex(props) {
  const firstTwoForecasts = props.weathers.slice(0, 2);

  return (
    <div>
      {firstTwoForecasts.map((weather) => (
        <div key={weather.number}>
          <h4>{weather.name}</h4>
          <p>{weather.detailedForecast}</p>
        </div>
      ))}
    </div>
  );
}
