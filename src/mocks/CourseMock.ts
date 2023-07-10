import { Course } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _courseMock = (): Course[] => {
    const courses: Course[] = [];
  
    for (let i = 1; i <= 30; i++) {
      const course: Course = {
        id: i,
        name: faker.music.songName(),
        description: faker.lorem.paragraph(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime()
      };
      courses.push(course);
    }
    return courses;
};
