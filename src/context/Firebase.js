import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, uploadBytes, ref } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBRjdhf07zoqbYSPec0uFeYNWx5mgji8is",
  authDomain: "bookify-40e78.firebaseapp.com",
  projectId: "bookify-40e78",
  storageBucket: "bookify-40e78.appspot.com",
  messagingSenderId: "864586505041",
  appId: "1:864586505041:web:13c260961e8b2632991170",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const sigupUserWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(() => {
      console.log("successfuly signup");
    })
    .catch((err) => {
      console.log(err);
    });
};

const signinUserWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(() => {
      console.log("successfuly sign In");
    })
    .catch((err) => console.log(err));
};

const googleProvider = new GoogleAuthProvider();

const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const isLoggedIn = user ? true : false;

  const handleCreateNewListing = async (name, isbn, price, cover) => {
    const imgRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imgRef, cover);
    return await addDoc(collection(firestore, "book"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      useID: user.uid,
      userEmail: user.email,
      userName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        sigupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
