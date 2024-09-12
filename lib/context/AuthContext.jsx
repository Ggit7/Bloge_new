"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsub();
    }, []);

    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };

    const handleSignOut = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                handleSignIn,
                handleSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
