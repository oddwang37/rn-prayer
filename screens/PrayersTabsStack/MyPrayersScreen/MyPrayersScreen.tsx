import React, {FC, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Text,
  I18nManager,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RootState, useAppDispatch} from '../../../store/store';
import {getAllPrayers} from '../../../store/ducks/prayers/thunks';
import {selectColumnPrayers} from '../../../store/ducks/prayers/selectors';

import {PrayersTabsStackParamList} from '../PrayersTabsStack';
import {AddPrayerInput, Button, PrayerItem, Spinner} from '../../../components';
import {Prayer} from '../../../store/ducks/prayers/types';

const MyPrayersScreen: FC<MyPrayersProps> = ({navigation, route}) => {
  const columnId = route.params.columnId;
  const isLoading = useSelector((state: RootState) => state.prayers.isLoading);
  const prayers = useSelector((state: RootState) =>
    selectColumnPrayers(state, columnId),
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPrayers());
  }, []);

  const keyExtractor = (item: Prayer) => item.id.toString();

  const renderItem = ({item}: {item: Prayer}) => (
    <PrayerItem title={item.title} id={item.id}></PrayerItem>
  );
  return (
    <View style={styles.root}>
      <View style={styles.addPrayerWrapper}>
        <AddPrayerInput columnId={columnId} />
      </View>
      <View style={styles.content}>
        {isLoading ? (
          <Spinner />
        ) : (
          <FlatList
            style={styles.content}
            data={prayers}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        )}
        <Button onPress={() => {}}>Show answered prayers</Button>
      </View>
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
  content: {},
  addPrayerWrapper: {
    padding: 15,
  },
});
