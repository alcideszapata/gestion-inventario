-- CreateTable
CREATE TABLE "Materiales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_creacion" TEXT NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Materiales_pkey" PRIMARY KEY ("id")
);
