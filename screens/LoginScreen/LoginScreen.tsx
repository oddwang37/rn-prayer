import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../RootStack/RootStack';
import {useAppDispatch} from '../../store/store';
import {login} from '../../store/ducks/auth/thunks';

import {FormField, Button} from '../../components';

interface FormValues extends FieldValues {
  email: string;
  password: string;
}

const LoginScreen: FC<LoginProps> = () => {
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    const {email, password} = data;
    try {
      await dispatch(login({email, password})).unwrap();
    } catch (e) {}
  };

  return (
    <View style={styles.form}>
      <FormField
        name="email"
        control={control}
        placeholder="Enter your email..."
      />
      <FormField
        name="password"
        control={control}
        placeholder="Enter your password..."
      />
      <Button onPress={handleSubmit(onSubmit)}>Sign in</Button>
    </View>
  );
};

export default LoginScreen;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const styles = StyleSheet.create({
  form: {
    marginTop: '50%',
    paddingHorizontal: 30,
  },
});
