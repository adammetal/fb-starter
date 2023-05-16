import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import auth from "../firebase/auth";

function Login() {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="container d-flex justify-content-center">
      <button className="btn btn-primary" onClick={handleLogin}>
        Sign In With Google
      </button>
    </div>
  );
}

export default Login;
