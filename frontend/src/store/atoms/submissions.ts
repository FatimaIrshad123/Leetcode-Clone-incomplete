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
    return response.data.response.map(x => ({
        timestamp: x.submitTime._nanoseconds,
        language: x.language,
        submission: x.submission,
        status: x.status
    }))
   }
})