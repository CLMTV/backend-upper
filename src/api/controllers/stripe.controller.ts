import {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

const paymentIntentPremium = async (req: Request, res: Response) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1300,
        currency: 'eur',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.json({client_secret: intent.client_secret});
};
const paymentIntentVIP = async (req: Request, res: Response) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1700,
        currency: 'eur',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.json({client_secret: intent.client_secret});
};

export {paymentIntentPremium, paymentIntentVIP}