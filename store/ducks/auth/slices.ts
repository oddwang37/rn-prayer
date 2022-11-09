import {createSlice} from '@reduxjs/toolkit';
import {signUp} from './thunks';
import userSession from '../../../services/userSession';

interface AuthState {
  username: string;
  isAuth: boolean;
}

const initialState = {
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
    builder.addCase(signUp.pending, (state, action) => {
      console.log('pending new');
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.username = action.payload.name;
      userSession.store(action.payload.token);
      console.log(state.username);
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
