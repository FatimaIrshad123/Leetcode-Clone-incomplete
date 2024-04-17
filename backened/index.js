var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var admin = require('firebase-admin');
var initializeApp = require('firebase-admin/app').initializeApp;
var getFirestore = require('firebase-admin/firestore').getFirestore;
var serviceAccount = require('../../leetcode-clone-9205a-firebase-adminsdk-rpmf3-c93c3a871d.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://leetcode-clone-9205a.firebaseio.com',
    projectId: 'leetcode-clone-9205a'
});
var db = getFirestore();
var app = express();
app.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var limit, response, submissions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                limit = 5;
                return [4 /*yield*/, db.collection("submissions").limit(limit).orderBy('submitTime', 'desc').get()];
            case 1:
                response = _a.sent();
                submissions = [];
                response.docs.forEach(function (doc) {
                    submissions.push(doc.data());
                });
                console.log(submissions);
                res.json(response);
                return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { console.log('Running on port 3000'); });
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
