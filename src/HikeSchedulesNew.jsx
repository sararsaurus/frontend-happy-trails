export function HikesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHike(params, () => event.target.reset());
  };

  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return (
      <div>
        <h1>Take a hike!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Trail ID: <input name="trail_id" type="text" />
          </div>
          <div>
            Date: <input name="date" type="date" />
          </div>
          <button type="submit">Schedule!</button>
        </form>
      </div>
    );
  }
}
// defaultValue={props.trail.id}
