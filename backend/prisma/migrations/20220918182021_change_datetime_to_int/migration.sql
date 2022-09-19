/*
  Warnings:

  - Changed the type of `hourStart` on the `ads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `hourEnd` on the `ads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "hourStart",
ADD COLUMN     "hourStart" INTEGER NOT NULL,
DROP COLUMN "hourEnd",
ADD COLUMN     "hourEnd" INTEGER NOT NULL;
