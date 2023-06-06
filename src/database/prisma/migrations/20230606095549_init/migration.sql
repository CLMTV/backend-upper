/*
  Warnings:

  - The primary key for the `Note` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Note` table. All the data in the column will be lost.
  - The primary key for the `User_message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User_message` table. All the data in the column will be lost.
  - The primary key for the `User_topic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User_topic` table. All the data in the column will be lost.
  - Added the required column `description` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `display_img` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Infos_bulle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_end` to the `Infos_bulle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_start` to the `Infos_bulle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Infos_bulle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Infos_bulle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Instrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Instrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoId` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like_count` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `signal_count` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Section` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Timestamp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Timestamp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Timestamp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like_count` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `messageId` to the `User_message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User_message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topicId` to the `User_topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User_topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "display_img" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "content" VARCHAR(255) NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Infos_bulle" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "date_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "icon" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Instrument" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "videoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "file" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "like_count" INTEGER NOT NULL,
ADD COLUMN     "signal_count" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Note" DROP CONSTRAINT "Note_pkey",
DROP COLUMN "id",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "lessonId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Note_pkey" PRIMARY KEY ("userId", "courseId", "lessonId");

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Timestamp" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" VARCHAR(50) NOT NULL,
ADD COLUMN     "value" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "like_count" INTEGER NOT NULL,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User_message" DROP CONSTRAINT "User_message_pkey",
DROP COLUMN "id",
ADD COLUMN     "is_liked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_signalled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "messageId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "User_message_pkey" PRIMARY KEY ("userId", "messageId");

-- AlterTable
ALTER TABLE "User_topic" DROP CONSTRAINT "User_topic_pkey",
DROP COLUMN "id",
ADD COLUMN     "is_liked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_signalled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "topicId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "User_topic_pkey" PRIMARY KEY ("userId", "topicId");

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "link" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_LessonToMedia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TimestampToVideo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BadgeToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LessonToMedia_AB_unique" ON "_LessonToMedia"("A", "B");

-- CreateIndex
CREATE INDEX "_LessonToMedia_B_index" ON "_LessonToMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TimestampToVideo_AB_unique" ON "_TimestampToVideo"("A", "B");

-- CreateIndex
CREATE INDEX "_TimestampToVideo_B_index" ON "_TimestampToVideo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToCourse_AB_unique" ON "_BadgeToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToCourse_B_index" ON "_BadgeToCourse"("B");

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_topic" ADD CONSTRAINT "User_topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_topic" ADD CONSTRAINT "User_topic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_message" ADD CONSTRAINT "User_message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_message" ADD CONSTRAINT "User_message_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToMedia" ADD CONSTRAINT "_LessonToMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToMedia" ADD CONSTRAINT "_LessonToMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TimestampToVideo" ADD CONSTRAINT "_TimestampToVideo_A_fkey" FOREIGN KEY ("A") REFERENCES "Timestamp"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TimestampToVideo" ADD CONSTRAINT "_TimestampToVideo_B_fkey" FOREIGN KEY ("B") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCourse" ADD CONSTRAINT "_BadgeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCourse" ADD CONSTRAINT "_BadgeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
