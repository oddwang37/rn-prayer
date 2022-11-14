import React, {FC, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {useAppDispatch, RootState} from '../../store/store';
import colors from '../../constants/colors';
import routes from '../../constants/routes';
import {getAllColumns} from '../../store/ducks/columns/thunks';
import {RootStackParamList} from '../RootStack/RootStack';

import {ColumnItem} from '../../components';

const MyDeskScreen: FC<MyDeskProps> = ({navigation}) => {
  const columns = useSelector((state: RootState) => state.columns.columns);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllColumns());
  }, []);

  return (
    <View style={styles.root}>
      {columns.map(item => (
        <ColumnItem key={item.id}>{item.title.toLocaleLowerCase()}</ColumnItem>
      ))}
    </View>
  );
};

export default MyDeskScreen;

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
