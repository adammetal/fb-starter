import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  increment,
  getDoc,
  setDoc,
  arrayUnion,
  orderBy,
} from "firebase/firestore";
import store from "../firebase/firestore";
import BeerCard from "./BeerCard";
import BeerMessage from "./BeerMessage";
import { useAuth } from "../context/AuthContext";
import { Container } from "@mui/material";

const beerConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
  toFirestore: (doc) => doc,
};

const beerRef = collection(store, "beer-feed").withConverter(beerConvert);
const beerQuery = query(beerRef, orderBy('createdAt', 'desc'));

function Feed() {
  const user = useAuth();
  const [likeLoading, setLikeLoading] = useState("");
  const [items, loading] = useCollectionData(beerQuery);

  const handleSendMessage = async (message) => {
    await addDoc(beerRef, {
      ...message,
      createdAt: serverTimestamp(),
      userPhotoURL: user.photoURL,
      uid: user.uid,
    });
  };

  const handleLike = async (id) => {
    setLikeLoading(id);

    const userLikesRef = doc(store, "user-likes", user.uid);
    const userLikesDoc = await getDoc(userLikesRef);

    if (userLikesDoc.exists()) {
      const userLikesData = userLikesDoc.data();
      if (userLikesData.likes.includes(id)) {
        setLikeLoading("");
        return;
      }
    }

    await setDoc(
      userLikesRef,
      {
        likes: arrayUnion(id),
      },
      { merge: true }
    );

    const messageRef = doc(store, "beer-feed", id);

    await updateDoc(messageRef, {
      likes: increment(1),
    });

    setLikeLoading("");
  };

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ marginTop: '1rem' }} maxWidth="md">
      <BeerMessage onSend={handleSendMessage} />
      {items.map((item) => (
        <BeerCard
          likeDisabled={item.id === likeLoading}
          onLike={handleLike}
          entry={item}
          key={item.id}
        />
      ))}
    </Container>
  );
}

export default Feed;
