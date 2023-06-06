import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from "./categories.routes"
import sectionRoutes from "./forumSection.routes"
import topicRoutes from "./forumTopic.routes"
import topicReactionRoutes from "./topicReaction.routes";
import messageRoutes from "./forumMessage.routes"
import messageReactionRoutes from "./messageReaction.routes";
import infosBulleRoutes from "./infosBulle.routes"
import coursesRoutes from './course.routes'
import lessonRoutes from './lesson.routes'
import bagdeRoutes from './badge.routes'
const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes)
router.use('/section', sectionRoutes)
router.use('/topic', topicRoutes)
router.use('/topicReaction', topicReactionRoutes)
router.use('/message', messageRoutes)
router.use('/messageReaction', messageReactionRoutes)
router.use('/infosBulle', infosBulleRoutes)
router.use('/courses', coursesRoutes);
router.use('/lessons', lessonRoutes);
router.use('/badge', bagdeRoutes);

export default router;
