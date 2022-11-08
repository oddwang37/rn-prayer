import React from 'react';
import styled from 'styled-components/native';

import {Input} from '../Input';
import Plus from '../../../assets/icons/plus.svg';

const AddPrayerInput = () => {
  return (
    <Root>
      <PlusWrapper>
        <Plus strokeWidth={2} />
      </PlusWrapper>
      <Field
        selectionColor={'#72A8BC'}
        placeholder="Add a prayer..."
        placeholderTextColor="#9C9C9C"
      />
    </Root>
  );
};

export default AddPrayerInput;

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 13px;
  border: 1px solid #e5e5e5;
`;
const PlusWrapper = styled.View`
  padding-right: 15px;
`;
const Field = styled.TextInput`
  font-size: 18px;
  padding: 0;
`;
