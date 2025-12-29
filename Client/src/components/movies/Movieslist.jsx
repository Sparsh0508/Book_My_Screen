import React from "react";
import { allMovies, languages } from "../../utils/constants";
import MovieCard from "./MovieCard";

const Movielist = () => {
    return (
        <div className="w-full md:w-3/4 p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                {
                    languages.map((language, index) => (
                        <button 
                            key={index} 
                            className="bg-white border border-gray-200 text-[#f74362] rounded-[24px] px-3 py-1 text-sm hover:bg-gray-300 hover:text-[#f74362] transition cursor-pointer"
                        >
                            {language}
                        </button>
                    ))
                }
            </div>

            <div className="flex justify-between items-center px-6 py-6 bg-white ">
                <h3 className="font-semibold text-xl">Coming Soon</h3>
                <a href="#" className="text-[#f74362] hover:underline">Explore Upcoming Movies</a>
            </div>

            <div className="flex flex-wrap gap-6">
                {/* Movie Card  */}
                {
                    allMovies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};

export default Movielist;