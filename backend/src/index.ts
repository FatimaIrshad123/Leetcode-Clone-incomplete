import { Hono } from 'hono'
//import admin from 'firebase-admin'
import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp } from 'firebase-admin/app'

const app1 = new Hono()

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
//initializeApp();
const db = getFirestore(app)

app1.get('/', async(c) => {
 const body = await c.req.json()
  const limit = body.limit || 10
  const res = await db.collection('submissions').limit(limit).get()
  return c.json({
    response: res
  })
 // return c.text('Hello world')
})

export default app
