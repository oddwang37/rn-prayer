import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useForm, FieldValues} from 'react-hook-form';
import {Alert, Text} from 'react-native';

import userSession from '../../services/userSession';

import {FormField, Button} from '../../components';

interface FormValues extends FieldValues {
  email: string;
  name: string;
  password: string;
}

const SignUp = () => {
  const {control, handleSubmit, watch} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <Root>
      <FormField
        control={control}
        name="email"
        label="Email"
        placeholder="Enter your email..."
      />
      <FormField
        control={control}
        name="name"
        label="Name"
        placeholder="Enter your name..."
      />
      <FormField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password..."
      />
      <Button onPress={() => handleSubmit(onSubmit)}>Sign Up</Button>
    </Root>
  );
};

export default SignUp;

const Root = styled.View`
  margin-top: 35%;
  padding: 0 30px;
`;
