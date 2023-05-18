import { useMemo } from "react";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuth } from "../context/AuthContext";
import store from "../firebase/firestore";
import BeerCard from "../components/BeerCard";

const beerConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
  toFirestore: (doc) => doc,
};

const beersRef = collection(store, "beer-feed").withConverter(beerConvert);

function Profile() {
  const user = useAuth();

  const beersQuery = useMemo(() => {
    return query(beersRef, where("uid", "==", user.uid));
  }, [user.uid]);

  const [items, loading] = useCollectionData(beersQuery);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex flex-column gap-2">
      <h1 className="display-1">Your messages</h1>
      {items.map((item) => (
        <BeerCard
          likeDisabled={true}
          onLike={() => {}}
          entry={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default Profile;
