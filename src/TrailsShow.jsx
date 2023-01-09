export function TrailsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHike(params);
    event.target.reset();
  };

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div>
        <div>
          <h1>Take a hike!</h1>
          <form onSubmit={handleSubmit}>
            <div id="make-invisible">
              Trail: <input defaultValue={props.trail.id} name="trail_id" />
            </div>
            <div>
              Date: <input name="date" type="date" />
            </div>
            <button type="submit">Schedule!</button>
          </form>
          <br />
        </div>
        <h1>Trail information</h1>
        <p>Name: {props.trail.name}</p>
        <p>Description: {props.trail.description}</p>
        <p>Miles: {props.trail.length}</p>
        <p>Difficulty: {props.trail.difficulty}</p>
        {props.trail.conditions.map((condition) => (
          <div key={condition.id}>
            <p>Trail condition: {condition.trail_condition}</p>
            <p>TESTING Trail_id: {condition.trail_id}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>Please log in!</p>;
  }
}
