import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from "./categories.routes"
import coursesRoutes from './course.routes'
import lessonRoutes from './lesson.routes'
import bagdeRoutes from './badge.routes'
const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/courses', coursesRoutes);
router.use('/lessons', lessonRoutes);
router.use('/badge', bagdeRoutes);

export default router;
