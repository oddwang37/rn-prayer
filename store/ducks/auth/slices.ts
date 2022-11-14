import {createSlice} from '@reduxjs/toolkit';
import {signUp, login} from './thunks';
import userSession from '../../../services/userSession';

interface AuthState {
  username: string;
}

const initialState: AuthState = {
  username: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {});
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.username = action.payload.name;
      userSession.store(action.payload.token);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
