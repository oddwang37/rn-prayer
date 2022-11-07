import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Subscribed from '../Subscribed/Subscribed';
import {PrayerScreen} from '../PrayerScreen';

const Stack = createNativeStackNavigator<SubscribedStackParamList>();

export type SubscribedStackParamList = {
  Subscribed: undefined;
  Prayer: undefined;
};

const SubscribedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Subscribed" component={Subscribed} />
      <Stack.Screen name="Prayer" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default SubscribedStack;
