import axios from "axios";
import { useState, useEffect } from "react";
import { TrailsIndex } from "./TrailsIndex";

export function Home() {
  // const trails = [
  //   {
  //     id: 1,
  //     name: "best trail",
  //     description: "so good",
  //     length: 1,
  //     difficulty: "easy",
  //     image_url: "https://i.imgur.com/j4fcHza_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
  //   },
  //   {
  //     id: 2,
  //     name: "second best trail",
  //     description: "not quite as good",
  //     length: 2,
  //     difficulty: "easy",
  //     image_url: "https://i.imgur.com/bVxmfdx_d.jpg?maxwidth=520&shape=thumb&fidelity=high",
  //   },
  // ];
  const [trails, setTrails] = useState([]);

  const handleIndexTrails = () => {
    console.log("handleIndexTrails");
    axios.get("http://localhost:3000/trails.json").then((response) => {
      console.log(response.data);
      setTrails(response.data);
    });
  };
  useEffect(handleIndexTrails, []);
  return (
    <div>
      <TrailsIndex trails={trails} />
    </div>
  );
}
