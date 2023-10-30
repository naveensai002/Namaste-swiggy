// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDZQzvQJV7AL88bZZ1JtlGNnMWIBJUx8XA',
  authDomain: 'swiggy-clone-62b3b.firebaseapp.com',
  projectId: 'swiggy-clone-62b3b',
  storageBucket: 'swiggy-clone-62b3b.appspot.com',
  messagingSenderId: '894422655329',
  appId: '1:894422655329:web:c929a601b974e39460a520',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
