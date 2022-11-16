import {createSlice} from '@reduxjs/toolkit';
import {shouldUseActivityState} from 'react-native-screens';

import {getAllPrayers, createPrayer, deletePrayer} from './thunks';
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
      console.log('CREATE PRAYER RESULT', action.payload);
      // action.payload field "column" returns all column info
      const {checked, title, description, id, column} = action.payload;
      const {id: columnId} = column;
      state.prayers.push({
        checked,
        title,
        description,
        columnId,
        id,
        commentsIds: [],
      });
    });
    builder.addCase(createPrayer.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deletePrayer.fulfilled, (state, action) => {
      state.prayers = state.prayers.filter(
        prayer => prayer.id !== action.payload.id,
      );
    });
  },
});

export const {} = prayersSlice.actions;

export default prayersSlice.reducer;
