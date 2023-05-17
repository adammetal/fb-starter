import { useAuth } from "../context/AuthContext";
import Feed from "../components/Feed";
import Login from "../components/Login";

function Home() {
  const user = useAuth();

  return (
    <>
      {user ? <Feed /> : <Login />}
    </>
  )
}

export default Home;
