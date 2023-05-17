import { signOut } from "firebase/auth";
import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/auth";

const handleSignOut = () => signOut(auth);

const AuthContext = createContext(null);
const AuthFunctionsContext = createContext(handleSignOut);

function AuthProvider(props) {
  const [user, loading] = useAuthState(auth);

  return (
    <AuthContext.Provider value={user}>
      <AuthFunctionsContext.Provider value={handleSignOut}>
        {!loading ? props.children : null}
      </AuthFunctionsContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useSignOut = () => {
  return useContext(AuthFunctionsContext);
}

export default AuthProvider;
