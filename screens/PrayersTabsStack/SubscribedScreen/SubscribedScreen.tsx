import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {PrayersTabsStackParamList} from '../PrayersTabsStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const SubscribedScreen: FC<SubscribedStackProps> = () => {
  return (
    <View>
      <Text>Subscribed page</Text>
    </View>
  );
};

export default SubscribedScreen;

type SubscribedStackProps = NativeStackScreenProps<
  PrayersTabsStackParamList,
  'Subscribed'
>;
