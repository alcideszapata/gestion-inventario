/*
  Warnings:

  - You are about to drop the `Inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Salidas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `salidas` to the `Entradas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_fkEntradas_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_fkSalidas_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_fkUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Salidas" DROP CONSTRAINT "Salidas_fkMaterial_fkey";

-- AlterTable
ALTER TABLE "Entradas" ADD COLUMN     "salidas" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Inventario";

-- DropTable
DROP TABLE "Salidas";

-- CreateTable
CREATE TABLE "_EntradasToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntradasToUser_AB_unique" ON "_EntradasToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EntradasToUser_B_index" ON "_EntradasToUser"("B");

-- AddForeignKey
ALTER TABLE "_EntradasToUser" ADD CONSTRAINT "_EntradasToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Entradas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntradasToUser" ADD CONSTRAINT "_EntradasToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
