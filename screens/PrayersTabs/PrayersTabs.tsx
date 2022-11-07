import React, {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {ColumnStackParamList} from '../ColumnStack/ColumnStack';
import {MyPrayers} from '../MyPrayers';
import {Subscribed} from '../Subscribed';

export type PrayersTabsParamList = {
  MyPrayers: undefined;
  Subscribed: undefined;
};

const Tab = createMaterialTopTabNavigator<PrayersTabsParamList>();

const ColumnScreen: FC<ColumnProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyPrayers" component={MyPrayers} />
      <Tab.Screen name="Subscribed" component={Subscribed} />
    </Tab.Navigator>
  );
};

export default ColumnScreen;

type ColumnProps = NativeStackScreenProps<ColumnStackParamList, 'PrayersTabs'>;
