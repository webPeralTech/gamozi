import Image from 'next/image';
import Link from 'next/link';

const PopularGames = () => {
    const games = [
        { title: "Fortnite", category: "Sandbox", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { title: "PubG", category: "Battle S", image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg" },
        { title: "Dota2", category: "Steam-X", image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg" },
        { title: "CS-GO", category: "Legendary", image: "https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg" },
        { title: "Mini Craft", category: "Legendary", image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg" },
        { title: "Eagles Fly", category: "Matrix Games", image: "https://images.pexels.com/photos/234567/pexels-photo-234567.jpeg" },
        { title: "Warface", category: "Max 3D", image: "https://images.pexels.com/photos/345678/pexels-photo-345678.jpeg" },
        { title: "Warcraft", category: "Legend", image: "https://images.pexels.com/photos/456789/pexels-photo-456789.jpeg" },
    ];

    return (
        <div className="bg-gray-900 p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">
                    Most Popular <span className="text-pink-500">Right Now</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {games.map((game, idx) => (
                        <div key={idx} className="bg-gray-800 rounded-lg p-4 flex flex-col">
                            <div className="aspect-w-16 aspect-h-9 mb-2">
                                {/* <Image
                                    src={game.image}
                                    alt={game.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                /> */}
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
    );
};

export default PopularGames;