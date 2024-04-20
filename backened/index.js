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
var SUPPORTED_LANGUAGES = require('./utils.ts');
var express = require('express');
var admin = require('firebase-admin');
var initializeApp = require('firebase-admin/app').initializeApp;
var getFirestore = require('firebase-admin/firestore').getFirestore;
var serviceAccount = require('../../leetcode-clone-9205a-firebase-adminsdk-rpmf3-c93c3a871d.json');
var cors = require('cors');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://leetcode-clone-9205a.firebaseio.com',
    projectId: 'leetcode-clone-9205a'
});
var db = getFirestore();
var app = express();
app.use(cors());
app.use(express.json());
app.get('/data', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var limit, response, submissions, _a, _b;
    var _c;
    var _this = this;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                limit = 5;
                return [4 /*yield*/, db.collection("submissions").limit(limit).orderBy('submitTime', 'desc').get()];
            case 1:
                response = _d.sent();
                submissions = [];
                //console.log(response.docs)
                response.docs.forEach(function (doc) {
                    submissions.push(new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var snapshot, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    console.log(doc.data());
                                    return [4 /*yield*/, doc.data()];
                                case 1:
                                    snapshot = _c.sent();
                                    _a = resolve;
                                    _b = {
                                        submissions: doc.data()
                                    };
                                    return [4 /*yield*/, doc.data()];
                                case 2:
                                    _a.apply(void 0, [(_b.user = _c.sent(),
                                            _b)]);
                                    return [2 /*return*/];
                            }
                        });
                    }); }));
                });
                //console.log(submissions)
                _b = (_a = res).json;
                _c = {};
                return [4 /*yield*/, Promise.all(submissions)];
            case 2:
                //console.log(submissions)
                _b.apply(_a, [(_c.response = _d.sent(), _c)]);
                return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { console.log('Running on port 3000'); });
app.post('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var uid, language, submission, problemId, problem, doc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uid = req.body.auth.uid;
                language = req.body.data.language;
                submission = req.body.data.submission;
                problemId = req.body.data.problemId;
                if (!uid) {
                    console.log('hi');
                    return [2 /*return*/, res.json({
                            message: "Unauthorized"
                        })];
                }
                if (!SUPPORTED_LANGUAGES.includes(language)) {
                    return [2 /*return*/, res.status(403).json({
                            message: "Language not supported"
                        })];
                }
                return [4 /*yield*/, db.collection("problems").doc(problemId === null || problemId === void 0 ? void 0 : problemId.toString()).get()];
            case 1:
                problem = _a.sent();
                console.log(problem);
                if (!problem.exists) {
                    return [2 /*return*/, res.status(403).json({
                            message: "Problem Doesnt exist"
                        })];
                }
                return [4 /*yield*/, db.collection("submissions").add({
                        language: language,
                        submission: submission,
                        problemId: problemId,
                        userId: uid,
                        submitTime: new Date(),
                        workerTryCount: 0,
                        status: "PENDING"
                    })];
            case 2:
                doc = _a.sent();
                res.json({
                    message: "Submission done",
                    id: doc.id
                });
                return [2 /*return*/];
        }
    });
}); });
