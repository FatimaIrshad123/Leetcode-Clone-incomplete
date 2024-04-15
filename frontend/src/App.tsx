import { useEffect } from 'react';
import './App.css'
import Landing from './components/Landing'
import Signin from './components/Signin';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import { Topbar } from './components/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import SubmissionActivity from './components/SubmissionActivity';
import { SubmissionActivityList } from './components/SubmissionActivityList';
import Activity from './components/Activity';
import Problem from './components/Problem';

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
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route element={<About />} path='/about'/>
          <Route element={<div>
              <RecoilRoot>
                <StoreApp />
              </RecoilRoot>
            </div>} path='/'/>
            <Route element={<Activity/>} path='/activity'/>
            <Route element={<Problem/>} path='/problems'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
    
}

function StoreApp(){
  const [user,setUser] = useRecoilState(userAtom)

  useEffect (() => {
    onAuthStateChanged(auth,function(user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
        console.log('This is the user: ', user)
      } else {
        setUser({
          loading: true,
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }})
  },[])

  if (user.loading){
    return <div>Loading ....</div>
  }
  if (!user.user){
    return <div><Signin /></div>
  }
  return (
    <div className=''>
      You are logged in as {user.user?.email}
    </div>
  )
}
export default App
