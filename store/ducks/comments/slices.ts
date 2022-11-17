import {createSlice} from '@reduxjs/toolkit';

import {
  getAllComments,
  createComment,
  deleteComment,
  updateCommentChecked,
} from './thunks';
import {Comment} from './types';

interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllComments.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getAllComments.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(createComment.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.isLoading = false;
      // action.payload field "column" returns all column info
      const {checked, title, description, id, column} = action.payload;
      const {id: columnId} = column;
      /*state.comments.push({
        body,
        description,
        columnId,
        id,
        commentsIds: [],
      });*/
    });
    builder.addCase(createComment.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload.id,
      );
    });
    builder.addCase(updateCommentChecked.fulfilled, (state, action) => {
      state.comments = state.comments.map(comment => {
        if (comment.id === action.payload.id) {
          return action.payload;
        } else return comment;
      });
    });
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
