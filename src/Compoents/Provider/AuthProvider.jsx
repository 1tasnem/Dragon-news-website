 import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Children, createContext, useEffect } from 'react';
 import { useState } from 'react';
 import { getAuth } from "firebase/auth";
 import app from '../Firebase/Firebase.config';
import { updateProfile } from 'firebase/auth/cordova';
 export const AuthContext = createContext();
 const auth = getAuth(app);
 
 const AuthProvider = ({  children }) => {
    const [user, setUser] = useState(null);
    const [loading ,setLoading] = useState(true);

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const userLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const UpdateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser , updateData)
    }

    const createNewUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        UpdateUserProfile,
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>
        {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        };
    },[])
    return (
    <AuthContext.Provider value={authInfo}>
    {children}

    </AuthContext.Provider>
 );

};
 
 export default AuthProvider;