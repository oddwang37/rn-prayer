import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ColumnStackParamList} from '../ColumnStack/ColumnStack';

const PrayerScreen: FC<PrayerProps> = () => {
  return (
    <View>
      <Text>Prayer screen</Text>
    </View>
  );
};

export default PrayerScreen;

type PrayerProps = NativeStackScreenProps<ColumnStackParamList, 'PrayerScreen'>;
