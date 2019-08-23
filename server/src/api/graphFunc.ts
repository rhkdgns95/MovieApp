import axios from "axios";

const DETAILS_URL = "https://yts.lt/api/v2/movie_details.json?movie_id=";
const URL = "https://yts.lt/api/v2/list_movies.json?";

export const GetMovies = async () => {
    const limit = 10;
    const url = `${URL}limit=${limit}&sort_by=rating`;
    const result = await axios(url);
    const { data: { status, data: { movies } } } = result;
    if(status === "ok") {
        return movies.map(movie => movie);
    }
};

export const GetMovie = async (_, { movieId }) => {
    const url = `${DETAILS_URL}${movieId}`;
    
    const result = await axios(url);
    const { data: {status, data: {movie}} } = result;
    console.log(movie.title);
    if(status === "ok") {
        return movie;
    }
};