import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient, Roles, User} from "@prisma/client";

export interface Context {
    db: PrismaClient,
    req: NextApiRequest,
    res: NextApiResponse
}
interface ResolverFunction {
[key: string]: (parent: any, args: any, context: Context) => Promise<any>;
}

export interface ExtendedUser extends User {
    role: Role;
  }
  
export interface Resolver {
    Query: ResolverFunction;
    Mutation: ResolverFunction;
    [key: string]: ResolverFunction;
}
