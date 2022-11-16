import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {selectPrayerById} from '../../../store/ducks/prayers/selectors';
import {ColumnStackParamList} from '../ColumnStack';
import colors from '../../../constants/colors';
import {RootState} from '../../../store/store';
import {PrayerInfo, Comment} from '../../../components';
import {PlusSmall} from '../../../components/svg';
import {Column} from '../../../store/ducks/columns/types';

const PrayerScreen: FC<PrayerProps> = ({route}) => {
  const prayer = useSelector((state: RootState) =>
    selectPrayerById(state, route.params.prayerId),
  );

  /*const renderItem = ({item}) => <Comment name="Petr Ivanov" body="Vse kruto!!" date="213123123" />;

  const keyExtractor = (item: Column) => item.id;
  */

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>{prayer?.title}</Text>
      </View>
      <View style={styles.lastPrayed}>
        <View style={styles.indicator} />
        <Text style={styles.lastPrayedText}>Last prayed 8 min ago</Text>
      </View>
      <PrayerInfo />
      <Text style={styles.heading}>Members</Text>
      <View style={styles.membersWrapper}>
        <View style={styles.memberItem}>
          <Image source={require('../../../assets/images/avatar.png')} />
        </View>
        <View style={styles.memberItem}>
          <Image source={require('../../../assets/images/avatar.png')} />
        </View>
        <View style={styles.addMember}>
          <PlusSmall />
        </View>
      </View>
      <Text style={styles.heading}>Comments</Text>
    </View>
  );
};

export default PrayerScreen;

type PrayerProps = NativeStackScreenProps<ColumnStackParamList, 'PrayerScreen'>;

const styles = StyleSheet.create({
  root: {},
  header: {
    backgroundColor: colors.primaryColor,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 23,
  },
  container: {
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  lastPrayed: {
    padding: 15,
    color: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  lastPrayedText: {
    fontSize: 18,
    marginLeft: 10,
  },
  indicator: {
    height: 22,
    width: 3,
    backgroundColor: colors.red,
  },
  heading: {
    textTransform: 'uppercase',
    color: colors.blue,
    marginTop: 20,
    marginLeft: 15,
  },
  membersWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  memberItem: {
    marginRight: 15,
  },
  addMember: {
    backgroundColor: colors.primaryColor,
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comments: {
    marginTop: 15,
  },
});
