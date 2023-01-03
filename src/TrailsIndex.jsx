export function TrailsIndex(props) {
  return (
    <div>
      <h1>All TRAILS (but not)</h1>
      {props.trails.map((trail) => (
        <div key={trail.id}>
          <h2>{trail.name}</h2>
          <img src={trail.image_url} alt="trail photo" />
          <p>Description: {trail.description}</p>
          <p>Length: {trail.length}</p>
          <p>Difficulty: {trail.difficulty}</p>
        </div>
      ))}
    </div>
  );
}
