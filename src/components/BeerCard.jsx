import { Link } from "react-router-dom";

function BeerCard(props) {
  const entry = props.entry;

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <h4 className="flex-grow-1 m-0">
          <Link to={`/message/${entry.id}`}>{entry.beer}</Link>
        </h4>
        <img
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          referrerPolicy="no-referrer"
          src={entry.userPhotoURL}
          alt="User"
        />
      </div>
      <div className="card-body">
        <p>{entry.message}</p>
      </div>
      <div className="card-footer">
        The beer type was: <span className="fw-bold">{entry.type}</span>
      </div>
    </div>
  );
}

export default BeerCard;
