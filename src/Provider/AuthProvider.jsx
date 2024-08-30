'use client'
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '@/js/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const createWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateProfile = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const userInfo = {
        user,
        logOut,
        createWithGoogle,
        createAccount,
        signIn,
        loader,
        updateProfile,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                localStorage.setItem('uid', JSON.stringify(currentUser?.uid))
                setLoader(false)
                console.log(currentUser);
            }
            else {
                localStorage.removeItem('uid');
                setUser(null);
                setLoader(null)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [auth])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;