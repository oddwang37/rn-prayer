import React, {FC} from 'react';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PrayersTabsStackParamList} from '../PrayersTabsStack';
import {AddPrayerInput, Button, PrayerItem} from '../../../components';

const MyPrayersScreen: FC<MyPrayersProps> = ({navigation}) => {
  return (
    <Root>
      <AddPrayerInput />
      <PrayerItem />
      <Button onPress={() => {}}>Show answered prayers</Button>
    </Root>
  );
};

export default MyPrayersScreen;

type MyPrayersProps = NativeStackScreenProps<
  PrayersTabsStackParamList,
  'MyPrayers'
>;

const Root = styled.View`
  padding: 15px;
`;
