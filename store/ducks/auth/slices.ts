import {createSlice} from '@reduxjs/toolkit';
import {signUp} from './thunks';
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
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {});
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.username = action.payload.name;
      userSession.store(action.payload.token);
      state.isAuth = true;
    });
  },
});

export const {setIsAuth} = authSlice.actions;

export default authSlice.reducer;
