import React from "react";
import { languages } from "../../../utils/constants";

const MovieFilter = () => {
    return (
        <div className="w-full md:w-1/4 p-4 space-y-6">
            <h2 className="text-2xl font-semibold">Filters</h2>

            {/* Languages  */}
            <div className="bg-white p-4 rounded-md">
                <div className="flex items-center mb-2 justify-between">
                    <span className="font-medium">Languages</span>
                    <button className="text-[#f74362] cursor-pointer">Clear</button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        languages.map((language, index) => (
                            <button 
                                key={index} 
                                className="border border-gray-200 text-[#f74362] rounded px-3 py-1 text-sm hover:bg-[#f74362] hover:text-white transition cursor-pointer"
                            >
                                {language}
                            </button>
                        ))  
                    }
                </div>
            </div>
            {/* Similiar blocks for genere and format */}
            <div className="bg-white p-4 rounded-md mt-4">
                <div className="flex items-center mb-2 justify-between">
                    <span className="font-medium">Genre</span>
                    <button className="text-[#f74362] cursor-pointer">Clear</button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md mt-4">
                <div className="flex items-center mb-2 justify-between">
                    <span className="font-medium">Format</span>
                    <button className="text-[#f74362] cursor-pointer">Clear</button>
                </div>
            </div>

            <button className="w-full border cursor-pointer border-[#f74362] text-[#f74362]  py-1 rounded mt-6 hover:bg-[#f74362] transition hover:text-white">
                Browse By Cinemas
            </button>
        </div>
    );
};

export default MovieFilter;