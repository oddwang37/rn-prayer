import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import http from '../../../services/http';

interface CreatePrayerArgs {
  title: string;
  columnId: number;
}
interface CreatePrayerReq extends CreatePrayerArgs {
  description: string;
  checked: boolean;
}

const API = {
  getAll: '/prayers',
  createPrayer: '/prayers',
  deletePrayer: '/prayers',
};

export const getAllPrayers = createAsyncThunk(
  'prayers/get',
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

export const createPrayer = createAsyncThunk(
  'prayers/create',
  async (prayerInfo: CreatePrayerArgs, {rejectWithValue}) => {
    try {
      const requestBody: CreatePrayerReq = {
        title: prayerInfo.title,
        description: '',
        checked: false,
        columnId: prayerInfo.columnId,
      };
      const result = await http.post(API.createPrayer, requestBody);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
export const deletePrayer = createAsyncThunk(
  'prayer/delete',
  async (prayerId: number, {rejectWithValue}) => {
    try {
      const result = await http.delete(API.deletePrayer + '/' + prayerId);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
