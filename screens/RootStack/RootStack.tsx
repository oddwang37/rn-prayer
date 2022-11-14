import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {setIsAuth} from '../../store/ducks/auth';
import {RootState, useAppDispatch} from '../../store/store';
import userSession from '../../services/userSession';

import MyDeskScreen from '../MyDeskScreen/MyDeskScreen';
import ColumnStack from '../ColumnStack/ColumnStack';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  MyDesk: undefined;
  ColumnStack: undefined;
  Login: undefined;
  SignUp: undefined;
};

const RootStack = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getToken = async () => {
      try {
        const result = await userSession.retrieve();
        if (result) {
          dispatch(setIsAuth(true));
        }
      } catch (e) {}
    };
    getToken();
  }, []);

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen name="MyDesk" component={MyDeskScreen} />
          <Stack.Screen name="ColumnStack" component={ColumnStack} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
