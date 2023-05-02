import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true)

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userLogOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
   

    const authInfo={
        user,
        createUser,
        userLogIn,
        auth,
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;