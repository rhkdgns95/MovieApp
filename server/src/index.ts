import { Options } from "graphql-yoga";
import app from "./app";

const PLAY_GROUND: string = "/myPlayground";
const GRAPHQL_ENDPOINT: string = "/myGraphql";
const PORT: number = 4000;

const appOptions: Options = {
    playground: PLAY_GROUND,
    endpoint: GRAPHQL_ENDPOINT,
    port: PORT
};

const handleConn = () => console.log(`Movie GraphQLServer is Running on ${PORT}`);

app.start(appOptions, handleConn);