import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoaidng] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = UseAxiosPublic();

  const createUser = (email, password) => {
    setLoaidng(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleSingin = () => {
    setLoaidng(true);
    return signInWithPopup(auth, googleProvider)
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
      // console.log('current user', currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('acces-token', res.data.token)
            }
          })
      }
      else {
        localStorage.removeItem('acces-token');
      }
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
    googleSingin,
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