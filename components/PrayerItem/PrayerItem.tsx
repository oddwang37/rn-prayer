import React, {useState, FC} from 'react';
import styled from 'styled-components/native';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

import {deletePrayer} from '../../store/ducks/prayers/thunks';
import {useAppDispatch} from '../../store/store';

import {Checkbox} from '../UI';
import User from '../../assets/icons/user3.svg';
import Prayer from '../../assets/icons/Lists/Icons/prayer line.svg';
import colors from '../../constants/colors';

const PrayerItem: FC<PrayerItemProps> = ({title, id}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onChange = () => {
    setIsChecked(prev => !prev);
  };

  const cutTitle = (title: string) =>
    title.length > 17 ? title.slice(0, 17) + '...' : title;

  const onPressDelete = async () => {
    console.log('pressed');
    try {
      const result = await dispatch(deletePrayer(id)).unwrap();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.rightAction} onPress={onPressDelete}>
        <Text style={styles.actionText}>Delete</Text>
      </RectButton>
    );
  };

  return (
    <Swipeable rightThreshold={60} renderRightActions={renderRightActions}>
      <View style={styles.root}>
        <Indicator />
        <Checkbox isChecked={isChecked} onChange={onChange} />
        <Title>{cutTitle(title)}</Title>
        <Icons>
          <IconWrapper>
            <User width={24} height={24} />
            <Quantity>3</Quantity>
          </IconWrapper>
          <IconWrapper>
            <Prayer />
            <Quantity>157</Quantity>
          </IconWrapper>
        </Icons>
      </View>
    </Swipeable>
  );
};

export default PrayerItem;

type PrayerItemProps = {
  title: string;
  id: number;
};
const Indicator = styled.View`
  height: 22px;
  width: 3px;
  background-color: ${({theme}) => theme.colors.red};
  margin-right: 15px;
`;
const Title = styled.Text`
  margin-left: 15px;
  font-size: 18px;
  color: #514d47;
  flex: 6;
`;
const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.View`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex: 3;
`;
const Quantity = styled.Text`
  font-size: 12px;
`;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 23,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderTopColor: colors.gray,
    borderBottomColor: colors.gray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  leftAction: {
    flex: 0.2,
    backgroundColor: colors.red,
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    backgroundColor: colors.red,
    flex: 0.2,
    justifyContent: 'center',
  },
});
