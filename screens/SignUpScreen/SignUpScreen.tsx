import React, {FC} from 'react';
import styled from 'styled-components/native';
import {useForm, FieldValues} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../RootStack/RootStack';
import {useAppDispatch} from '../../store/store';
import {signUp} from '../../store/ducks/auth/thunks';

import {FormField, Button} from '../../components';
import {Text} from 'react-native-svg';

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
      <Text>Already have an account?</Text>
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
