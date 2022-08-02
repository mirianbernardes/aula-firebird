import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
const provider = new GoogleAuthProvider();

export const LoginGoogle = async () => {
  
        return await signInWithPopup(auth, provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("LOGIN -> ", result.user)
                return result.user
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMesage = error.message
                const email = error.customData.email
                const credential = GoogleAuthProvider.credentialFromError(error)
            })
    
}

export function logOut(){
    signOut(auth).then(() => {
        Router.push('/');
    }).catch((error) => {
        // An error happened.
    });
}