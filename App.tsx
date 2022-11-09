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
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';

import useAuth from './hooks/useAuth';
import {store} from './store/store';

import {MyDeskScreen, ColumnStack, Login, SignUp} from './screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MyDesk: undefined;
  ColumnStack: undefined;
  Login: undefined;
  SignUp: undefined;
};

const theme = {
  colors: {
    textColor: '#514D47',
    primaryColor: '#BFB393',
    secondaryColor: '#72A8BC',
    red: '#AC5253',
  },
};

const App = () => {
  const authToken = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {authToken ? (
              <>
                <Stack.Screen name="MyDesk" component={MyDeskScreen} />
                <Stack.Screen name="ColumnStack" component={ColumnStack} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
