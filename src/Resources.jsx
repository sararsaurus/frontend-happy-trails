import { useState, useEffect } from "react";
import axios from "axios";
import { ForecastsIndex } from "./ForecastsIndex";

export function Resources() {
  // WEATHER API FORECAST
  const [forecasts, setForecasts] = useState([]);

  const handleIndexForecasts = () => {
    console.log("handleIndexForecasts");
    axios.get("http://localhost:3000/forecasts.json").then((response) => {
      console.log(response.data);
      setForecasts(response.data);
    });
  };

  useEffect(handleIndexForecasts, []);

  // CALL TWEETS

  const nwsBoulder = (
    <div>
      <a
        className="twitter-timeline"
        data-width="350"
        data-height="400"
        href="https://twitter.com/NWSBoulder?ref_src=twsrc%5Etfw"
        target="_blank"
      >
        Tweets by NWSBoulder
      </a>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );

  const cAIC = (
    <div>
      <a
        className="twitter-timeline"
        data-width="350"
        data-height="400"
        href="https://twitter.com/COAvalancheInfo?ref_src=twsrc%5Etfw"
        target="_blank"
      >
        Tweets by COAvalancheInfo
      </a>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );

  const lNT = (
    <div>
      <a
        className="twitter-timeline"
        data-width="350"
        data-height="400"
        href="https://twitter.com/leavenotrace?ref_src=twsrc%5Etfw"
        target="_blank"
      >
        Tweets by leavenotrace
      </a>{" "}
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );

  return (
    <div>
      <h1>Resources</h1>
      {nwsBoulder}
      <br />
      {cAIC}
      <br />
      {lNT}
      <br />
      <ForecastsIndex forecasts={forecasts} />
    </div>
  );
}
