// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from ".prisma/client";

const prisma = new PrismaClient();
const materialesEndpoint = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
  switch (req.method) {
    case 'GET':
      const materialesEncontrados = await prisma.materiales.findMany();
      res.status(200).json({ materialesEncontrados })
      break
    case 'POST':
      const { body } = req;
      const newMaterial = await  prisma.materiales.create({
        data: {
          nombre: body.nombre,
          fecha_creacion: body.fecha_creacion,
          saldo: body.saldo
        }
      })
      res.status(200).json({name: 'John Doe', email: 'test@test.com'})
      break
    case 'PUT':
      //res.status(200).json({name: 'John Doe', email: 'test@test.com'})
      break
    case 'DELETE':
      //res.status(200).json({name: 'John Doe', email: 'test@test.com'})
      break
    default:
      //res.status(400).json({message: 'Invalid method'})
      break
  }
}
export default materialesEndpoint;
