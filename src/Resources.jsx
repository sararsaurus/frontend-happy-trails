import { useState, useEffect } from "react";
import axios from "axios";
import { ForecastsIndex } from "./ForecastsIndex";
// import { TwitterTimelineEmbed } from "react-twitter-embed";

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

  // TWEETS

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div id="resources">
      <section id="tweets" className="twitterContainer">
        <div className="twitter-embed">
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-tweet-limit="5"
            data-width="350"
            data-height="400"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/leavenotrace?ref_src=twsrc%5Etfw"
          >
            LNT
          </a>
        </div>
        <br />
        <div className="twitter-embed">
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-tweet-limit="5"
            data-width="350"
            data-height="400"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/COAvalancheInfo?ref_src=twsrc%5Etfw"
          >
            CAIC
          </a>
          <br />
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="5"
              data-width="350"
              data-height="400"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/NWSBoulder?ref_src=twsrc%5Etfw"
            >
              NWS Boulder
            </a>
          </div>
          <br />
          <div className="twitter-embed">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="5"
              data-width="350"
              data-height="400"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/OpenSnow?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              OpenSnow
            </a>
          </div>
        </div>
      </section>
      <br />
      <ForecastsIndex forecasts={forecasts} />
    </div>
  );
}
