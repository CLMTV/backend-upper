import express from 'express';
import {paymentIntentPremium} from "../controllers/stripe.controller";
import {paymentIntentVIP} from "../controllers/stripe.controller";

// Variables
const router = express.Router();

// Create a new message reaction
router.get('/premium' , paymentIntentPremium)
router.get('/vip' , paymentIntentVIP)

export default router;
