import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IData } from '../store/reducers/CharacterSlice';

const params = {
  limit: 30,
};

export const characterAPI = createApi({
  reducerPath: 'characterAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  tagTypes: ['Character'],
  endpoints: (build) => ({
    fetchAllCharacters: build.query<IData, string>({
      query: (searchTitle) => ({
        url: `/character`,
        params: searchTitle ? { ...params, name: searchTitle } : params,
      }),
      providesTags: () => ['Character'],
    }),
  }),
});
