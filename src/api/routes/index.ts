import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from "./categories.routes"
import sectionRoutes from "./forumSection.routes"
import topicRoutes from "./forumTopic.routes"
import infosBulleRoutes from "./infosBulle.routes"
const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes)
router.use('/section', sectionRoutes)
router.use('/topic', topicRoutes)
router.use('/infosBulle', infosBulleRoutes)

export default router;
