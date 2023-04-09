import { $host } from './index';

export interface IFilm {
  firstEpisode: string;
  gender: string;
  hairColor: string;
  id: number;
  image: string;
  name: string;
  occupation: string;
  relatives: string[];
  url: string;
  voicedBy: string;
  wikiUrl: string;
}

export const fetchFilms = async (limit = 15) => {
  const { data } = await $host.get('/', {
    params: {
      limit,
    },
  });
  return data;
};
