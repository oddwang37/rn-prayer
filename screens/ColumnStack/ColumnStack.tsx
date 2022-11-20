import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from 'screens/RootStack/RootStack';
import {PrayersTabsStack} from '../PrayersTabsStack';
import {PrayerScreen} from './PrayerScreen';
import {Header, HeaderButton} from '../../components';
import {Settings, Back, Prayer} from '../../components/svg';
import {Alert} from 'react-native';
import routes from '../../constants/routes';
import colors from '../../constants/colors';

export type ColumnStackParamList = {
  PrayersTabsStack: {columnId: number; columnName: string};
  PrayerScreen: {prayerId: number};
};

const Stack = createNativeStackNavigator<ColumnStackParamList>();

const ColumnStack: FC<ColumnStackProps> = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrayersTabsStack"
        component={PrayersTabsStack}
        initialParams={{columnId: route.params.columnId}}
        options={({route}) => ({
          headerTitle: props => <Header>{props.children}</Header>,
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerShadowVisible: false,
          title: route.params.columnName || route.name,
          headerRight: () => (
            <HeaderButton onPress={() => Alert.alert('settings')}>
              <Settings />
            </HeaderButton>
          ),
        })}
      />
      <Stack.Screen
        name="PrayerScreen"
        component={PrayerScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <HeaderButton onPress={() => navigation.goBack()}>
              <Back />
            </HeaderButton>
          ),
          headerRight: () => (
            <HeaderButton>
              <Prayer fill="#fff" />
            </HeaderButton>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default ColumnStack;

type ColumnStackProps = NativeStackScreenProps<
  RootStackParamList,
  'ColumnStack'
>;
