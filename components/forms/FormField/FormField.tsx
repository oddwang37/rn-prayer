import React, {FC} from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';
import {useController, UseControllerProps, FieldValues} from 'react-hook-form';

import {Input} from '../../UI/Input';

const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const {name, label, placeholder, control} = props;
  const {field} = useController<T>({name, control});

  return (
    <Root>
      <Label>{label}</Label>
      <Field placeholder={placeholder} {...field} />
    </Root>
  );
};

export default FormField;

export type FormFieldProps<T extends FieldValues> = FieldProps &
  UseControllerProps<T>;

type FieldProps = {
  label?: string;
  placeholder?: string;
  name: string;
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
