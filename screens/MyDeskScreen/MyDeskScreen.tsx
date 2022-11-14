import React, {FC} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import routes from '../../constants/routes';
import {RootStackParamList} from '../RootStack/RootStack';

const MyDesk: FC<MyDeskProps> = ({navigation}) => {
  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate(routes.columnStack)}>
        <Text>Go to column</Text>
      </TouchableHighlight>
    </View>
  );
};

export default MyDesk;

type MyDeskProps = NativeStackScreenProps<RootStackParamList, 'MyDesk'>;

const styles = {
  item: {},
};
