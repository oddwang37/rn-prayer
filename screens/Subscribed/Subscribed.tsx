import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {PrayersTabsParamList} from '../PrayersTabs/PrayersTabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Subscribed: FC<SubscribedStackProps> = () => {
  return (
    <View>
      <Text>Subscribed page</Text>
    </View>
  );
};

export default Subscribed;

type SubscribedStackProps = NativeStackScreenProps<
  PrayersTabsParamList,
  'Subscribed'
>;
