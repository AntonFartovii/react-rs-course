import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice';
import { characterAPI } from '../services/CharactersService';

const rootReducer = combineReducers({
  searchReducer,
  [characterAPI.reducerPath]: characterAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
