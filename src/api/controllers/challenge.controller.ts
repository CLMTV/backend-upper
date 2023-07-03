import {Request, Response} from 'express';

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// GET ALL challenge
const getAllChallenge = async (req: Request, res: Response) => {
    try {
        const challenge = await prisma.challenge.findMany();
        res.status(200).json(challenge);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}


// GET challenge BY ID
const getChallengeById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const challenge = await prisma.challenge.findUnique({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(challenge);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// CREATE challenge
const createChallenge = async (req: Request, res: Response) => {
    try {
      const { name, date_start, date_end, description, hashtag, instrumentId } = req.body;
  
      // Fonction de formatage de la date pour traiter les formats "DD/MM/YY" et "DD/MM/YYYY"
      const formatDate = (dateStr: string) => {
        const parts = dateStr.split('/');
        const day = parts[0];
        const month = parts[1];
        const year = parts[2].length === 2 ? `20${parts[2]}` : parts[2];
        return `${year}-${month}-${day}`;
      };
  
      // Convertir les dates au format Date()
      const startDate = new Date(formatDate(date_start));
      const endDate = new Date(formatDate(date_end));
  
      // Créer le challenge avec l'instrument associé
      const createChallenge = await prisma.challenge.create({
        data: {
          name,
          date_start: startDate,
          date_end: endDate,
          description,
          hashtag,
          instrument: {
            connect: { id: instrumentId }
          }
        }
      });
  
      res.status(201).json(createChallenge);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
};
  
  

// UPDATE challenge
const updateChallenge = async (req: Request, res: Response) => {
    const {name, date_start, date_end, description, hashtag} = req.body || {};
    const {id} = req.params

    const formatDate = (dateString: string) => {
        const [day, month, year] = dateString.split('/');
        const formattedDate = `20${year}-${month}-${day}`;
        console.log("FORMAT",formattedDate);
        return formattedDate;
    };

    // formatage
    let date_debut = new Date(formatDate(date_start));
    let date_fin = new Date(formatDate(date_end));

    if (!id) {
        return res.status(400).json({error: 'id is required'});
    }
    try {
        const parsedId = parseInt(id, 10);
        const updatechallenge = await prisma.challenge.update({
            where: {
                id: parsedId
            },
            data: {
                name: name,
                date_start: date_debut, 
                date_end: date_fin, 
                description: description, 
                hashtag: hashtag
            }
        })
        res.status(200).json(updatechallenge);

    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

// DELETE challenge BY ID
const deleteChallengeById = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const parsedId = parseInt(id, 10);
        const deletechallenge = await prisma.challenge.delete({
            where: {
                id: parsedId
            }
        });
        res.status(200).json(deletechallenge);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
}

export {createChallenge, getAllChallenge, getChallengeById, updateChallenge, deleteChallengeById}