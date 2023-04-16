import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';

interface CharacterState {
  characters: ICharacter[];
  isLoading: boolean;
  error: string;
}

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: '',
};

export interface IData {
  info: string[];
  results: ICharacter[];
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userFetchingSuccess(state, action: PayloadAction<IData>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload.results;
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
