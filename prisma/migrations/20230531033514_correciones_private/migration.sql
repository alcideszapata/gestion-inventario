/*
  Warnings:

  - You are about to drop the column `fkRol` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Permisos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolesXPermisos` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Enum_RoleName" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "RolesXPermisos" DROP CONSTRAINT "RolesXPermisos_fk_permiso_fkey";

-- DropForeignKey
ALTER TABLE "RolesXPermisos" DROP CONSTRAINT "RolesXPermisos_fk_rol_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fkRol_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fkRol",
ADD COLUMN     "roleId" TEXT;

-- DropTable
DROP TABLE "Permisos";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "RolesXPermisos";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" "Enum_RoleName" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
