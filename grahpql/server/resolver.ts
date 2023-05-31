import { Resolver } from "../../types";

const resolvers: Resolver = {
    User: {
        role: async (parent, args, context) =>
            await context.db.roles.findUnique({
                where: {
                    id: parent.roleId,
                },
            }),
    },
    Query: {
        materiales: async (parent, args, context) => {
            const { db } = context;
            const materiales = await db.materiales.findMany();
            return materiales;
        },
        users: async (parent, args, context) => {
            const { db } = context;

            const users = await db.user.findMany();
            return users;
        },
        user: async (parent, args, context) => {
            const { db } = context;
            const user = await db.user.findFirst({
                where: {
                    email: args.email,
                },
            });
            return user;
        },
        material: async (parent, args, context) => {
            const { db } = context;
            const material = await db.materiales.findFirst({
                where: {
                    id: {
                        equals: args.id,
                    },
                },
            });
            return material;
        },
    },
    Mutation: {
        createMaterial: async (parent, args, context) => {
            const { nombre, fechaCreacion, saldo } = args;
            const { db } = context;

            const newMaterial = await db.materiales.create({
                data: {
                    nombre: args.nombre,
                    fechaCreacion: new Date(args.fechaCreacion),
                    saldo: args.saldo,
                },
            });

            return newMaterial;
        },
    },
};

export { resolvers };
