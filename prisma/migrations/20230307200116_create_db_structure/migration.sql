-- CreateTable
CREATE TABLE "diaries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "family_members" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "diary_id" TEXT NOT NULL,
    CONSTRAINT "family_members_diary_id_fkey" FOREIGN KEY ("diary_id") REFERENCES "diaries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "weightInGrams" INTEGER NOT NULL,
    "bipedHeightInCentimeters" INTEGER NOT NULL,
    "quadrupedHeightInCentimeters" INTEGER NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "diary_id" TEXT NOT NULL,
    CONSTRAINT "pets_diary_id_fkey" FOREIGN KEY ("diary_id") REFERENCES "diaries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "family_members_email_key" ON "family_members"("email");
