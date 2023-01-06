export function TrailsIndex(props) {
  const handleMouseEnter = (e) => {
    e.target.style.background = "grey";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "none";
  };

  return (
    <div id="trails-index">
      <h1 className="text-center">Happy Trails</h1>
      <br />
      <div className="row">
        {props.trails.map((trail) => (
          <div className="col-4" key={trail.id}>
            <div className="card text-secondary">
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* if (trail.name === "South Arapaho Peak") {
                  
                } */}
                <h2 className="card-title text-center">{trail.name}</h2>
              </div>
              <img src={trail.image_url} alt="trail photo" />
              <p className="card-text">Description: {trail.description}</p>
              <p className="card-text">Miles: {trail.length}</p>
              <p className="card-text">Difficulty: {trail.difficulty}</p>
              <button onClick={() => props.onShowTrail(trail)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
