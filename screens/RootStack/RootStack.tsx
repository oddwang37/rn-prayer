import React, {useEffect, useState} from 'react';
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
import NameEnterModal from '../NewColumnModal/NewColumnModal';
import {Header, HeaderButton} from '../../components';
import {Plus} from '../../components/svg';

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

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const result = await userSession.retrieve();
        if (result) {
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
        }
      } catch (e) {
        dispatch(setIsAuth(false));
      }
    };
    getToken();
  }, []);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitle: props => {
            return <Header>{props.children}</Header>;
          },
        }}>
        {isAuth ? (
          <Stack.Group>
            <Stack.Screen
              name="MyDesk"
              component={MyDeskScreen}
              options={{
                title: 'My Desk',
                headerRight: () => (
                  <HeaderButton onPress={openModal}>
                    <Plus />
                  </HeaderButton>
                ),
              }}
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
      <NameEnterModal isVisible={modalVisible} closeModal={closeModal} />
    </>
  );
};

export default RootStack;
