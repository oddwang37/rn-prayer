import {createAsyncThunk, Update} from '@reduxjs/toolkit';
import axios from 'axios';

import http from '../../../services/http';

interface CreateCommentArgs {
  body: string;
  prayerId: number;
}
interface CreateCommentReq extends CreateCommentArgs {
  created: string;
}

interface UpdateCommentReq extends CreateCommentReq {
  id: number;
}

const API = {
  getAll: '/comments',
  createComment: '/comments',
  deleteComment: '/comments',
  updateComment: '/comments',
};

export const getAllComments = createAsyncThunk(
  'comments/get-all',
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

export const getCommentById = createAsyncThunk(
  'comments/get',
  async (id: number, {rejectWithValue}) => {
    try {
      const result = await http.get(API.getAll + '/' + id);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const createComment = createAsyncThunk(
  'comments/create',
  async (commentInfo: CreateCommentArgs, {rejectWithValue}) => {
    try {
      const requestBody: CreateCommentReq = {
        body: commentInfo.body,
        prayerId: commentInfo.prayerId,
        created: Date.now().toString();
      };
      const result = await http.post(API.createComment, requestBody);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
export const deleteComment = createAsyncThunk(
  'comment/delete',
  async (commentId: number, {rejectWithValue}) => {
    try {
      const result = await http.delete(API.deleteComment + '/' + commentId);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const updateCommentChecked = createAsyncThunk(
  'comment/update-check',
  async (commentInfo: UpdateCommentReq, {rejectWithValue}) => {
    const {id, ...rest} = commentInfo;
    const requestBody = {...rest};
    try {
      const result = await http.put(API.updateComment + '/' + id, requestBody);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
