import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoaidng] = useState(true);

  const createUser = (email, password) => {
    setLoaidng(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const singin = (email, password) => {
    setLoaidng(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoaidng(true);
    return signOut(auth);
  }

  const uptadeUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('current user', currentUser);
      setLoaidng(false);
    });
    return () => {
      return unsubscribe;
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    singin,
    logout,
    uptadeUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;