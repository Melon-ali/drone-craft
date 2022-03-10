import { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';

// initialize firebase app
initializeAuthentication();

export default function useFirebase() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name}
            setUser(newUser);

            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            sessionStorage.setItem("email", result.user.email);
        })
        .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
          setAdmin(data.admin)
        })
  
      },[user.email])

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    } , [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .catch(()=>{})
        .finally(()=> setIsLoading(false));
    }

    return {
        user,
        authError, 
        registerUser,
        loginUser,
        isLoading,
        signInUsingGoogle,
        admin,
        logOut
    }
}
