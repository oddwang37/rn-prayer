import React, {FC} from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';

const HeaderButton: FC<HeaderButtonProps> = ({children, onPress}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#dfdfdf"
      activeOpacity={0.8}
      onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
};

export default HeaderButton;

type HeaderButtonProps = {
  children: React.ReactElement;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
