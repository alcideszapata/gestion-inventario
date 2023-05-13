/*
  Warnings:

  - You are about to drop the `Materiales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Materiales";

-- CreateTable
CREATE TABLE "materiales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_creacion" TEXT NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "materiales_pkey" PRIMARY KEY ("id")
);
