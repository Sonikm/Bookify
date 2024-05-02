import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBRjdhf07zoqbYSPec0uFeYNWx5mgji8is",
    authDomain: "bookify-40e78.firebaseapp.com",
    projectId: "bookify-40e78",
    storageBucket: "bookify-40e78.appspot.com",
    messagingSenderId: "864586505041",
    appId: "1:864586505041:web:13c260961e8b2632991170"
  };

 const firebaseApp =  initializeApp(firebaseConfig);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
