import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, addDoc, serverTimestamp } from "firebase/firestore";
import store from "../firebase/firestore";
import BeerCard from "./BeerCard";
import BeerMessage from "./BeerMessage";
import { useAuth } from "../context/AuthContext";

const beerConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
  toFirestore: (doc) => doc
};

const beerRef = collection(store, "beer-feed").withConverter(beerConvert);
const beerQuery = query(beerRef);

function Feed() {
  const user = useAuth();
  const [items, loading] = useCollectionData(beerQuery);

  const handleSendMessage = async (message) => {
    await addDoc(beerRef, {
      ...message,
      createdAt: serverTimestamp(),
      userPhotoURL: user.photoURL,
      uid: user.uid,
    });
  }

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container d-flex flex-column gap-2">
      <BeerMessage onSend={handleSendMessage} />
      {items.map((item) => (
        <BeerCard entry={item} key={item.id} />
      ))}
    </div>
  );
}

export default Feed;
