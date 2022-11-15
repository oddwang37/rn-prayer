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
import {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import userSession from './services/userSession';

import {store} from './store/store';

import {RootStack} from './screens/RootStack';

const theme = {
  colors: {
    textColor: '#514D47',
    primaryColor: '#BFB393',
    secondaryColor: '#72A8BC',
    red: '#AC5253',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
