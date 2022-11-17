import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import dates from '../../services/dates';
import colors from '../../constants/colors';

const PrayerInfo: FC<PrayerInfoProps> = ({date}) => {
  return (
    <>
      <View style={styles.infoWrapper}>
        <View style={[styles.infoItem, {paddingBottom: 8}]}>
          <Text style={styles.infoItemTitle}>
            {dates.formatToMonthDDYYYY(date)}
          </Text>
          <Text style={styles.infoItemSecondText}>Date added</Text>
          <Text style={styles.openedFor}>
            Opened for {dates.formatDaysSinceDate(date)}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>123</Text>
          <Text style={styles.infoItemSecondText}>Times Prayed total</Text>
        </View>
      </View>
      <View style={styles.infoWrapper}>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>63</Text>
          <Text style={styles.infoItemSecondText}>Times prayed by me</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemTitle}>607</Text>
          <Text style={styles.infoItemSecondText}>Times prayed by others</Text>
        </View>
      </View>
    </>
  );
};

export default PrayerInfo;

type PrayerInfoProps = {
  date: Date;
};
const styles = StyleSheet.create({
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoItem: {
    width: '50%',
    paddingTop: 24,
    paddingBottom: 27,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  infoItemTitle: {
    color: colors.primaryColor,
    fontSize: 22,
    textTransform: 'capitalize',
  },
  infoItemSecondText: {
    color: colors.textColor,
  },
  openedFor: {
    color: colors.blue,
  },
});
