import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, writeBatch, query, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCALV4poEmUy1gVZaRI4ii4O22MZFfO2mQ",
    authDomain: "e-shop-d5a05.firebaseapp.com",
    projectId: "e-shop-d5a05",
    storageBucket: "e-shop-d5a05.appspot.com",
    messagingSenderId: "1081827408671",
    appId: "1:1081827408671:web:9e4dcdc9ecd1e1732ece2a"
  };
  
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
//   provider.setCustomParameters({
//     'prompt': 'select accounts'
//   });
  
  const auth = getAuth()
  export {auth,provider}
  // export const signInwithGooglePopup = () => signInWithPopup(auth, provider)
  
  const db = getFirestore(app);

  export const createNewCollection = async (collectionKey, objectToAdd) =>{
    const collectionRef = collection(db , collectionKey);
    const batch = writeBatch(db)

    objectToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    });

    await batch.commit()
    console.log('done!')
  }


  export const getCollectionData = async () =>{
    const q = doc(db, "categories", 'hats');
    const querySnapshot = await getDoc(q);
    return querySnapshot.data();
  }