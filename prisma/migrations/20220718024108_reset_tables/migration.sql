/*
  Warnings:

  - You are about to drop the `Casa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teste` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `title` on table `secureNotes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contentNote` on table `secureNotes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "secureNotes" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "contentNote" SET NOT NULL;

-- DropTable
DROP TABLE "Casa";

-- DropTable
DROP TABLE "teste";
