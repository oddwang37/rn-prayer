import React, {FC} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Check} from '../../svg';

const Checkbox: FC<CheckboxProps> = ({isChecked, onChange}) => {
  return (
    <Root onPress={onChange} underlayColor="#BFB393" activeOpacity={0.6}>
      {isChecked ? <Check /> : <View></View>}
    </Root>
  );
};

export default Checkbox;

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  title?: string;
};

const Root = styled.TouchableHighlight`
  border: 1px solid #424e75;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
`;
