import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-89f58.firebaseapp.com",
  projectId: "reactchat-89f58",
  storageBucket: "reactchat-89f58.appspot.com",
  messagingSenderId: "390927594794",
  appId: "1:390927594794:web:6a33b83d402203af9fda53"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()