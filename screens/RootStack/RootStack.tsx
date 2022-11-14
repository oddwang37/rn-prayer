import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {setIsAuth} from '../../store/ducks/auth';
import {RootState, useAppDispatch} from '../../store/store';
import userSession from '../../services/userSession';

import MyDeskScreen from '../MyDeskScreen/MyDeskScreen';
import ColumnStack from '../ColumnStack/ColumnStack';
import LoginScreen from '../LoginScreen/LoginScreen';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import {Header} from '../../components';

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
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        header: (props: NativeStackHeaderProps) => {
          return <Header>{props.options.title || props.route.name}</Header>;
        },
      }}>
      {isAuth ? (
        <Stack.Group>
          <Stack.Screen
            name="MyDesk"
            component={MyDeskScreen}
            options={{title: 'My Desk'}}
          />
          <Stack.Screen name="ColumnStack" component={ColumnStack} />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{headerBackVisible: false}}>
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: 'Sign Up'}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Log In'}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
