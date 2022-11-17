import {createSlice} from '@reduxjs/toolkit';

import {getAllComments, createComment, deleteComment} from './thunks';
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
      const {body, created, id, prayerId, userId} = action.payload;
      state.comments.push({body, created, id, prayerId, userId});
    });
    builder.addCase(createComment.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.comments = state.comments.filter(
        comment => comment.id !== action.payload.id,
      );
    });
  },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
