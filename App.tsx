/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyDeskScreen, ColumnTabsNavigator} from './screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MyDesk: undefined;
  ColumnTabs: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyDesk" component={MyDeskScreen} />
        <Stack.Screen name="ColumnTabs" component={ColumnTabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
