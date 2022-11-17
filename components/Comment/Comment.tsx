import React, {FC} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import dates, {Formats} from '../../services/dates';
import colors from '../../constants/colors';

const Comment: FC<CommentProps> = ({name, body, date}) => {
  return (
    <View style={styles.root}>
      <View style={styles.avatarWrapper}>
        <Image source={require('../../assets/images/avatar.png')} />
      </View>
      <View style={styles.flexWrapper}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
        <Text style={styles.date}>
          {dates.formatRelative(Date.parse(date))}
        </Text>
      </View>
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
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
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
    fontWeight: '500',
    color: colors.textColor,
  },
  body: {
    fontSize: 16,
  },
  date: {
    color: '#9C9C9C',
    marginLeft: 6,
    marginTop: 2,
  },
});
