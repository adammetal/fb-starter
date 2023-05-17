import { useAuth, useSignOut } from "../context/AuthContext";

function Navbar() {
  const user = useAuth();
  const signOut = useSignOut();

  return (
    <nav className="navbar mb-4" style={{ backgroundColor: "#f7df1e" }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Brewitter</span>
        {user && (
          <button className="btn btn-secondary" onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
