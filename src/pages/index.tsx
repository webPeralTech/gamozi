import Link from 'next/link';
import Image from 'next/image';
import Banner from '../common/Banner';
import PopularGames from '@/common/PopularGames';
import GamingLibrary from '@/common/GamingLibrary';

const Home = () => {

    const games = [
        { title: "Fortnite", category: "Sandbox", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { title: "PubG", category: "Battle S", image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg" },
        { title: "Dota2", category: "Steam-X", image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg" },
        { title: "CS-GO", category: "Legendary", image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg" },
        { title: "Mini Craft", category: "Legendary", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { title: "Eagles Fly", category: "Matrix Games", image: "https://images.pexels.com/photos/234567/pexels-photo-234567.jpeg" },
        { title: "Warface", category: "Max 3D", image: "https://images.unsplash.com/photo-1640955011254-39734e60b16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Warcraft", category: "Legend", image: "https://images.unsplash.com/photo-1536765659537-ac6b544ea73b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Fortnite", category: "Sandbox", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { title: "PubG", category: "Battle S", image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg" },
        { title: "Dota2", category: "Steam-X", image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg" },
        { title: "CS-GO", category: "Legendary", image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg" }
    ];

    const gamesLibrary = [
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
        <div className="mt-28">


            {/* ***** Banner Start ***** */}
            <div
                className="container mx-auto h-96 flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg')" }}
            >
                <div className=" text-center text-white">
                    <h6 className="text-3xl font-bold">Welcome to the Gaming Hub</h6>
                    <h4 className="text-4xl font-bold mt-2">
                        <em className="text-pink-600">Browse</em> Our Popular Games Here
                    </h4>
                    <div className="flex items-center justify-center mt-4">
                        <Link href="/browse">
                            <p className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg w-36">
                                Browse Now
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Banner /> */}
            {/* ***** Banner End ***** */}

            {/* ***** Most Popular Start ***** */}
            <div className="container mx-auto bg-[#0D1117] p-8 rounded-lg overflow-hidden mt-8"
                style={{
                    backgroundImage: 'radial-gradient(circle, #D5006D 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat'
                }}>
                <div className="">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Most Popular <span className="text-pink-500">Right Now</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {games.map((game, idx) => (
                            <div key={idx} className="bg-gradient-to-b from-[#4A0E4E] to-[#3D0D40]  rounded-lg p-4 flex flex-col">
                                <div className="group relative overflow-hidden rounded-lg shadow-lg mb-2">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image
                                            src={game.image}
                                            alt={game.title}
                                            // layout="fill"
                                            objectFit="cover"
                                            width={500}
                                            height={300}
                                            className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 h-56"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-white font-bold">{game.title}</h3>
                                <p className="text-gray-400 text-sm">{game.category}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400">★</span>
                                    <span className="text-white ml-1">4.8</span>
                                    <span className="text-pink-500 ml-auto">↓ 2.3M</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/browse">
                            <p className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
                                Discover Popular
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <PopularGames /> */}
            {/* ***** Most Popular End ***** */}

            {/* ***** Gaming Library Start ***** */}
            <div className="container mx-auto mt-16 p-8 bg-gray-900 rounded-2xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Your Gaming <span className="text-pink-500">Library</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gamesLibrary.map((game, index) => (
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

                <div className="mt-8 text-center">
                    <Link href="/browse">
                        <p className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
                            View Your Library
                        </p>
                    </Link>
                </div>
            </div>
            {/* <GamingLibrary /> */}
            {/* ***** Gaming Library End ***** */}
        </div>
    );
};

export default Home;
