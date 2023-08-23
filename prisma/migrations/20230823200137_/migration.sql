/*
  Warnings:

  - A unique constraint covering the columns `[cep]` on the table `Cep` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Cep_cep_key` ON `Cep`(`cep`);
