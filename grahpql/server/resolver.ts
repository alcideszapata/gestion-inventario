import {Prisma, PrismaClient} from ".prisma/client";

const prisma = new PrismaClient;
const resolvers = {
    Query: {
        materiales: async () => {
            const materiales = await prisma.materiales.findMany();
            return materiales;
        },
        material: async () => {
            const material = await prisma.materiales.findFirst({
                where: {
                    id: {
                        equals: 1,
                    },
                },
            });
            return material;
        },
    },
};

export {resolvers};
