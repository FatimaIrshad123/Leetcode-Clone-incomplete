import { Link } from "react-router-dom"
export const Topbar = () => {
    return (
        <div className="place-items-center">
            <div className="max-w-screen-lg bg-black min-h-56 align-center">
                <h1 className="text-white font-semibold text-8xl text-left p-10">LEET CODE</h1>
                <Navbar />
            </div>
        </div>
    )
}

/*const topbarItems = [
    {
        title: 'About',
        route: '/about'
    },
    {
        title: 'Activity',
        route: '/activity'
    },
    {
        title: 'Problems',
        route: '/problems'
    },
    {
        title: 'Leaderboard',
        route: '/leaderboard'
    }
]*/

function Navbar(){
    return (
        <div className="text-gray-400 flex p-5">
            <h2 className="m-3"><Link to={'/about'}>About</Link></h2>
            <h2 className="m-3"><Link to={'/activity'}>Activity</Link></h2>
            <h2 className="m-3"><Link to={'/problems'}>Problems</Link></h2>
            <h2 className="m-3"><Link to={'/leaderboard'}>Leaderboard</Link></h2>
        </div>
    )
}