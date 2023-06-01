-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fkRol" INTEGER NOT NULL,
    "name" TEXT,
    "nombre2" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" SERIAL NOT NULL,
    "fkUsuario" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fkRol_fkey" FOREIGN KEY ("fkRol") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_fkUsuario_fkey" FOREIGN KEY ("fkUsuario") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
