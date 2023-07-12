import {Request, Response} from 'express';

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

const paymentIntentBasic = async (req: Request, res: Response) => {
    try {
        const intent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'eur',
        });

        res.json({ client_secret: intent.client_secret });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
};
const paymentIntentPremium = async (req: any, res: any) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'eur',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.json({client_secret: intent.client_secret});
};
const paymentIntentVIP = async (req: any, res: any) => {
    const intent = await stripe.paymentIntents.create({
        amount: 1200,
        currency: 'eur',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.json({client_secret: intent.client_secret});
};

export {paymentIntentBasic, paymentIntentPremium, paymentIntentVIP}