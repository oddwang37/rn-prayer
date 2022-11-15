import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../../store';

import http from '../../../services/http';

interface CreateColumnReq {
  title: string;
  description: string;
  prayerId: number | null;
}

const API = {
  getAll: '/columns',
  createColumn: '/columns',
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
  'columns/create',
  async (title: string, {rejectWithValue, getState}) => {
    try {
      const state: RootState = getState() as RootState;
      const requestBody: CreateColumnReq = {
        title,
        description: '',
        prayerId: state.auth.userId,
      };
      const result = await http.post(API.createColumn, requestBody);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
