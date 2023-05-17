import { doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import store from "../firebase/firestore";
import Error from "../components/Error";

function Message() {
  const { id } = useParams();
  const [value, loading, error] = useDocument(doc(store, "beer-feed", id));

  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Error className="container">
        Something wrong happend! Try again later.
      </Error>
    );
  }

  const data = value.data();

  if (!data) {
    return <Error className="container">Message not found!</Error>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="display-1 border-bottom">{data.beer}</h1>
          <h1 className="display-6">{data.type}</h1>
          <div className="d-flex gap-2">
            <img
              referrerPolicy="no-referrer"
              src={data.userPhotoURL}
              alt="user"
            />
            <p>{data.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
