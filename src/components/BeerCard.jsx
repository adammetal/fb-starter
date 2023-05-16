function BeerCard(props) {
  const entry = props.entry;

  return (
    <div className="card">
      <div className="card-body">
        <h2>{entry.beer}</h2>
        <p>{entry.message}</p>
      </div>
    </div>
  );
}

export default BeerCard;
