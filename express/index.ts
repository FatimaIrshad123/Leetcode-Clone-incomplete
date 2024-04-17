const express = require('express')
const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('../../leetcode-clone-9205a-firebase-adminsdk-rpmf3-c93c3a871d.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://leetcode-clone-9205a.firebaseio.com',
  projectId: 'leetcode-clone-9205a' 
});

const db = getFirestore();
const app = express()

app.get('/', async(req,res) => {
    const limit = 5
    //const limit = req.body.limit || 10;
    const res1 = await db.collection("submissions").limit(limit).orderBy('submitTime','desc').get()
    const submissions : string[] = [];
    
   // console.log(res1.docs)
    res1.docs.forEach(doc => {
        //console.log(doc.data())
        submissions.push(doc.data())
    })
    res.json(res1)
})

app.listen(3000, () => {console.log('Running on port 3000')})
/*export const getSubmissions = onRequest({ cors: true }, async (request, response) => {
    // const offset = request.body.offset;
    const limit = request.body.limit || 10;
    const res = await db.collection("submissions").limit(limit).orderBy("submitTime", "desc").get();
    const submissions = [];
    console.log("res.docs")
    console.log(res.docs.length)
    res.docs.forEach(async doc => {
        console.log("doc1");
        submissions.push(new Promise(async (resolve) => {
                console.log(doc.data().user)
                const snapshot = await doc.data().user.get();
                resolve({
                    submission: doc.data(),
                    user: snapshot.data()
                })
        }))
    })

    response.send({
        response: await Promise.all(submissions)
    })
})

export const submit = onCall(async (request) => {
    const uid = request.auth.uid;
    const language = request.data.language;
    const submission = request.data.submission;
    const problemId = request.data.problemId;

    if (!uid) {
        return {
            message: "Unauthorized"
        }
    }

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        return {
            message: "Language not supported"
        }
    }

    const problem = await db.collection("problems").doc(problemId?.toString()).get();

    if (!problem.exists) {
        return {
            message: "Problem Doesnt exist"
        }
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

    return {
        message: "Submission done",
        id: doc.id
    }
})*/