import { Link } from "react-router-dom";
import { useAuth, useSignOut } from "../context/AuthContext";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  const user = useAuth();
  const signOut = useSignOut();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Brewitter</Link>
        </Typography>
        <Link to="/about">
          <Button color="inherit">About</Button>
        </Link>
        {user && (
          <>
            <Link to="/profile">
              <Button color="inherit">Profile</Button>
            </Link>
            <Button color="inherit" onClick={signOut}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
