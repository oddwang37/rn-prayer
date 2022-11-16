import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {PrayersTabsStackParamList} from '../PrayersTabsStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const SubscribedScreen: FC<SubscribedStackProps> = () => {
  return (
    <View style={styles.root}>
      <Text>Subscribed page</Text>
    </View>
  );
};

export default SubscribedScreen;

type SubscribedStackProps = NativeStackScreenProps<
  PrayersTabsStackParamList,
  'Subscribed'
>;

const styles = StyleSheet.create({
  root: {backgroundColor: '#fff', flex: 1},
});
