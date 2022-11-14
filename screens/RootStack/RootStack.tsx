import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RootState} from 'store/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

import MyDeskScreen from '../MyDeskScreen/MyDeskScreen';
import ColumnStack from '../ColumnStack/ColumnStack';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';

export type RootStackParamList = {
  MyDesk: undefined;
  ColumnStack: undefined;
  Login: undefined;
  SignUp: undefined;
};

const RootStack = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen name="MyDesk" component={MyDeskScreen} />
          <Stack.Screen name="ColumnStack" component={ColumnStack} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
