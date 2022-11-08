import React, {FC, ButtonHTMLAttributes} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

const Button: FC<ButtonProps> = ({children, onPress}) => {
  return (
    <Root onPress={onPress} underlayColor="#978c6d" activeOpacity={0.6}>
      <ButtonText activeOpacity={0.6} underlayColor="#8e856d">
        {children}
      </ButtonText>
    </Root>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const Root = styled.TouchableHighlight`
  background-color: #bfb393;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 210px;
  height: 30px;
  margin: 0 auto;
  margin-top: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;
