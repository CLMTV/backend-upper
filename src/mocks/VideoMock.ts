import { Video } from "@prisma/client";
import { URL } from 'url'; 

export const _videoMock = (): Video[] => {
  const videos: Video[] = [];
  let videoId = 1;

  for (let i = 1; i <= 209; i++) {
    // Générer le lien YouTube avec un paramètre d'index aléatoire
    const youtubeLink = generateYoutubeLink(i);
    
    const video: Video = {
      id: videoId,
      link: youtubeLink,
    };
    videos.push(video);
    videoId++;
  }
  return videos;
};

// Fonction pour générer un lien YouTube avec un paramètre d'index
const generateYoutubeLink = (index: number): string => {
  const youtubeLink = 'https://www.youtube.com/watch?v=EsqrV68pHLc&list=PLyVrZcjexmyOVJyVZyWGuip-kuJf7ciqx';

  const url = new URL(youtubeLink);
  url.searchParams.set('index', index.toString());

  return url.toString();
};
