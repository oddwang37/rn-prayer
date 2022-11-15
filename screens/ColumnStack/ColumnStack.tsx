import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from 'screens/RootStack/RootStack';
import {PrayersTabsStack} from '../PrayersTabsStack';
import {PrayerScreen} from './PrayerScreen';
import {Header} from '../../components';

export type ColumnStackParamList = {
  PrayersTabsStack: undefined;
  PrayerScreen: undefined;
};

const Stack = createNativeStackNavigator<ColumnStackParamList>();

const ColumnStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <Header>{props.children}</Header>,
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="PrayersTabsStack"
        component={PrayersTabsStack}
        options={({route}) => ({title: route.params.columnName || route.name})}
      />
      <Stack.Screen name="PrayerScreen" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default ColumnStack;

type ColumnStack = NativeStackScreenProps<RootStackParamList, 'ColumnStack'>;
