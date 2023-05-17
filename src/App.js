import Login from "./components/Login";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { useAuth } from './context/AuthContext';

function App() {
  const user = useAuth();

  return (
    <div>
      <Navbar />
      {user ? <Feed /> : <Login />}
    </div>
  );
}

export default App;
