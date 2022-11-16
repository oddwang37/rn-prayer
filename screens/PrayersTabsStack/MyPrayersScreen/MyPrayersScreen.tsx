import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../../../store/store';
import {getAllPrayers} from '../../../store/ducks/prayers/thunks';
import {
  selectColumnPrayersChecked,
  selectColumnPrayersUnchecked,
} from '../../../store/ducks/prayers/selectors';

import {PrayersTabsStackParamList} from '../PrayersTabsStack';
import {AddPrayerInput, Button, PrayerItem, Spinner} from '../../../components';
import {Prayer} from '../../../store/ducks/prayers/types';

const MyPrayersScreen: FC<MyPrayersProps> = ({navigation, route}) => {
  const columnId = route.params.columnId;
  const isLoading = useSelector((state: RootState) => state.prayers.isLoading);
  const checkedPrayers = useSelector((state: RootState) =>
    selectColumnPrayersChecked(state, columnId),
  );
  const uncheckedPrayers = useSelector((state: RootState) =>
    selectColumnPrayersUnchecked(state, columnId),
  );
  const [isCheckedVisible, setIsCheckedVisible] = useState<boolean>(false);

  const showChecked = () => setIsCheckedVisible(true);
  const hideChecked = () => setIsCheckedVisible(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPrayers());
  }, []);

  const keyExtractor = (item: Prayer) => item.id.toString();

  const renderItem = ({item}: {item: Prayer}) => (
    <PrayerItem
      title={item.title}
      prayerId={item.id}
      isChecked={item.checked}></PrayerItem>
  );
  return (
    <View style={styles.root}>
      <View style={styles.addPrayerWrapper}>
        <AddPrayerInput columnId={columnId} />
      </View>
      {isLoading ? (
        <Spinner />
      ) : (
        <View>
          <FlatList
            style={styles.content}
            data={uncheckedPrayers}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          {isCheckedVisible ? (
            <Button onPress={hideChecked}>Hide answered prayers</Button>
          ) : (
            <Button onPress={showChecked}>Show answered prayers</Button>
          )}
          {isCheckedVisible && (
            <FlatList
              style={styles.content}
              data={checkedPrayers}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default MyPrayersScreen;

type MyPrayersProps = NativeStackScreenProps<
  PrayersTabsStackParamList,
  'MyPrayers'
>;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
  addPrayerWrapper: {
    padding: 15,
  },
  content: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});
