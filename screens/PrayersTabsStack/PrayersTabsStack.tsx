import React, {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ColumnStackParamList} from '../ColumnStack/ColumnStack';
import MyPrayers from './MyPrayersScreen/MyPrayersScreen';
import Subscribed from './SubscribedScreen/SubscribedScreen';

export type PrayersTabsStackParamList = {
  MyPrayers: undefined;
  Subscribed: undefined;
};

const Tab = createMaterialTopTabNavigator<PrayersTabsStackParamList>();

const PrayersTabsStack: FC<ColumnProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyPrayers" component={MyPrayers} />
      <Tab.Screen name="Subscribed" component={Subscribed} />
    </Tab.Navigator>
  );
};

export default PrayersTabsStack;

type ColumnProps = NativeStackScreenProps<
  ColumnStackParamList,
  'PrayersTabsStack'
>;
