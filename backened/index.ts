const SUPPORTED_LANGUAGES = require('./utils.ts')
const express = require('express')
const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('../../leetcode-clone-9205a-firebase-adminsdk-rpmf3-c93c3a871d.json');
const cors = require('cors')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://leetcode-clone-9205a.firebaseio.com',
  projectId: 'leetcode-clone-9205a' 
});

const db = getFirestore();
const app = express()

app.use(cors())
app.use(express.json())

app.get('/data', async(req,res) => {
    const limit = 5
    const response = await db.collection("submissions").limit(limit).orderBy('submitTime','desc').get()
    let submissions :any = [];
    response.docs.forEach(doc => {
        submissions.push(new Promise(async (resolve) =>{
            //console.log(doc.data().user)
            const snapshot = await doc.data().user.get()
            resolve ({
                submissions: doc.data(),
                user: snapshot.data()
            })
        }))
      })
    //console.log(submissions)
    res.json({response: await Promise.all(submissions)})
})

app.listen(3000, () => {console.log('Running on port 3000')})

app.post('/',async (req,res) => {
    const uid = req.body.auth.uid;
    const language = req.body.data.language;
    const submission = req.body.data.submission;
    const problemId = req.body.data.problemId;

    if (!uid) {
        console.log('hi')
        return res.json( {
            message: "Unauthorized"
        })
    }

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        return res.status(403).json({
            message: "Language not supported"
        })
    }

    const problem = await db.collection("problems").doc(problemId?.toString()).get();
console.log(problem)
    if (!problem.exists) {
        return res.status(403).json( {
            message: "Problem Doesnt exist"
        })
    }

    const doc = await db.collection("submissions").add({
        language,
        submission,
        problemId,
        userId: uid,
        submitTime: new Date(),
        workerTryCount: 0,
        status: "PENDING"
    })

    res.json( {
        message: "Submission done",
        id: doc.id
    })
})