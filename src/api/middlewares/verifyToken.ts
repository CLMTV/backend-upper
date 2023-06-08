import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, 'secretkey', async (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            // @ts-ignore
                            id: authData?.userId as any
                        }
                    })
                    if (!user) {
                        res.sendStatus(403);
                    } else {
                        // @ts-ignore
                        req.authData = authData;
                        next();
                    }

                } catch (err) {
                    res.sendStatus(403);

                }

            }
        });
    } else {
        res.sendStatus(403);
    }
};

export default verifyToken;
