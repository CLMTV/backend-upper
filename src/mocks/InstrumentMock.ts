import { Instrument } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _instrumentMock = (categoryIds: number[]): Instrument[] => {
    const instruments: Instrument[] = [];
    let lessonId = 1;
  
    for (const categoryId of categoryIds) {
  
      // Numéro de lesson dans un cours 
      const numInstrument = 1;
  
      for (let i = 1; i <= numInstrument; i++) {
        const instrument: Instrument = {
          id: lessonId,
          name: faker.music.genre(),
          id_category: categoryId
        };
        instruments.push(instrument);
        lessonId++;
      }
    }
    return instruments;
  };