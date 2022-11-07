import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrayersTabs} from '../PrayersTabs';
import {PrayerScreen} from '../PrayerScreen';

export type ColumnStackParamList = {
  PrayersTabs: undefined;
  PrayerScreen: undefined;
};

const Stack = createNativeStackNavigator<ColumnStackParamList>();

const ColumnStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PrayersTabs" component={PrayersTabs} />
      <Stack.Screen name="PrayerScreen" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default ColumnStack;
