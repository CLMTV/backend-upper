-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id_plan" DROP NOT NULL,
ALTER COLUMN "is_archived" DROP NOT NULL,
ALTER COLUMN "points_forums" DROP NOT NULL,
ALTER COLUMN "points_courses" DROP NOT NULL;
