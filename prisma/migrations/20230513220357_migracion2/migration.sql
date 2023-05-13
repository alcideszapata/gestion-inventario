/*
  Warnings:

  - Changed the type of `fecha_creacion` on the `materiales` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "materiales" DROP COLUMN "fecha_creacion",
ADD COLUMN     "fecha_creacion" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "fk_rol" INTEGER NOT NULL,
    "nombre1" TEXT NOT NULL,
    "nombre2" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventario" (
    "id" SERIAL NOT NULL,
    "fk_usuario" INTEGER NOT NULL,
    "fk_entradas" INTEGER NOT NULL,
    "fk_salidas" INTEGER NOT NULL,

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permisos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_x_permisos" (
    "id" SERIAL NOT NULL,
    "fk_rol" INTEGER NOT NULL,
    "fk_permiso" INTEGER NOT NULL,

    CONSTRAINT "roles_x_permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradas" (
    "id" SERIAL NOT NULL,
    "fk_material" INTEGER NOT NULL,
    "fecha_movimiento" TIMESTAMP(3) NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "entradas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salidas" (
    "id" SERIAL NOT NULL,
    "fk_material" INTEGER NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "salidas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_fk_rol_fkey" FOREIGN KEY ("fk_rol") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_fk_usuario_fkey" FOREIGN KEY ("fk_usuario") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_fk_entradas_fkey" FOREIGN KEY ("fk_entradas") REFERENCES "entradas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_fk_salidas_fkey" FOREIGN KEY ("fk_salidas") REFERENCES "salidas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_x_permisos" ADD CONSTRAINT "roles_x_permisos_fk_rol_fkey" FOREIGN KEY ("fk_rol") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_x_permisos" ADD CONSTRAINT "roles_x_permisos_fk_permiso_fkey" FOREIGN KEY ("fk_permiso") REFERENCES "permisos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradas" ADD CONSTRAINT "entradas_fk_material_fkey" FOREIGN KEY ("fk_material") REFERENCES "materiales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salidas" ADD CONSTRAINT "salidas_fk_material_fkey" FOREIGN KEY ("fk_material") REFERENCES "materiales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
