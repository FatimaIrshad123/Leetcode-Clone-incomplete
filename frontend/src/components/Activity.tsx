import SubmissionActivity from "./SubmissionActivity";
import { SubmissionActivityList } from "./SubmissionActivityList";

export default function Activity(){
    return (
        <div className="flex flex-col md:flex-row mt-5 ">
            <div className="mr-5">
            <SubmissionActivityList />
            </div>
            <div className="border pt-2 border-2xl rounded-lg md:w-64">
            <SubmissionActivity />
            </div>
            
            
        </div>
    )
}