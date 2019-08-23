import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
    query getMovies {
        GetMovies {
            title
            id
            genres
            medium_cover_image
            summary
            rating
        }
    }
`;