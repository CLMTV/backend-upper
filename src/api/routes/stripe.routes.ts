import express from 'express';
import {paymentIntentBasic} from "../controllers/stripe.controller";
import {paymentIntentPremium} from "../controllers/stripe.controller";
import {paymentIntentVIP} from "../controllers/stripe.controller";

// Variables
const router = express.Router();

// Create a new message reaction
router.get('/basic' , paymentIntentBasic)
router.get('/premium' , paymentIntentPremium)
router.get('/vip' , paymentIntentVIP)

export default router;
