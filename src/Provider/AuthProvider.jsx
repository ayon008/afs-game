'use client'
import React, { createContext, useEffect, useRef, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '@/js/firebase.init';
import useAxiosPublic from '@/Hooks/useAxiosPublic';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const [uid, setUid] = useState(null);
    const axiosPublic = useAxiosPublic()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createWithGoogle = async () => {
        setLoader(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return result;
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            throw error;
        } finally {
            setLoader(false);
        }
    }

    const createAccount = async (email, password) => {
        setLoader(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            console.error("Account Creation Error:", error);
            throw error;
        } finally {
            setLoader(false);
        }
    }

    const signIn = async (email, password) => {
        setLoader(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return result;
        } catch (error) {
            console.error("Sign-In Error:", error);
            throw error;
        } finally {
            setLoader(false);
        }
    }

    const logOut = async () => {
        setLoader(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout Error:", error);
            throw error;
        } finally {
            setLoader(false);
        }
    }

    const updatedProfile = async (name, photo) => {
        if (!auth.currentUser) return;
        try {
            await updateProfile(auth.currentUser, { displayName: name, photoURL: photo, });
        } catch (error) {
            console.error("Profile Update Error:", error);
            throw error;
        }
    }

    const userInfo = {
        user,
        logOut,
        createWithGoogle,
        createAccount,
        signIn,
        loader,
        updatedProfile,
    }

    const isRequestInProgress = useRef(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser && !isRequestInProgress.current) {
                setUser(currentUser);
                localStorage.setItem('uid', JSON.stringify(currentUser?.uid));
                setLoader(false);
                setUid(currentUser?.uid);
                isRequestInProgress.current = true;
                console.log(currentUser);
                

                try {
                    const tokenResponse = await axiosPublic.post('/userToken', { email: currentUser.email });
                    localStorage.setItem('userToken', JSON.stringify(tokenResponse.data));

                    try {
                        await axiosPublic.post('/user', currentUser);
                    } catch (error) {
                        console.error("Error posting user to database:", error);
                    }
                } catch (error) {
                    console.error("Token Fetch Error:", error);
                } finally {
                    isRequestInProgress.current = false;
                    setLoader(false);
                }
            } else if (!currentUser) {
                localStorage.removeItem('uid');
                localStorage.removeItem('userToken');
                setUser(null);
                setLoader(null);
                setUid(null);
            }
        });

        return () => {
            unSubscribe();
        };
    }, [auth, axiosPublic]);

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;