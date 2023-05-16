import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../firebase/auth';

const AuthContext = createContext(null);

function AuthProvider(props) {
  const [user, loading] = useAuthState(auth);

  return (
    <AuthContext.Provider value={user}>
      {!loading ? props.children : null}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider;
