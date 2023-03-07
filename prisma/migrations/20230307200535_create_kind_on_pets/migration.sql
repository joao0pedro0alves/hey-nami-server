/*
  Warnings:

  - Added the required column `kind` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "weightInGrams" INTEGER NOT NULL,
    "bipedHeightInCentimeters" INTEGER NOT NULL,
    "quadrupedHeightInCentimeters" INTEGER NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "diary_id" TEXT NOT NULL,
    CONSTRAINT "pets_diary_id_fkey" FOREIGN KEY ("diary_id") REFERENCES "diaries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pets" ("bipedHeightInCentimeters", "birthDate", "diary_id", "id", "name", "photoUrl", "quadrupedHeightInCentimeters", "weightInGrams") SELECT "bipedHeightInCentimeters", "birthDate", "diary_id", "id", "name", "photoUrl", "quadrupedHeightInCentimeters", "weightInGrams" FROM "pets";
DROP TABLE "pets";
ALTER TABLE "new_pets" RENAME TO "pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
