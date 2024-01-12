import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTitle: string;
}

const initialState: SearchState = {
  searchTitle: '',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
  },
});

export const { setSearchTitle } = SearchSlice.actions;

export default SearchSlice.reducer;
