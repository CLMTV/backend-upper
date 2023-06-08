-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_archived" BOOLEAN NOT NULL DEFAULT false,
    "points_forums" INTEGER NOT NULL DEFAULT 0,
    "points_courses" INTEGER NOT NULL DEFAULT 0,
    "tiktok_token" TEXT,
    "tiktok_username" TEXT,
    "roleId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ban" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_end" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Ban_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "id_instrument" INTEGER NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "hashtag" VARCHAR(255) NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Results_snapshot" (
    "id" SERIAL NOT NULL,
    "tiktok_username" VARCHAR(255) NOT NULL,
    "tiktok_video" VARCHAR(255) NOT NULL,
    "tiktok_likes" INTEGER NOT NULL,
    "id_challenge" INTEGER NOT NULL,

    CONSTRAINT "Results_snapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instrument" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "Instrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "like_count" INTEGER NOT NULL DEFAULT 0,
    "flag_count" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    "id_section" INTEGER NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic_reaction" (
    "is_liked" BOOLEAN NOT NULL DEFAULT false,
    "is_flagged" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Topic_reaction_pkey" PRIMARY KEY ("userId","topicId")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "like_count" INTEGER NOT NULL DEFAULT 0,
    "flag_count" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message_reaction" (
    "is_liked" BOOLEAN NOT NULL DEFAULT false,
    "is_flagged" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "messageId" INTEGER NOT NULL,

    CONSTRAINT "Message_reaction_pkey" PRIMARY KEY ("userId","messageId")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "order" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "file" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "link" VARCHAR(255) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timestamp" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "videoId" INTEGER NOT NULL,

    CONSTRAINT "Timestamp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Badge" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "points" INTEGER NOT NULL,
    "display_img" TEXT NOT NULL,

    CONSTRAINT "Badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("userId","courseId","lessonId")
);

-- CreateTable
CREATE TABLE "User_course" (
    "completion_status" INTEGER NOT NULL DEFAULT 0,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "User_course_pkey" PRIMARY KEY ("userId","courseId")
);

-- CreateTable
CREATE TABLE "User_lesson" (
    "completion_status" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "User_lesson_pkey" PRIMARY KEY ("userId","lessonId")
);

-- CreateTable
CREATE TABLE "Infos_bulle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "icon" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Infos_bulle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChallengeToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_InstrumentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_LessonToMedia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BadgeToCourse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_tiktok_token_key" ON "User"("tiktok_token");

-- CreateIndex
CREATE UNIQUE INDEX "User_tiktok_username_key" ON "User"("tiktok_username");

-- CreateIndex
CREATE UNIQUE INDEX "_ChallengeToUser_AB_unique" ON "_ChallengeToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChallengeToUser_B_index" ON "_ChallengeToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InstrumentToUser_AB_unique" ON "_InstrumentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_InstrumentToUser_B_index" ON "_InstrumentToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LessonToMedia_AB_unique" ON "_LessonToMedia"("A", "B");

-- CreateIndex
CREATE INDEX "_LessonToMedia_B_index" ON "_LessonToMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BadgeToCourse_AB_unique" ON "_BadgeToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_BadgeToCourse_B_index" ON "_BadgeToCourse"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ban" ADD CONSTRAINT "Ban_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Results_snapshot" ADD CONSTRAINT "Results_snapshot_id_challenge_fkey" FOREIGN KEY ("id_challenge") REFERENCES "Challenge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_id_section_fkey" FOREIGN KEY ("id_section") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic_reaction" ADD CONSTRAINT "Topic_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic_reaction" ADD CONSTRAINT "Topic_reaction_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message_reaction" ADD CONSTRAINT "Message_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message_reaction" ADD CONSTRAINT "Message_reaction_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timestamp" ADD CONSTRAINT "Timestamp_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_course" ADD CONSTRAINT "User_course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_course" ADD CONSTRAINT "User_course_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_lesson" ADD CONSTRAINT "User_lesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_lesson" ADD CONSTRAINT "User_lesson_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeToUser" ADD CONSTRAINT "_ChallengeToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeToUser" ADD CONSTRAINT "_ChallengeToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InstrumentToUser" ADD CONSTRAINT "_InstrumentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InstrumentToUser" ADD CONSTRAINT "_InstrumentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToMedia" ADD CONSTRAINT "_LessonToMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToMedia" ADD CONSTRAINT "_LessonToMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCourse" ADD CONSTRAINT "_BadgeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "Badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BadgeToCourse" ADD CONSTRAINT "_BadgeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
