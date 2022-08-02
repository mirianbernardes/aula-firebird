import { signOut } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from 'firebase/auth';
import cookie from 'js-cookie';
import { LoginGoogle, logOut } from '../autentication/Google';

const AuthContext = createContext();

const formatUser = async (user) => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.accessToken,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
})

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (currentUser) => {
        if (currentUser) {
            console.log(currentUser)
            const formatedUser = await formatUser(currentUser);
            setUser(formatedUser);
            setSession(true);
            return formatedUser.email;
        }
        setUser(false);
        setSession(false);
        return false;   
    }

    const setSession = (session) => {
        if (session) {
            cookie.set('aulaFirebase-auth', session, {
              expires: 1,
            });
        } else {
            cookie.remove('aulaFirebase-auth');
        }
    }

    const signinGoogle = async () => {
        try {
            setLoading(true);
            console.log("login com google")
            const user = await LoginGoogle()
            console.log("Retorno -> ", user)
            await handleUser(user);
            //Router.push('/dashboard')      
        } finally {
            setLoading(false);
        }
    }

    const signout = async () => {
        try {
            setLoading(true);
            logOut()
            setSession(false);
          } finally {
            setLoading(false);
          }
    }
    
    

    return <AuthContext.Provider value={{
        user,
        loading,
        signinGoogle,
        signout
    }}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;