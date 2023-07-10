import { Video } from "@prisma/client";
import { faker } from '@faker-js/faker';

export const _videoMock = (lessonIds: number[]): Video[] => {
    const videos: Video[] = [];
    let videoId = 1;
  
    for (const lessonId of lessonIds) {
  
      // Numéro de vidéo dans une lesson
      const numVideo = 1;
  
      for (let i = 1; i <= numVideo; i++) {
        const video: Video = {
          id: videoId,
          link: faker.internet.avatar(),
        };
        videos.push(video);
        videoId++;
      }
    }
    return videos;
};