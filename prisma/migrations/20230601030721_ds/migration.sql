/*
  Warnings:

  - You are about to drop the column `salidas` on the `Entradas` table. All the data in the column will be lost.
  - You are about to drop the `_EntradasToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EntradasToUser" DROP CONSTRAINT "_EntradasToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EntradasToUser" DROP CONSTRAINT "_EntradasToUser_B_fkey";

-- AlterTable
ALTER TABLE "Entradas" DROP COLUMN "salidas";

-- DropTable
DROP TABLE "_EntradasToUser";

-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "fkUsuario" TEXT NOT NULL,
    "fkEntradas" INTEGER NOT NULL,
    "fkSalidas" INTEGER NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salidas" (
    "id" SERIAL NOT NULL,
    "fkMaterial" INTEGER NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "Salidas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkUsuario_fkey" FOREIGN KEY ("fkUsuario") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkEntradas_fkey" FOREIGN KEY ("fkEntradas") REFERENCES "Entradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkSalidas_fkey" FOREIGN KEY ("fkSalidas") REFERENCES "Salidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salidas" ADD CONSTRAINT "Salidas_fkMaterial_fkey" FOREIGN KEY ("fkMaterial") REFERENCES "Materiales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
