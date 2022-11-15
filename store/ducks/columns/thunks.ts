import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import http from '../../../services/http';

const API = {
  getAll: '/columns',
};

export const getAllColumns = createAsyncThunk(
  'columns/get',
  async (_, {rejectWithValue}) => {
    try {
      const result = await http.get(API.getAll);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const createColumn = createAsyncThunk(
  'columns/get',
  async (_, {rejectWithValue}) => {
    try {
      const result = await http.get(API.getAll);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
