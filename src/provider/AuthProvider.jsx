import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
     getAuth, onAuthStateChanged, 
     signInWithEmailAndPassword, 
     signOut,
     updateProfile, 
     } from "firebase/auth";
import app from "../firebase/firebase.config";



 export const AuthContext=createContext();
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(user);
    const createNewUser =( email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const UserLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser= () =>{
        setLoading(true)
        return signOut(auth)
    }
  const updateUserProfile = (updateData) =>{
    return updateProfile(auth.currentUser,updateData)
  }

    const authInfo={
        user,
        setUser,
        createNewUser,
        logOutUser,
        UserLogin,
        loading,
        updateUserProfile
    }
    useEffect(()=>{
     const sunsubscribe=onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser)
         setLoading(false)
        })
        return ()=>{
            sunsubscribe();
        }
    },[])


    return <AuthContext.Provider value={authInfo}>
         {children}
    </AuthContext.Provider>
};

export default AuthProvider;