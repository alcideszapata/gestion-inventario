import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';
import {typeDefs} from "../../grahpql/server/types";
import {resolvers} from "../../grahpql/server/resolver";


const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export default startServerAndCreateNextHandler(server);
