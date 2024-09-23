import Image from 'next/image';
import Link from 'next/link';

const DetailsPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">

            {/* Main Content */}
            <main className="container mx-auto mt-28 px-4">
                {/* Hero Section */}
                <section className="mb-8">
                    <div className="flex space-x-4">
                        <Image src="/fortnite-poster.jpg" alt="Fortnite Poster" width={300} height={200} className="rounded-lg" />
                        <div className="relative flex-grow">
                            <Image src="/fortnite-gameplay.jpg" alt="Fortnite Gameplay" layout="fill" objectFit="cover" className="rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-500 border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="text-3xl font-bold mb-6">FORTNITE DETAILS</h1>

                {/* Game Info */}
                <section className="bg-gray-800 rounded-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-2xl font-bold">Fortnite</h2>
                            <p className="text-gray-400">Sandbox</p>
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex items-center"><span className="text-yellow-400 mr-2">★</span>4.8</div>
                            <div className="flex items-center"><span className="text-pink-500 mr-2">↓</span>2.3M</div>
                            <div className="flex items-center"><span className="text-blue-400 mr-2">⬇</span>36GB</div>
                            <div>Action</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {['/fortnite-1.jpg', '/fortnite-2.jpg', '/fortnite-3.jpg'].map((src, index) => (
                            <Image key={index} src={src} alt={`Fortnite Screenshot ${index + 1}`} width={300} height={200} className="rounded-lg" />
                        ))}
                    </div>
                </section>

                {/* Description */}
                <section className="text-gray-400 text-sm mb-8">
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span className="text-pink-500">small contribution via PayPal</span> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                </section>

                {/* Download Button */}
                <button className="w-full bg-gray-800 text-pink-500 py-4 rounded-full mb-8 hover:bg-gray-700 transition duration-300">
                    Download Fortnite Now!
                </button>

                {/* Related Games */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Other Related <span className="text-pink-500">Games</span></h2>
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((game) => (
                            <div key={game} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
                                <Image src={`/game-${game}.jpg`} alt={`Game ${game}`} width={60} height={60} className="rounded-lg" />
                                <div>
                                    <h3 className="font-bold">Dota 2</h3>
                                    <p className="text-gray-400 text-sm">Sandbox</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <div className="flex items-center justify-end"><span className="text-yellow-400 mr-1">★</span>4.8</div>
                                    <div className="text-pink-500 text-sm">2.3M</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DetailsPage;