import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  number: number;
}

const initialState = {
  number: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addOne: state => {
      state.number++;
    },
    minusOne: state => {
      state.number--;
    },
  },
});

export const {addOne, minusOne} = authSlice.actions;

export default authSlice.reducer;
