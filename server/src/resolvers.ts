import { GetMovies, GetMovie } from "./api/graphFunc";
import { Resolvers } from "./types/types";

const resolvers: Resolvers = {
    Query: {
        GetMovies,
        GetMovie
    }
};

export default resolvers;