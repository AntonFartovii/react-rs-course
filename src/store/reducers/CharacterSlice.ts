import {IСharacter} from './../../API/MainApi'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterState {
  characters: IСharacter[],
  isLoading: boolean,
  error: string
}

const initialState: CharacterState = {
  characters: [],
  isLoading: false,
  error: ''
}

export const characterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
        state.isLoading = true
    },
    userFetchingSuccess(state, action: PayloadAction<IСharacter[]>) {
        state.isLoading = false
        state.error = ''
        state.characters = action.payload
    },
    userFetchingError(state, action: PayloadAction<string>) {
        state.isLoading = false
        state.error = action.payload
    },
  }
})

export default characterSlice.reducer;
