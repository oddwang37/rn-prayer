import React, {FC} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import colors from '../../constants/colors';

const Comment: FC<CommentProps> = ({name, body}) => {
  const date = '2 days ago';

  return (
    <View style={styles.root}>
      <View style={styles.avatarWrapper}>
        <Image source={require('../../assets/images/avatar.png')} />
      </View>
      <View style={styles.flexWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.name}>{body}</Text>
    </View>
  );
};

export default Comment;

type CommentProps = {
  name: string;
  body: string;
  date: string;
};

const styles = StyleSheet.create({
  root: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  flexWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatarWrapper: {
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textColor,
  },
  body: {
    fontSize: 18,
  },
  date: {
    color: '#9C9C9C',
    marginLeft: 6,
  },
});
