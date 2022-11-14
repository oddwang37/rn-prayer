import {createSlice} from '@reduxjs/toolkit';
import {signUp, login} from './thunks';
import userSession from '../../../services/userSession';

interface AuthState {
  username: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  username: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {});
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log(action.payload);
      state.username = action.payload.name;
      userSession.store(action.payload.token);
      state.isAuth = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      userSession.store(action.payload.token);
      state.isAuth = true;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
