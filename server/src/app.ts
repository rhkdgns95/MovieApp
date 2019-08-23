import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

class App {
    public app: GraphQLServer;
    constructor() {
        this.app = new GraphQLServer({
            typeDefs: "schema/movie.graphql",
            resolvers
        });
    }
}

export default new App().app;