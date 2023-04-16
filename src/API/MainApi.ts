import { $host } from './index';

export const fetchFilms = async ({ ...params }) => {
  const { data } = await $host.get('/', {
    params,
  });
  return data;
};
