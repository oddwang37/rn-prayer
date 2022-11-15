import {createSlice} from '@reduxjs/toolkit';

import {getAllPrayers, createPrayer} from './thunks';
import {Prayer} from './types';

interface PrayersState {
  prayers: Prayer[];
  isLoading: boolean;
}

const initialState: PrayersState = {
  prayers: [],
  isLoading: false,
};

const prayersSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllPrayers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllPrayers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prayers = action.payload;
    });
    builder.addCase(getAllPrayers.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(createPrayer.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createPrayer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prayers.push(action.payload);
    });
    builder.addCase(createPrayer.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {} = prayersSlice.actions;

export default prayersSlice.reducer;
