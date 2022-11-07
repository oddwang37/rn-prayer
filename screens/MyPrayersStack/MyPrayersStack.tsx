import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MyPrayers} from '../MyPrayers';
import {PrayerScreen} from '../PrayerScreen';

export type PrayersStackParamList = {
  MyPrayers: undefined;
  Prayer: undefined;
};

const Stack = createNativeStackNavigator<PrayersStackParamList>();

const MyPrayersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPrayers" component={MyPrayers} />
      <Stack.Screen name="Prayer" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default MyPrayersStack;
