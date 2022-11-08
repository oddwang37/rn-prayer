import React, {FC} from 'react';
import styled from 'styled-components/native';

const Input: FC<InputProps> = ({placeholder}) => {
  return (
    <Field
      autoCapitalize="none"
      selectionColor={'#72A8BC'}
      placeholder={placeholder}
    />
  );
};

export default Input;

type InputProps = {
  placeholder?: string;
};
const Field = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  shadow-color: rgba(0, 0, 0, 0.05);
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  border: 1px solid #e5e5e5;
  font-size: 16px;
  margin-bottom: 30px;
  padding: 0 10px;
  &::placeholder {
    color: #a499b1;
  }
`;
