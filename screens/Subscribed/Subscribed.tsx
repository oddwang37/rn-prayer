import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {SubscribedStackParamList} from '../SubscribedStack/SubscribedStack';
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
  SubscribedStackParamList,
  'Subscribed'
>;
