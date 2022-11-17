import React, {FC} from 'react';
import styled from 'styled-components/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

import {
  deletePrayer,
  updatePrayerChecked,
  getPrayerById,
} from '../../store/ducks/prayers/thunks';
import {useAppDispatch} from '../../store/store';

import {Checkbox} from '../UI';
import User from '../../assets/icons/user3.svg';
import Prayer from '../../assets/icons/Lists/Icons/prayer line.svg';
import colors from '../../constants/colors';

const PrayerItem: FC<PrayerItemProps> = ({
  title,
  prayerId,
  isChecked,
  onPress,
}) => {
  const dispatch = useAppDispatch();

  const onPressDelete = async () => {
    try {
      await dispatch(deletePrayer(prayerId)).unwrap();
    } catch (e) {}
  };

  const onChangeCheckbox = async () => {
    try {
      const prayerInfo = await dispatch(getPrayerById(prayerId)).unwrap();
      const {columnId, description, id, title} = prayerInfo;
      await dispatch(
        updatePrayerChecked({
          title,
          description,
          checked: !isChecked,
          columnId,
          id,
        }),
      );
    } catch (e) {}
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
      <TouchableOpacity
        style={styles.root}
        activeOpacity={0.6}
        onPress={onPress}>
        <View style={styles.indicator} />
        <Checkbox isChecked={isChecked} onChange={onChangeCheckbox} />
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            isChecked && {textDecorationLine: 'line-through'},
          ]}>
          {title}
        </Text>
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
      </TouchableOpacity>
    </Swipeable>
  );
};

export default PrayerItem;

type PrayerItemProps = {
  title: string;
  prayerId: number;
  isChecked: boolean;
  onPress: () => void;
};
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
    backgroundColor: '#fff',
    borderTopColor: colors.gray,
    borderBottomColor: colors.gray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
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
  title: {
    marginLeft: 15,
    fontSize: 18,
    color: '#514d47',
    flex: 5,
  },
  indicator: {
    height: 22,
    width: 3,
    backgroundColor: colors.red,
    marginRight: 15,
  },
});
