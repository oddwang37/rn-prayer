import React, {FC} from 'react';
import {View, Text, Alert} from 'react-native';
import styled from 'styled-components/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {useAppDispatch, RootState} from '../../store/store';
import {addOne, minusOne} from '../../store/ducks/auth';

import {PrayerItem} from '../../components';
import {PrayersTabsParamList} from '../PrayersTabs/PrayersTabs';
import {AddPrayerInput, Button} from '../../components';

const MyPrayers: FC<MyPrayersProps> = ({navigation}) => {
  const number = useSelector((state: RootState) => state.auth.number);
  const dispatch = useAppDispatch();

  return (
    <Root>
      <AddPrayerInput />
      <PrayerItem />
      <Button onPress={() => alert('something')}>Show answered prayers</Button>
      <Text>{number}</Text>
      <Button onPress={() => dispatch(addOne())}>Add one</Button>
      <Button onPress={() => dispatch(minusOne())}>minus one</Button>
    </Root>
  );
};

export default MyPrayers;

type MyPrayersProps = NativeStackScreenProps<PrayersTabsParamList, 'MyPrayers'>;

const Root = styled.View`
  padding: 15px;
`;
