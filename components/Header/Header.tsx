import React, {FC, PropsWithChildren} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import colors from '../../constants/colors';

const Header: FC<HeaderProps> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Header;

type HeaderProps = PropsWithChildren<{}>;

const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    fontSize: 18,
    paddingTop: Platform.OS === 'ios' ? 0 : 22,
    paddingBottom: Platform.OS === 'ios' ? 0 : 22,
    fontWeight: '600',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

/*   root: {
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    backgroundColor: '#fff',
    position: 'relative',
  }, */
