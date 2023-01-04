export function TrailsIndex(props) {
  return (
    <div>
      {props.trails.map((trail) => (
        <div key={trail.id}>
          <h2>{trail.name}</h2>
          <img src={trail.image_url} alt="trail photo" />
          <p>Description: {trail.description}</p>
          <p>Miles: {trail.length}</p>
          <p>Difficulty: {trail.difficulty}</p>
          <button onClick={() => props.onShowTrail(trail)}>More info</button>
        </div>
      ))}
    </div>
  );
}
