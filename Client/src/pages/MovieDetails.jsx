import React from "react";
import m4 from "../assets/m4.avif";
import TheaterTimings from "../components/movies/TheaterTimings";

const MovieDetails = () => { 
    
    const movie = {
            id: 4,
            title: "F1: The Movie",
            genre: ["Action","Drama", "Sports"],
            rating: 9.5,
            votes: "6.8K",
            img: m4,
            languages: ["English", "Hindi", "Tamil", "Telugu"],
            format: ["2D", "3D", "IMAX 3D", "4DX 3D"],
            certifications: "UA16+",
            duration: "2h 10m",
            description: "F1: The Movie is a thrilling cinematic experience that takes you behind the scenes of the high-octane world of Formula 1 racing. Directed by acclaimed filmmaker Tom Harper, the movie delves into the lives of the drivers, their teams, and the intense competition that defines the sport. With breathtaking visuals, heart-pounding action sequences, and an emotional narrative, F1: The Movie captures the essence of speed, precision, and the relentless pursuit of victory on the world's most challenging circuits. Whether you're a motorsport enthusiast or a casual viewer, this film promises to deliver an unforgettable ride.",
    };

    return (
        <>
         {/* Movie Details Section    */}
        <div className="relative text-white font-sans px-4 py-10"
            style={{
                backgroundImage: `url(${movie.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
         >
            {/* overlay for darkness */}
            <div className="absolute inset-0 bg-black opacity-70">

            </div>
            {/* Actual Content  */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Poster */}
                <div>
                    <img 
                        src={movie.img} 
                        alt={movie.title} 
                        className="rounded-lg w-52 shadow-xl"
                    />
                </div>
                {/* Details  */}
                <div className="flex flex-col justify-start flex-1">
                    <h1 className="text-4xl mb-4 font-bold">{movie.title}</h1>
                    
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                            <span className="text-pink-500 font-bold">★ {movie.rating}</span>
                            <span className="text-gray-300">{movie.votes} Votes</span>
                            <button className="cursor-pointer bg-[#2f2f2f] px-4 py-2 rounded-md hover:bg-[#4a4a4a]">Rate Now</button>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center text-sm mb-4">
                        <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.format.join(", ")}</span>
                        <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.languages.join(", ")}</span>
                        <span className="bg-[#3a3a3a] px-3 py-1 rounded">{movie.certifications}</span>
                    </div>

                    <p className="text-sm text-gray-300 mb-4">
                        {movie.duration}  | {movie.genre.join(", ")} · {" "}
                        {movie.certifications} · {" "}
                        {movie.releaseDate}
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">About the Movie</h2>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                            {movie.description}
                        </p>
                    </div>
                </div>
            
                </div>
                {/* Share Button  */}
                <div className="absolute top-0 right-0 cursor-pointer">
                    <button className="bg-[#3a3a3a] px-4 py-2 rounded-text-sm flex items-center hover:bg-[#4a4a4a] cursor-pointer gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14" />
                        </svg>
                        Share</button>
                </div>
        </div>
            {/* Movie Experience Tags Section */}
    <div className="relative z-10 max-w-7xl mx-auto mt-10 bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg text-black">
        <div className="flex flex-wrap gap-3 items-center justify-start text-sm">

            {/* Formats */}
            {movie.format.map((item, index) => (
                <span 
                    key={index} 
                    className="px-4 py-1 bg-white/20 border border-white/30 rounded-full text-black hover:bg-white/30 cursor-pointer transition"
                >
                    {item}
                </span>
            ))}

        {/* Features similar to screenshot */}
        <div>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                Wheelchair Friendly
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                Premium Seats
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                Recliners
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                IMAX
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                PVR PXL
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                4DX
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                Laser
            </span>
            <span className="px-4 py-1 bg-white/20 border border-gray-900 rounded-full text-black hover:bg-white/30 cursor-pointer transition">
                Dolby Atmos
            </span>
        </div>

        {/* Legend Row like screenshot */}
        <div className="flex gap-6 items-center mt-5 text-xs text-gray-800 ">
            <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded"></span> Available
            </span>
            <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded"></span> Filling Fast
            </span>
            <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded"></span> Almost Full
            </span>
        </div>
        </div>

        {/* Theater Timings Section */}
        <TheaterTimings movie={movie} />
    </div>
        </>
    );
};

export default MovieDetails;    