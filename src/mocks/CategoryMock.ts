import { Category } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _categoryMock = (): Category[] => {
    const categories: Category[] = [];
    for (let i = 1; i <= 30; i++) {
      const category: Category = {
        id: i,
        name: faker.music.songName(),
        content: faker.music.songName(),
      };
      categories.push(category);
    }
    return categories;
  };