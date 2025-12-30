import {z} from "zod";

export const MovieSchema = z.object({
        title: z.string().min(1,
            "Title is required"
        ),
        describtion: z.string().min(1,
            "Description is required"
        ),
        duration: z.string(),
        genre: z.array(z.string()).nonempty("At least one genre is required"),
        releaseDate: z.string().transform((val) => new Date(val)),
        language: z.array(z.string()).nonempty("At least one language is required"),
        certification: z.string(),
        posterUrl: z.string().url("Invalid URL format"),
        rating: z.number().min(0).max(10),
        votes: z.number().min(0),
        formats: z.array(z.string()).default(["2D"]),

    });

export type MovieInput = z.infer<typeof MovieSchema>;
