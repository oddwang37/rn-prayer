import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

const MyDesk: FC<MyDeskProps> = ({navigation}) => {
  return (
    <Root>
      <ButtonLink
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('ColumnTabs')}>
        <Text>Go to column</Text>
      </ButtonLink>
    </Root>
  );
};

export default MyDesk;

type MyDeskProps = NativeStackScreenProps<RootStackParamList, 'MyDesk'>;

const Root = styled.View``;
const ButtonLink = styled.TouchableHighlight`
  background-color: #9000de;
`;
