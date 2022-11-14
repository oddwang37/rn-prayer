import React, {FC} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const Header: FC<HeaderProps> = ({children}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Header;

type HeaderProps = {
  children: string;
};

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    backgroundColor: '#fff',
  },
  text: {
    color: colors.textColor,
    fontSize: 18,
    paddingTop: 22,
    paddingBottom: 22,
    fontWeight: '700',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
