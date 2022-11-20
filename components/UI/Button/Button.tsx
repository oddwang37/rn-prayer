import React, {FC, PropsWithChildren} from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Button: FC<ButtonProps> = ({children, onPress, isLoading}) => {
  return (
    <Root onPress={onPress} underlayColor="#978c6d" activeOpacity={0.6}>
      <ButtonText activeOpacity={0.6} underlayColor="#8e856d">
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text>{children}</Text>
        )}
      </ButtonText>
    </Root>
  );
};

export default Button;

type ButtonProps = PropsWithChildren<{
  onPress: () => void;
  isLoading?: boolean;
}>;

const Root = styled.TouchableHighlight`
  background-color: #bfb393;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 210px;
  height: 30px;
  margin: 0 auto;
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
