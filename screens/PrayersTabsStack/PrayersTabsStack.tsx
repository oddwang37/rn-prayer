import React, {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import colors from '../../constants/colors';
import {ColumnStackParamList} from '../ColumnStack/ColumnStack';
import MyPrayers from './MyPrayersScreen/MyPrayersScreen';
import Subscribed from './SubscribedScreen/SubscribedScreen';

export type PrayersTabsStackParamList = {
  MyPrayers: {columnId: number};
  Subscribed: undefined;
};

const Tab = createMaterialTopTabNavigator<PrayersTabsStackParamList>();

const PrayersTabsStack: FC<ColumnProps> = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarLabelStyle: {fontWeight: '600'},
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarIndicatorStyle: {
          backgroundColor: colors.blue,
        },
      }}>
      <Tab.Screen
        name="MyPrayers"
        component={MyPrayers}
        initialParams={{columnId: route.params.columnId}}
        options={{title: 'MY PRAYERS'}}
      />
      <Tab.Screen
        name="Subscribed"
        component={Subscribed}
        options={{title: 'SUBSCRIBED'}}
      />
    </Tab.Navigator>
  );
};

export default PrayersTabsStack;

type ColumnProps = NativeStackScreenProps<
  ColumnStackParamList,
  'PrayersTabsStack'
>;
