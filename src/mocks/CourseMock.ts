import { Course } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _courseMock = (): Course[] => {
    const courses: Course[] = [];
    const idPlan = faker.number.int({ min: 1, max: 3 });
  
    for (let i = 1; i <= 30; i++) {
      const course: Course = {
        id: i,
        name: faker.music.songName(),
        description: faker.lorem.paragraph(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(), 
        planId: idPlan,
        mediaId: 1, // id test
        authorId: 1 // id test
      };
      courses.push(course);
    }
    return courses;
};
