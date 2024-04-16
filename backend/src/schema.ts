import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL!)

const problemSchema = new mongoose.Schema({
    defaultCode: {
        cpp: String,
        js: String
    },
    description: String,
    testCases: [{
        input: String,
        output: String
    }],
    title: String
})

const submissionSchema = new mongoose.Schema({
    language: String,
    problemId: String,
    status: String,
    submission: String,
    submitTime: Number,
    userId: String,
    workerPickTime: Number,
    workerTryCount: Number
})

const userSchema = new mongoose.Schema({
    points: Number
})
const dailyActivitySchema = new mongoose.Schema({
    count: Number
})

const Problems = mongoose.model('Problems',problemSchema);
const Submissions = mongoose.model('Submissions',submissionSchema);
const User = mongoose.model('User',userSchema);
const DailyActivity = mongoose.model('DailyActivity',dailyActivitySchema)

module.exports = {
    Problems,
    Submissions,
    User,
    DailyActivity
}