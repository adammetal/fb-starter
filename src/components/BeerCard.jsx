import { Link } from "react-router-dom";

function BeerCard(props) {
  const entry = props.entry;
  const onLike = props.onLike;
  const likeDisabled = props.likeDisabled;

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
      <div className="card-footer d-flex">
        <div className="flex-grow-1">
          The beer type was: <span className="fw-bold">{entry.type}</span>
        </div>
        <div>
          <button
            disabled={likeDisabled}
            onClick={() => onLike(entry.id)}
            className="btn btn-primary"
          >
            Like ({entry.likes})
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
