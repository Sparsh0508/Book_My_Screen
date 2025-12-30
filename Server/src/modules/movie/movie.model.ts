import mongoose from "mongoose";
import { IMovie } from "./movie.interface";

const movieSchema = new mongoose.Schema<IMovie>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: [String], required: true },
    releaseDate: { type: Date, required: true },
    language: { type: [String], required: true },
    certification: { type: String, required: true },
    posterUrl: { type: String, required: true },
    rating:{type:Number,required:true},
    votes:{type:Number,required:true},
    formats:{type:[String],required:true}
}, { timestamps: true });

const MovieModel = mongoose.model<IMovie>("Movie", movieSchema);

export default MovieModel;

