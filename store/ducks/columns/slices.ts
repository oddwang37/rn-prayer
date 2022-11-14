import {createSlice} from '@reduxjs/toolkit';

import {getAllColumns} from './thunks';
import {Column} from './types';

interface ColumnsState {
  columns: Column[];
  isLoading: boolean;
}

const initialState: ColumnsState = {
  columns: [],
  isLoading: false,
};

const columnsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllColumns.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllColumns.fulfilled, (state, action) => {
      state.isLoading = false;
      state.columns = action.payload;
    });
    builder.addCase(getAllColumns.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {} = columnsSlice.actions;

export default columnsSlice.reducer;
