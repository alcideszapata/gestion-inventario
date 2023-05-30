import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';
import {typeDefs} from "../../grahpql/server/types";
import {resolvers} from "../../grahpql/server/resolver";
import prisma from "../../config/prisma";
import {NextApiRequest, NextApiResponse} from "next";
import {Context} from "../../types";


const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export default startServerAndCreateNextHandler<NextApiRequest, Context>(
    server, {
    context: async(req: NextApiRequest, res: NextApiResponse) => ({
        req,
        res,
        db: prisma,
    }),
});
