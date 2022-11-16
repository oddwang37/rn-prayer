import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import colors from '../../constants/colors';

const ColumnItem: FC<ColumnItem> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ColumnItem;

type ColumnItem = {
  children: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  item: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    marginBottom: 10,
  },
  text: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
