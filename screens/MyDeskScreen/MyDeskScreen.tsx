import React, {FC, useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {useAppDispatch, RootState} from '../../store/store';
import colors from '../../constants/colors';
import {getAllColumns} from '../../store/ducks/columns/thunks';
import {RootStackParamList} from '../RootStack/RootStack';

import {ColumnItem, Spinner} from '../../components';

const MyDeskScreen: FC<MyDeskProps> = ({navigation}) => {
  const isLoading = useSelector((state: RootState) => state.columns.isLoading);
  const [errorText, setErrorText] = useState('');
  const columns = useSelector((state: RootState) => state.columns.columns);
  const dispatch = useAppDispatch();

  const getColumns = async () => {
    try {
      await dispatch(getAllColumns());
      setErrorText('');
    } catch (e: any) {
      setErrorText(e.message);
    }
  };
  useEffect(() => {
    getColumns();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ScrollView style={styles.root}>
          {columns.map(item => (
            <ColumnItem key={item.id}>
              {item.title.toLocaleLowerCase()}
            </ColumnItem>
          ))}
          {errorText && <Text style={styles.errorText}>{errorText}</Text>}
        </ScrollView>
      )}
    </>
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
  errorText: {
    marginTop: 10,
    color: colors.red,
  },
});
