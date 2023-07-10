import { Lesson } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _lessonMock = (courseIds: number[]): Lesson[] => {
    const lessons: Lesson[] = [];
    let lessonId = 1;
  
    for (const courseId of courseIds) {
  
      // Numéro de lesson dans un cours 
      const numLessons = faker.number.int({ min: 3, max: 6 });
  
      for (let i = 1; i <= numLessons; i++) {
        const lesson: Lesson = {
          id: lessonId,
          content: faker.lorem.paragraphs(),
          createdAt: faker.date.anytime(),
          updatedAt: faker.date.anytime(),
          order: i,
          points: faker.number.int({ min: 10, max: 100 }),
          courseId: courseId,
          videoId: courseId
        };
        lessons.push(lesson);
        lessonId++;
      }
    }
    return lessons;
  };