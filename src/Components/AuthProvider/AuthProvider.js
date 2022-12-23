import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curreantuser => {
            setLoading(false)
            setUser(curreantuser)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const AuthInfo = {
        creatUser,
        updateUser,
        signUp,
        user,
        loading,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;