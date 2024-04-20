import { RecoilRoot, useRecoilValue } from "recoil";
import { globalSubmissions } from "../store/atoms/submissions";
import { Suspense } from "react";


export default function Landing(){
    return (
        <div>
            <RecoilRoot>
    <Suspense fallback= {<div>Loading ....</div>}>
        <_SubmissionActivityList />
    </Suspense>
    </RecoilRoot>
        </div>
    )
}
const _SubmissionActivityList = () => {
    const submissions = useRecoilValue(globalSubmissions);
    return (
        <div>
            {JSON.stringify(submissions)}
        </div>
    )
}