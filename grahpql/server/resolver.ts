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
        entradas: async (parent, args, context) => {
            const { db } = context;
            const entradas = await db.entradas.findMany();
            return entradas;
        },
        inventarios: async (parent, args, context) => {
            const { db } = context;
            const inventarios = await db.inventario.findMany();
            return inventarios;
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
        createEntrada: async (parent, args, context) => {
            const { db } = context;

            const newEntrada = await db.entradas.create({
                data: {
                    cantidad: args.cantidad,
                    fechaMovimiento: new Date(args.fechaMovimiento),
                    material: {
                        connect: {
                            id: args.material,
                        }
                    }
                },
            });

            return newEntrada;
        },

    },
};

export {resolvers};
