import React, {FC} from 'react';
import {View, Text, Alert} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PrayerItem} from '../../components';
import {PrayersTabsParamList} from '../PrayersTabs/PrayersTabs';
import {AddPrayerInput, Button} from '../../components';

const MyPrayers: FC<MyPrayersProps> = ({navigation}) => {
  return (
    <Root>
      <AddPrayerInput />
      <PrayerItem />
      <Button onPress={() => alert('something')}>Show answered prayers</Button>
    </Root>
  );
};

export default MyPrayers;

type MyPrayersProps = NativeStackScreenProps<PrayersTabsParamList, 'MyPrayers'>;

const Root = styled.View`
  padding: 15px;
`;
