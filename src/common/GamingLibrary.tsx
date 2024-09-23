// components/GamingLibrary.js

import Image from 'next/image';
import Link from 'next/link';

const GamingLibrary = () => {
    const games = [
        {
            title: "Dota 2",
            category: "Sandbox",
            dateAdded: "24/08/2036",
            hoursPlayed: "634 H 22 Mins",
            status: "Downloaded",
            imgSrc: "/assets/images/game-01.jpg",
        },
        {
            title: "Fortnite",
            category: "Sandbox",
            dateAdded: "22/06/2036",
            hoursPlayed: "740 H 52 Mins",
            status: "Downloaded",
            imgSrc: "/assets/images/game-02.jpg",
        },
        {
            title: "CS-GO",
            category: "Sandbox",
            dateAdded: "21/04/2036",
            hoursPlayed: "892 H 14 Mins",
            status: "Downloaded",
            imgSrc: "/assets/images/game-03.jpg",
        },
    ];

    return (
        <div className="mt-16 p-8 bg-gray-900 rounded-2xl">
            <div className="mb-6">
                <h4 className="text-2xl font-bold text-white"><em>Your Gaming</em> Library</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4 flex flex-col">
                        <div className="relative h-40 mb-4">
                            <Image
                                src={game.imgSrc}
                                alt={game.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{game.title}</h4>
                        <span className="text-gray-400">{game.category}</span>
                        <div className="mt-2">
                            <h4 className="text-md text-white">Date Added</h4>
                            <span className="text-gray-400">{game.dateAdded}</span>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-md text-white">Hours Played</h4>
                            <span className="text-gray-400">{game.hoursPlayed}</span>
                        </div>
                        <div className="mt-2">
                            <h4 className="text-md text-white">Currently</h4>
                            <span className="text-gray-400">{game.status}</span>
                        </div>
                        <div className="mt-4">
                            <div className={`border border-gray-600 py-2 px-4 rounded-md text-center ${game.status === "Downloaded" ? "bg-gray-600" : "bg-gray-900"}`}>
                                <p className="text-white">{game.status === "Downloaded" ? "Downloaded" : "Download"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link href="/library">
                    <p className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                        View Your Library
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default GamingLibrary;
