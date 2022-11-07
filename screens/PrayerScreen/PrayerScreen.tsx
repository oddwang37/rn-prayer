import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PrayersStackParamList} from '../MyPrayersStack/MyPrayersStack';

const PrayerScreen: FC<SubscribedStackProps> = () => {
  return (
    <View>
      <Text>Prayer screen</Text>
    </View>
  );
};

export default PrayerScreen;

type SubscribedStackProps = NativeStackScreenProps<
  PrayersStackParamList,
  'Prayer'
>;
