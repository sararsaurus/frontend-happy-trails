export function HikeSchedulesIndex(props) {
  return (
    <div>
      <h1>Your Hike Schedule</h1>
      {props.hikes.map((hike) => (
        <div key={hike.id}>
          <h4>Date: {hike.date}</h4>
          <p>Trail: {hike.trail_name}</p>
          <button onClick={() => props.onShowHike(hike)}>More info</button>
        </div>
      ))}
    </div>
  );
}
