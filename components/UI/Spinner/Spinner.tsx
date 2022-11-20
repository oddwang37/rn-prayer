import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import colors from '../../../constants/colors';

const Spinner = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator color={colors.primaryColor} size="large" />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
});
