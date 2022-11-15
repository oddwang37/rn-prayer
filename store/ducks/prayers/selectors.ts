import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store';

export const getAllPrayers = (state: RootState) => state.prayers.prayers;

export const getColumnPrayers = createSelector(
  [getAllPrayers, (state: RootState, columnId: number) => columnId],
  (allPrayers, columnId) => {
    return allPrayers.filter(prayer => columnId === prayer.columnId);
  },
);
