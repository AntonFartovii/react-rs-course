import { $host } from './index';

export interface IСharacter {
  firstEpisode?: string;
  gender?: string;
  hairColor?: string;
  id?: number;
  image?: string;
  name?: string;
  occupation?: string;
  relatives?: string[];
  url?: string;
  voicedBy?: string;
  wikiUrl?: string;
}

export const fetchFilms = async ({ ...params }) => {
  const { data } = await $host.get('/', {
    params,
  });
  return data;
};
