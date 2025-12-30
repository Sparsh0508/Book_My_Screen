// 1. Create MovieModel  

import { IMovie } from "./movie.interface";
import MovieModel from "./movie.model";

export const createMovie = async (movie : IMovie) => {
    const newMovie = await MovieModel.create(movie);
    return newMovie;
}

// 2. GetAllMovies

export const getAllMovies = async () => {
    return await MovieModel.find().sort({releaseDate:-1});
}

// 3. getMovieById
export const getMovieById = async (id: string) => {
    return await MovieModel.findById(id);
}

// 4. getTopMovieByVotes
export const getTopMovieByVotes = async (limit : number) => {
    return await MovieModel.find().sort({votes:-1}).limit(limit);
}