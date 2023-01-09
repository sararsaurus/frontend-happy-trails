export function TodaysWeatherIndex(props) {
  const firstTwoForecasts = props.weathers.slice(0, 2);

  return (
    <div>
      {firstTwoForecasts.map((weather) => (
        <div key={weather.number}>
          <h2>{weather.name}</h2>
          <p>{weather.detailedForecast}</p>
        </div>
      ))}
    </div>
  );
}
