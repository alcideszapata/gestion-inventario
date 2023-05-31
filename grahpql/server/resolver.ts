import {Resolver} from "../../types";

const resolvers: Resolver = {
    Query: {
        materiales: async (parent, args, context) => {
            const { db } = context;
            const materiales = await db.materiales.findMany();
            return materiales;
        },
        usuarios: async (parent, args, context) => {
            const { db } = context;
            const usuarios = await db.user.findMany();
            return usuarios;
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
            const {nombre, fechaCreacion, saldo} = args;
            const {db} = context;

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

export {resolvers};
