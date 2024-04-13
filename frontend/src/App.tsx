import { useEffect } from 'react';
import './App.css'
import Landing from './components/Landing'
import Signin from './components/Signin';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCijoVcwkeJe4niBkBd8n07Fe1JhQfxu0E",
  authDomain: "leetcode-clone-9205a.firebaseapp.com",
  projectId: "leetcode-clone-9205a",
  storageBucket: "leetcode-clone-9205a.appspot.com",
  messagingSenderId: "212689169262",
  appId: "1:212689169262:web:b77d2cbddd8d7b0995af7f",
  measurementId: "G-HM6Y83BJ75"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  useEffect (() => {
    onAuthStateChanged(auth,function(user) {
      if (user) {
        console.log('This is the user: ', user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }})
  },[])
  return (
    <div className=''>
      <Signin />
    </div>
  )
}

export default App
