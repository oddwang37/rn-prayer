import React, {FC, ButtonHTMLAttributes} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <Root>
      <ButtonText
        activeOpacity={1}
        underlayColor="#797055"
        onPress={() => alert('asda')}>
        {children}
      </ButtonText>
    </Root>
  );
};

export default Button;

type ButtonProps = {
  children: React.ReactNode;
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
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;
