import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const PrayerInfo = () => {
  return (
    <>
      <View style={styles.infoWrapper}>
        <View style={[styles.infoItem, {paddingBottom: 8}]}>
          <Text style={styles.infoItemTitle}>July 25 2017</Text>
          <Text style={styles.infoItemSecondText}>Date added</Text>
          <Text style={styles.openedFor}>Opened for 4 days</Text>
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
