import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {signUp, login} from './thunks';
import userSession from '../../../services/userSession';

interface AuthState {
  username: string;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  username: '',
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.username = action.payload.name;
      userSession.store(action.payload.token);
      state.isAuth = true;
    });
    builder.addCase(signUp.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload, 'fulfilled state');
      userSession.store(action.payload.token);
      state.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {setIsAuth} = authSlice.actions;

export default authSlice.reducer;
