import React from 'react';
import styled from 'styled-components/native';

const Input = () => {
  return <Field selectionColor={'#A369EC'}>Input</Field>;
};

export default Input;

const Field = styled.TextInput`
  width: 100%;
  padding: 15px;
  height: 70px;
  border-radius: 10px;
  &::placeholder {
    color: #a499b1;
  }
`;
