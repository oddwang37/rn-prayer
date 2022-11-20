import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {signUp, login} from './thunks';
import userSession from '../../../services/userSession';

interface AuthState {
  username: string;
  userId: number | null;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  username: '',
  userId: null,
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
    logout: state => {
      userSession.remove();
      state.isAuth = false;
      state.userId = null;
      state.username = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      const {name, token, id} = action.payload;
      state.username = name;
      userSession.store(token);
      state.userId = id;
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
      const {id, token, name} = action.payload;
      state.userId = id;
      state.username = name;
      userSession.store(token);
      state.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {setIsAuth, logout} = authSlice.actions;

export default authSlice.reducer;
