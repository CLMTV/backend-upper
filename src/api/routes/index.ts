import express from 'express';
import userRoutes from './user.routes';
import categoriesRoutes from "./categories.routes"
import instrumentsRoutes from "./instrument.routes"
const app = express();

const router = express.Router();



router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes)
router.use('/instrument', instrumentsRoutes)

export default router;
