import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import store from "../firebase/firestore";
import BeerCard from "./BeerCard";

const beerConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
};

const beerRef = collection(store, "beer-feed").withConverter(beerConvert);
const beerQuery = query(beerRef);

function Feed() {
  const [items, loading] = useCollectionData(beerQuery);

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex flex-column gap-2">
      {items.map((item) => (
        <BeerCard entry={item} key={item.id} />
      ))}
    </div>
  );
}

export default Feed;
