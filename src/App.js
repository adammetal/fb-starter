import { signOut } from "firebase/auth";
import auth from "./firebase/auth";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { useAuth } from './context/AuthContext';

function App() {
  const user = useAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="navbar mb-4" style={{ backgroundColor: "#f7df1e" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Brewitter</span>
          {user && (
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
      {user ? <Feed user={user} /> : <Login />}
    </div>
  );
}

export default App;
