import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    
    const [user, setuser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,setuser,
                login: async(email,password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async(email,password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email,password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                logout: async() => {
                    try{
                        await auth().signOut();   
                    }catch(e){
                        console.log(e)
                    }
                }
        }}>
            {children}    
        </AuthContext.Provider>
    )
};


