/*
  Warnings:

  - You are about to drop the `CATEGORIA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ENDERECO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MODELO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NUM_SERIE_MODELO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PAGAMENTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PEDIDO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PEDIDO_PRODUTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PRODUTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SUBCATEGORIA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SUBCATEGORIA_PRODUTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `USUARIO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ENDERECO` DROP FOREIGN KEY `ENDERECO_cpf_fkey`;

-- DropForeignKey
ALTER TABLE `NUM_SERIE_MODELO` DROP FOREIGN KEY `NUM_SERIE_MODELO_id_modelo_fkey`;

-- DropForeignKey
ALTER TABLE `PEDIDO` DROP FOREIGN KEY `PEDIDO_cpf_fkey`;

-- DropForeignKey
ALTER TABLE `PEDIDO` DROP FOREIGN KEY `PEDIDO_id_endereco_fkey`;

-- DropForeignKey
ALTER TABLE `PEDIDO` DROP FOREIGN KEY `PEDIDO_id_pagamento_fkey`;

-- DropForeignKey
ALTER TABLE `PEDIDO_PRODUTO` DROP FOREIGN KEY `PEDIDO_PRODUTO_id_pedido_fkey`;

-- DropForeignKey
ALTER TABLE `PEDIDO_PRODUTO` DROP FOREIGN KEY `PEDIDO_PRODUTO_id_produto_fkey`;

-- DropForeignKey
ALTER TABLE `PRODUTO` DROP FOREIGN KEY `PRODUTO_id_categoria_fkey`;

-- DropForeignKey
ALTER TABLE `PRODUTO` DROP FOREIGN KEY `PRODUTO_id_modelo_fkey`;

-- DropForeignKey
ALTER TABLE `SUBCATEGORIA_PRODUTO` DROP FOREIGN KEY `SUBCATEGORIA_PRODUTO_id_produto_fkey`;

-- DropForeignKey
ALTER TABLE `SUBCATEGORIA_PRODUTO` DROP FOREIGN KEY `SUBCATEGORIA_PRODUTO_id_subcategoria_fkey`;

-- DropTable
DROP TABLE `CATEGORIA`;

-- DropTable
DROP TABLE `ENDERECO`;

-- DropTable
DROP TABLE `MODELO`;

-- DropTable
DROP TABLE `NUM_SERIE_MODELO`;

-- DropTable
DROP TABLE `PAGAMENTO`;

-- DropTable
DROP TABLE `PEDIDO`;

-- DropTable
DROP TABLE `PEDIDO_PRODUTO`;

-- DropTable
DROP TABLE `PRODUTO`;

-- DropTable
DROP TABLE `SUBCATEGORIA`;

-- DropTable
DROP TABLE `SUBCATEGORIA_PRODUTO`;

-- DropTable
DROP TABLE `USUARIO`;

-- CreateTable
CREATE TABLE `Usuario` (
    `cpf` VARCHAR(20) NOT NULL,
    `ts_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ts_alteracao` DATETIME(3) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `celular` VARCHAR(20) NOT NULL,
    `data_nasc` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(100) NOT NULL,
    `numero` INTEGER NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `cep` INTEGER NOT NULL,
    `cpf` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Pagamento_tipo_key`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modelo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Modelo_tipo_key`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Num_serie_modelo` (
    `numero_serie` INTEGER NOT NULL,
    `id_modelo` INTEGER NOT NULL,

    PRIMARY KEY (`numero_serie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Categoria_tipo_key`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Subcategoria_tipo_key`(`tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ts_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ts_alteracao` DATETIME(3) NOT NULL,
    `fabricante` VARCHAR(150) NOT NULL,
    `preco_base` INTEGER NOT NULL,
    `estoque` INTEGER NOT NULL,
    `id_modelo` INTEGER NOT NULL,
    `id_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria_produto` (
    `id_produto` INTEGER NOT NULL,
    `id_subcategoria` INTEGER NOT NULL,

    PRIMARY KEY (`id_produto`, `id_subcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desconto` INTEGER NOT NULL,
    `total` INTEGER NOT NULL,
    `ts_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cpf` VARCHAR(20) NULL,
    `id_endereco` INTEGER NULL,
    `id_pagamento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido_produto` (
    `quantidade` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `id_pedido` INTEGER NOT NULL,

    PRIMARY KEY (`id_produto`, `id_pedido`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cpf_fkey` FOREIGN KEY (`cpf`) REFERENCES `Usuario`(`cpf`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Num_serie_modelo` ADD CONSTRAINT `Num_serie_modelo_id_modelo_fkey` FOREIGN KEY (`id_modelo`) REFERENCES `Modelo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_id_modelo_fkey` FOREIGN KEY (`id_modelo`) REFERENCES `Modelo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria_produto` ADD CONSTRAINT `Subcategoria_produto_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria_produto` ADD CONSTRAINT `Subcategoria_produto_id_subcategoria_fkey` FOREIGN KEY (`id_subcategoria`) REFERENCES `Subcategoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_cpf_fkey` FOREIGN KEY (`cpf`) REFERENCES `Usuario`(`cpf`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Endereco`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_pagamento_fkey` FOREIGN KEY (`id_pagamento`) REFERENCES `Pagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido_produto` ADD CONSTRAINT `Pedido_produto_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido_produto` ADD CONSTRAINT `Pedido_produto_id_pedido_fkey` FOREIGN KEY (`id_pedido`) REFERENCES `Pedido`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
