import React from 'react'
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Column: undefined;
};

const MyDesk = () => {
  return (
    <Stack.Navigator>
    <div>MyDesk</div>
      
    </Stack.Navigator>
  )
}

export default MyDesk

const Root = styled.div`
    
`