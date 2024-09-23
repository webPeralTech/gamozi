// Banner.js (Next.js Component)
import Link from 'next/link';

const Banner = () => {
    return (
        <div
            className="container mx-auto h-96 flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/4428563/pexels-photo-4428563.jpeg')" }}
        >
            <div className=" text-center text-white">
                <h6 className="text-3xl font-bold">Welcome To Cyborg</h6>
                <h4 className="text-6xl font-bold mt-2">
                    <em className="text-pink-600">Browse</em> Our Popular Games Here
                </h4>
                <div className="mt-4">
                    <Link href="/browse">
                        <p className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg w-36">
                            Browse Now
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
