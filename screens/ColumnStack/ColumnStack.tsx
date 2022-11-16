import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from 'screens/RootStack/RootStack';
import {PrayersTabsStack} from '../PrayersTabsStack';
import {PrayerScreen} from './PrayerScreen';
import {Header, HeaderButton} from '../../components';
import {Settings} from '../../components/svg';

export type ColumnStackParamList = {
  PrayersTabsStack: {columnId: number; columnName: string};
  PrayerScreen: undefined;
};

const Stack = createNativeStackNavigator<ColumnStackParamList>();

const ColumnStack: FC<ColumnStackProps> = ({route}) => {
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
        initialParams={{columnId: route.params.columnId}}
        options={({route}) => ({
          title: route.params.columnName || route.name,
          headerRight: () => (
            <HeaderButton onPress={() => alert('settings')}>
              <Settings />
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen name="PrayerScreen" component={PrayerScreen} />
    </Stack.Navigator>
  );
};

export default ColumnStack;

type ColumnStackProps = NativeStackScreenProps<
  RootStackParamList,
  'ColumnStack'
>;
