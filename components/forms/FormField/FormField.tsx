import React, {FC} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

import {Input} from '../../UI/Input';

const FormField: FC<FormFieldProps> = ({label, placeholder}) => {
  return (
    <Root>
      <Label>{label}</Label>
      <Field placeholder={placeholder} />
    </Root>
  );
};

export default FormField;

type FormFieldProps = {
  label?: string;
  placeholder?: string;
};

const Root = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;
const Label = styled.Text`
  color: ${({theme}) => theme.colors.textColor};
  font-size: 16px;
  margin-bottom: 6px;
`;
const Field = styled(Input)`
  margin-bottom: 0;
`;
