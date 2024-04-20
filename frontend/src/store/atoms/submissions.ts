import { selector } from "recoil";
import axios from "axios";

type Submission = {
    languages: string;
    timestamp: number;
    submission: string;
    status: string
}

export const globalSubmissions = selector<Submission>({
   key: "globalSubmissions",
   get: async ({get}) => {
    const response = await axios.get('http://localhost:3000/data')
   // console.log(response.data)
    return response.data.response.map((x) => ({
        timestamp: x.submissions.submitTime._nanoseconds,
        language: x.submissions.language,
        submission: x.submissions.submission,
        status: x.submissions.status
    }))
   }
})