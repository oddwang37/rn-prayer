import React, {FC} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {RootStackParamList} from '../../App';
import {MyPrayersStack} from '../MyPrayersStack';
import {SubscribedStack} from '../SubscribedStack';

export type ColumnTabsParamList = {
  MyPrayersStack: undefined;
  SubscribedStack: undefined;
};

const Tab = createMaterialTopTabNavigator<ColumnTabsParamList>();

const ColumnScreen: FC<ColumnProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyPrayersStack" component={MyPrayersStack} />
      <Tab.Screen name="SubscribedStack" component={SubscribedStack} />
    </Tab.Navigator>
  );
};

export default ColumnScreen;

type ColumnProps = NativeStackScreenProps<RootStackParamList, 'ColumnTabs'>;
