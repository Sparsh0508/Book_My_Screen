export interface IMovie {
    _id?: string;
    title: string;
    description: string;
    duration: string; // in minutes
    genre: string[];
    releaseDate: Date;
    language: string[];
    certification: string; 
    posterUrl: string;
    rating: number; // average rating
    votes: number; // number of votes
    formats: string[]; // e.g., ["2D", "3D", "IMAX"]
}