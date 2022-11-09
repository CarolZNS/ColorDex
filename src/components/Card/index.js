export default function Card(props) {
  return (
    <div className="card">
      <img src={props.data.sprite} alt="pokemon" />
      <p className="id">#{props.data.id}</p>
      <h3 className="name">{props.data.name}</h3>
      <div className="types">
        {props.data.types &&
          props.data.types.map((type) => <span className="type">{type}</span>)}
      </div>
    </div>
  );
}
