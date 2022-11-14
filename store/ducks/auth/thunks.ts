import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import http from '../../../services/http';

interface SignInInfo {
  email: string;
  password: string;
}

interface SignUpInfo extends SignInInfo {
  name: string;
}

const API = {
  login: 'auth/sign-in',
  signUp: 'auth/sign-up',
};
export const login = createAsyncThunk(
  'auth/sign-in',
  async (authInfo: SignInInfo, {rejectWithValue}) => {
    try {
      const result = await http.post(API.login, authInfo);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/sign-up',
  async (authInfo: SignUpInfo, {rejectWithValue}) => {
    try {
      const result = await http.post(API.signUp, authInfo);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
