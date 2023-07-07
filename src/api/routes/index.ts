import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from './categories.routes';
import sectionRoutes from './forumSection.routes';
import topicRoutes from './topic.routes';
import topicReactionRoutes from './topicReaction.routes';
import messageRoutes from './message.routes';
import messageReactionRoutes from './messageReaction.routes';
import infoRoutes from './info.routes';
import coursesRoutes from './course.routes';
import lessonRoutes from './lesson.routes';
import bagdeRoutes from './badge.routes';
import instrumentsRoutes from './instrument.routes';
import roleRoutes from './role.routes';
import videoRoutes from './video.routes';
import timestampRoutes from './timestamp.routes'
import planRoutes from './plan.routes'
import challengeRoute from './challenge.route'
import noteRoutes from './note.route'
import banRoutes from "./ban.routes"
import mediaRoutes from "./media.routes"
import resultSnapshotRoutes from "./resultSnapshot.routes"
const app = express();

const router = express.Router();

router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/section', sectionRoutes);
router.use('/topic', topicRoutes);
router.use('/topicReaction', topicReactionRoutes);
router.use('/message', messageRoutes);
router.use('/messageReaction', messageReactionRoutes);
router.use('/info', infoRoutes);
router.use('/course', coursesRoutes);
router.use('/lesson', lessonRoutes);
router.use('/badge', bagdeRoutes);
router.use('/instrument', instrumentsRoutes);
router.use('/role', roleRoutes);
router.use('/video', videoRoutes);
router.use('/timestamp', timestampRoutes);
router.use('/plan', planRoutes);
router.use('/challenge', challengeRoute);
router.use('/note', noteRoutes);
router.use('/ban', banRoutes);
router.use('/media', mediaRoutes);
router.use('/resultSnapshot', resultSnapshotRoutes);

export default router;
