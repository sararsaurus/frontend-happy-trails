export function HikesIndex(props) {
  return (
    <div id="hikes-index">
      <h1 className="text-center">Your Scheduled Hikes</h1>
      <br />
      <div className="row">
        {props.hikes.map((hike) => (
          <div className="col-4" key={hike.id}>
            <h4>{hike.date}</h4>
            <p>{hike.trail_name}</p>
            <button onClick={() => props.onShowHike(hike)}>More info</button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
