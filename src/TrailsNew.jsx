export function TrailsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrail(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trail</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Length: <input name="length" type="text" />
        </div>
        <div>
          Difficulty: <input name="difficulty" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create trail</button>
      </form>
    </div>
  );
}
