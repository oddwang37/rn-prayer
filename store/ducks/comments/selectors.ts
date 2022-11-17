import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store';

export const selectAllComments = (state: RootState) => state.comments.comments;

export const selectPrayerComments = createSelector(
  [selectAllComments, (state: RootState, prayerId: number) => prayerId],
  (allComments, prayerId) => {
    return allComments.filter(prayer => prayerId === prayer.prayerId);
  },
);
