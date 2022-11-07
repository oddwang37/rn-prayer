import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CompositeScreenProps} from '@react-navigation/native';

import {PrayersTabsParamList} from '../PrayersTabs/PrayersTabs';

const MyPrayers: FC<MyPrayersProps> = ({navigation}) => {
  return (
    <View>
      <PrayerItem
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('PrayerScreen')}>
        <Text>First item</Text>
      </PrayerItem>
      <PrayerItem activeOpacity={0.6} underlayColor="#DDDDDD">
        <Text>First item</Text>
      </PrayerItem>
    </View>
  );
};

export default MyPrayers;

type MyPrayersProps = NativeStackScreenProps<PrayersTabsParamList, 'MyPrayers'>;

const PrayerItem = styled.TouchableHighlight`
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 10px;
  margin: 10px 15px;
`;
