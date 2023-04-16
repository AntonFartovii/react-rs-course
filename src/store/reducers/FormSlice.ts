import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../../data/data';

const initialState = {
  cards: [] as ICard[],
  message: false as boolean,
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
      state.message = true;
    },
    addCardSuccess: (state, action: PayloadAction<boolean>) => {
      state.message = action.payload;
    },
  },
});

export const { addCard, addCardSuccess } = FormSlice.actions;

export default FormSlice.reducer;
