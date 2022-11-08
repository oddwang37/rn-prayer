import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

import {FormField, Button} from '../../components';

const Login = () => {
  return (
    <Root>
      <FormField placeholder="Enter your email..." />
      <FormField placeholder="Enter your password..." />
      <Button onPress={() => alert('successfully signed up')}>Sign in</Button>
    </Root>
  );
};

export default Login;

const Root = styled.View`
  margin-top: 25%;
  padding: 0 30px;
`;
