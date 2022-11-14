import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import colors from '../../constants/colors';
import routes from '../../constants/routes';
import {RootStackParamList} from '../RootStack/RootStack';
import {ColumnItem} from '../../components';

const MyDesk: FC<MyDeskProps> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ColumnItem>To Do</ColumnItem>
      <ColumnItem>In Progress</ColumnItem>
      <ColumnItem>Testing</ColumnItem>
    </View>
  );
};

export default MyDesk;

type MyDeskProps = NativeStackScreenProps<RootStackParamList, 'MyDesk'>;

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: colors.gray,
    borderTopWidth: 1,
  },
});
