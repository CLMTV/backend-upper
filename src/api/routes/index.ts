import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from "./categories.routes"
const router = express.Router();

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes)

export default router;
