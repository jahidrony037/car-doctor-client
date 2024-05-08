import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropType from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "null",
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current value of the Current user", currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      if (currentUser) {
        // console.log(currentUser.uid);

        setUser(currentUser);
        axios
          .post(
            "https://car-doctor-server-dusky-nine.vercel.app/jwt",
            loggedInUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error.message));
      } else {
        setUser(null);
        axios
          .post(
            "https://car-doctor-server-dusky-nine.vercel.app/logout",
            loggedInUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error.message));
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  const allValue = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    logOut,
    updateUser,
  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.node,
};

export default AuthProvider;
