const leader = [
    {
        name: 'Fatima',
        id: 1,
        points: 20    
    },
    {
        name: 'Javaria',
        id: 2,
        points: 10    
    },
    {
        name: 'Muzammil',
        id: 3,
        points: 20    
    },
    {
        name: 'Mudassir',
        id: 4,
        points: 15    
    },
]

export const Leaderboard = () => {
    return (
        <div className="border border-3xl w-auto rounded-lg">
            <h2 className="text-left p-5 font-bold text-2xl">Leaderboards</h2>
            <div className="flex p-5 border-b-2 text-gray-800 font-bold">
                <h2 className="mr-20 pr-48">Id</h2>
                <h2 className="mr-32 text-gray-700">Name</h2>
                <h2 className="mr-30">Points</h2>
            </div>
            {leader.map((e) => {
                return (
                    <div>
                        <div className="flex p-5 border-b-2 text-gray-800">
                        <h2 className="mr-20 pr-48">{e.id}</h2>
                        <h2 className="mr-32 text-gray-700 text-center">{e.name}</h2>
                        <h2 className="mr-20">{e.points}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )}