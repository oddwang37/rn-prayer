import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

import {FormField, Button} from '../../components';

const Login = () => {
  return (
    <Root>
      <FormField label="Email" placeholder="Enter your email..." />
      <FormField label="Name" placeholder="Enter your name..." />
      <FormField label="Password" placeholder="Enter your password..." />
      <Button onPress={() => alert('Login successful')}>Login</Button>
    </Root>
  );
};

export default Login;

const Root = styled.View`
  margin-top: 25%;
  padding: 0 30px;
`;
