import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store';

export const getAllPrayers = (state: RootState) => state.prayers.prayers;

export const selectColumnPrayers = createSelector(
  [getAllPrayers, (state: RootState, columnId: number) => columnId],
  (allPrayers, columnId) => {
    return allPrayers.filter(prayer => columnId === prayer.columnId);
  },
);

export const selectCheckedPrayers = (state: RootState) =>
  state.prayers.prayers.filter(prayer => prayer.checked);
export const selectUncheckedPrayers = (state: RootState) =>
  state.prayers.prayers.filter(prayer => !prayer.checked);

export const selectColumnPrayersChecked = createSelector(
  [selectCheckedPrayers, (state: RootState, columnId: number) => columnId],
  (checkedPrayers, columnId) => {
    return checkedPrayers.filter(prayer => columnId === prayer.columnId);
  },
);

export const selectColumnPrayersUnchecked = createSelector(
  [selectUncheckedPrayers, (state: RootState, columnId: number) => columnId],
  (uncheckedPrayers, columnId) => {
    return uncheckedPrayers.filter(prayer => columnId === prayer.columnId);
  },
);
