/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';


const App = () => {

  return (
    <NavigationContainer>
      <Root>
        <Text>
          Some some text
        </Text>
      </Root>
    </NavigationContainer>
  );
};

const Root = styled.View`
  background-color:  red;
`

export default App;
