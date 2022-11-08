import React from 'react';
import styled from 'styled-components/native';

import {Plus} from '../../svg';
import {Input} from '../Input';

const AddPrayerInput = () => {
  return (
    <Root>
      <PlusWrapper></PlusWrapper>
      <Input />
    </Root>
  );
};

export default AddPrayerInput;

const Root = styled.View`
  display: flex;
  flex-direction: row;
`;
const PlusWrapper = styled.View`
  padding: 15px;
`;
