import { useEffect, useState } from "react";
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    const getMovies = async () => {
        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setNowPlaying(response.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        /**
         * Now Playing
         */
        getMovies();
    }, [])

    return {
        nowPlaying,
        isLoading,
    }

}
