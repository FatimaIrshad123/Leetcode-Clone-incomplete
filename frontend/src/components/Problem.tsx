
export default function Problem(){
    return (
        <div className="bg-gray-100 pb-5 rounded-lg max-w-screen-lg">
            <h1 className="text-4xl text-left py-5 bg-white">All Problems</h1>
            <div className="flex font-bold p-3 rounded w-screen">
                <h2 className="pr-20">Id</h2>
                <h2 className="pr-48">Problem Name</h2>
                <h2 className="pl-20">Recently Solved</h2>
            </div>
           <ProblemList/>
           <ProblemList/>
        </div>
    )
}

function ProblemList(){
    return (
        <div className="flex border m-2 p-3 rounded-lg font-medium text-base bg-white">
        <h1 className="pr-20">1</h1>
        <div className="pr-48">
            <h1>Two Sum</h1>
            <button className="bg-gray-800 text-white p-1 mr-2 rounded-lg font-normal">Array</button>
            <button className="bg-gray-800 text-white p-1 rounded-lg font-normal">Hash Table</button>
        </div>
        <h1 className="flex pl-20"><p className="text-gray-600">Last submission: </p>Fatima</h1>
    </div>
    )
}