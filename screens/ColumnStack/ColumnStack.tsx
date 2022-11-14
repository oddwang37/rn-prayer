import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PrayersTabsStack} from '../PrayersTabsStack';
import {PrayerScreen} from '../PrayerScreen';

export type ColumnStackParamList = {
  PrayersTabsStack: undefined;
  PrayerScreen: undefined;
};

const Stack = createNativeStackNavigator<ColumnStackParamList>();

const ColumnStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PrayersTabsStack" component={PrayersTabsStack} />
      <Stack.Screen name="PrayerScreen" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default ColumnStack;
