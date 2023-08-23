/*
  Warnings:

  - Added the required column `bairro` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ddd` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gia` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ibge` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localidade` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logradouro` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siafi` to the `Cep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Cep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cep` ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(191) NOT NULL,
    ADD COLUMN `ddd` VARCHAR(191) NOT NULL,
    ADD COLUMN `gia` VARCHAR(191) NOT NULL,
    ADD COLUMN `ibge` VARCHAR(191) NOT NULL,
    ADD COLUMN `localidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `logradouro` VARCHAR(191) NOT NULL,
    ADD COLUMN `siafi` VARCHAR(191) NOT NULL,
    ADD COLUMN `uf` VARCHAR(191) NOT NULL;
