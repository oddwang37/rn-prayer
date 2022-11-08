import React, {useState} from 'react';
import styled from 'styled-components/native';

import {Checkbox} from '../UI';
import User from '../../assets/icons/user3.svg';
import Prayer from '../../assets/icons/Lists/Icons/prayer line.svg';

const PrayerItem = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const onChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <Root>
      <Indicator />
      <Checkbox isChecked={isChecked} onChange={onChange} />
      <Title>Prayer one title</Title>
      <Icons>
        <IconWrapper>
          <User width={24} height={24} />
          <Quantity>3</Quantity>
        </IconWrapper>
        <IconWrapper>
          <Prayer />
          <Quantity>157</Quantity>
        </IconWrapper>
      </Icons>
    </Root>
  );
};

export default PrayerItem;

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 23px 0;
`;
const Indicator = styled.View`
  height: 22px;
  width: 3px;
  background-color: ${({theme}) => theme.colors.red};
  margin-right: 15px;
`;
const Title = styled.Text`
  margin-left: 15px;
  font-size: 18px;
  flex: 5;
`;
const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.View`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex: 3;
`;
const Quantity = styled.Text`
  font-size: 12px;
`;
