import React, {FC} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import colors from '../../constants/colors';
import {RootStackParamList} from '../RootStack/RootStack';
import {useAppDispatch} from '../../store/store';
import {signUp} from '../../store/ducks/auth/thunks';

import {FormField, Button} from '../../components';

interface FormValues extends FieldValues {
  email: string;
  name: string;
  password: string;
}

const SignUp: FC<SignUpProps> = () => {
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    const {email, password, name} = data;
    try {
      await dispatch(signUp({email, password, name})).unwrap();
    } catch (e) {}
  };

  return (
    <Root>
      <FormField
        control={control}
        name="name"
        label="Name"
        placeholder="Enter your name..."
      />
      <FormField
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your email..."
      />
      <FormField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password..."
        secureTextEntry={true}
      />
      <Button onPress={handleSubmit(onSubmit)}>Sign Up</Button>
      <Text style={styles.loginText}>Don't have an account?</Text>
      <TouchableOpacity style={styles.loginLinkWrapper} activeOpacity={0.7}>
        <Text style={styles.loginLink}>Log In</Text>
      </TouchableOpacity>
    </Root>
  );
};

export default SignUp;

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const Root = styled.View`
  margin-top: 35%;
  padding: 0 30px;
  align-items: center;
`;

const styles = StyleSheet.create({
  form: {
    marginTop: '50%',
    paddingHorizontal: 30,
  },
  loginText: {
    fontSize: 14,
    color: '#bababa',
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginLinkWrapper: {
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginLink: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryColor,
  },
});
