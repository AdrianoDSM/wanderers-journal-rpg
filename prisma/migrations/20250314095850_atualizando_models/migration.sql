/*
  Warnings:

  - Added the required column `class` to the `NPC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `NPC` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "PC" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "PC_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SessionRegister" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sessionCount" INTEGER NOT NULL,
    "lastSession" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "SessionRegister_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_NPC" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "NPC_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_NPC" ("campaignId", "description", "id", "name") SELECT "campaignId", "description", "id", "name" FROM "NPC";
DROP TABLE "NPC";
ALTER TABLE "new_NPC" RENAME TO "NPC";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
