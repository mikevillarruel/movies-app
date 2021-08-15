import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f27f2aa47421a737b6e0e59c52c0fd89',
        language: 'es-ES',
    }
})

export default movieDB;