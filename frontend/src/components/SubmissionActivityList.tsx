

export const SubmissionActivityList =() => {
    return (
        <div className="border border-3xl w-auto rounded-lg">
            <h2 className="text-left p-5">Submission</h2>
            <div className="flex p-5 border-b-2 text-gray-800">
                <h2 className="mr-20 pr-48">Fatima</h2>
                <h2 className="mr-20 text-gray-700">#1</h2>
                <h2 className="mr-20">57600000</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="flex p-5 border-b-2 text-gray-800">
                <h2 className="mr-20 pr-48">Fatima</h2>
                <h2 className="mr-20 text-gray-700">#1</h2>
                <h2 className="mr-20">57600000</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className="flex p-5 justify-between">
                <button className="bg-gray-300 p-3 w-24 rounded-lg">Previous</button>
                <button className="bg-gray-300 p-3 w-24 rounded-lg justify-right">Next</button>
            </div>
        </div>
    )
}