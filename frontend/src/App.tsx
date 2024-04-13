import './App.css'
import Landing from './components/Landing'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Signin from './components/Signin';

const firebaseConfig = {
  apiKey: "AIzaSyCijoVcwkeJe4niBkBd8n07Fe1JhQfxu0E",
  authDomain: "leetcode-clone-9205a.firebaseapp.com",
  projectId: "leetcode-clone-9205a",
  storageBucket: "leetcode-clone-9205a.appspot.com",
  messagingSenderId: "212689169262",
  appId: "1:212689169262:web:b77d2cbddd8d7b0995af7f",
  measurementId: "G-HM6Y83BJ75"
};

const app = initializeApp(firebaseConfig);


function App() {
  
  return (
    <div className='text-3xl font-bold underline'>
      <Landing />
      <Signin />
    </div>
  )
}

export default App
