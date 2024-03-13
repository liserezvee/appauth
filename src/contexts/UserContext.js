import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signWithGoogle = ()=>{
    return signInWithPopup( auth, googleProvider)
  }

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser);
    })

    return()=>{unsubscibe()}
  },[])

  const authInfo = {user,loading, createUser, signIn,signWithGoogle, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
