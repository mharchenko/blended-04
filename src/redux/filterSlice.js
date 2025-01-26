import { createSlice } from '@reduxjs/toolkit';

const filterSclice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});
export const filterReducer = filterSclice.reducer;
export const { changeFilter } = filterSclice.actions;
