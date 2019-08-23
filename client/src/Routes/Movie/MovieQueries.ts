import { gql } from "apollo-boost";

export const GET_MOVIE = gql`
    query getMovie($movieId: Int!) {
        GetMovie(movieId: $movieId) {
            id
            title
            genres
            description_intro
            rating
            large_cover_image
        }
    }
`;