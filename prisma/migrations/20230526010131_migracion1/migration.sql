/*
  Warnings:

  - You are about to drop the `entradas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `materiales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `permisos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles_x_permisos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salidas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "entradas" DROP CONSTRAINT "entradas_fk_material_fkey";

-- DropForeignKey
ALTER TABLE "inventario" DROP CONSTRAINT "inventario_fk_entradas_fkey";

-- DropForeignKey
ALTER TABLE "inventario" DROP CONSTRAINT "inventario_fk_salidas_fkey";

-- DropForeignKey
ALTER TABLE "inventario" DROP CONSTRAINT "inventario_fk_usuario_fkey";

-- DropForeignKey
ALTER TABLE "roles_x_permisos" DROP CONSTRAINT "roles_x_permisos_fk_permiso_fkey";

-- DropForeignKey
ALTER TABLE "roles_x_permisos" DROP CONSTRAINT "roles_x_permisos_fk_rol_fkey";

-- DropForeignKey
ALTER TABLE "salidas" DROP CONSTRAINT "salidas_fk_material_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_fk_rol_fkey";

-- DropTable
DROP TABLE "entradas";

-- DropTable
DROP TABLE "inventario";

-- DropTable
DROP TABLE "materiales";

-- DropTable
DROP TABLE "permisos";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "roles_x_permisos";

-- DropTable
DROP TABLE "salidas";

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "fkRol" INTEGER NOT NULL,
    "nombre1" TEXT NOT NULL,
    "nombre2" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "fkUsuario" INTEGER NOT NULL,
    "fkEntradas" INTEGER NOT NULL,
    "fkSalidas" INTEGER NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materiales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Materiales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permisos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesXPermisos" (
    "id" SERIAL NOT NULL,
    "fk_rol" INTEGER NOT NULL,
    "fk_permiso" INTEGER NOT NULL,

    CONSTRAINT "RolesXPermisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entradas" (
    "id" SERIAL NOT NULL,
    "fkMaterial" INTEGER NOT NULL,
    "fechaMovimiento" TIMESTAMP(3) NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "Entradas_pkey" PRIMARY KEY ("id")
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
ALTER TABLE "Account" ADD CONSTRAINT "Account_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_fkRol_fkey" FOREIGN KEY ("fkRol") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkUsuario_fkey" FOREIGN KEY ("fkUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkEntradas_fkey" FOREIGN KEY ("fkEntradas") REFERENCES "Entradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkSalidas_fkey" FOREIGN KEY ("fkSalidas") REFERENCES "Salidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesXPermisos" ADD CONSTRAINT "RolesXPermisos_fk_rol_fkey" FOREIGN KEY ("fk_rol") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesXPermisos" ADD CONSTRAINT "RolesXPermisos_fk_permiso_fkey" FOREIGN KEY ("fk_permiso") REFERENCES "Permisos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entradas" ADD CONSTRAINT "Entradas_fkMaterial_fkey" FOREIGN KEY ("fkMaterial") REFERENCES "Materiales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salidas" ADD CONSTRAINT "Salidas_fkMaterial_fkey" FOREIGN KEY ("fkMaterial") REFERENCES "Materiales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
