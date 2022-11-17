import React, {FC, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {ColumnStackParamList} from '../ColumnStack';
import colors from '../../../constants/colors';
import dates from '../../../services/dates';
import {selectPrayerById} from '../../../store/ducks/prayers/selectors';
import {RootState, useAppDispatch} from '../../../store/store';
import {Comment as CommentType} from '../../../store/ducks/comments/types';
import {getAllComments} from '../../../store/ducks/comments/thunks';

import {PlusSmall} from '../../../components/svg';
import {
  PrayerInfo,
  Comment,
  Spinner,
  AddCommentInput,
} from '../../../components';
import {selectPrayerComments} from '../../../store/ducks/comments/selectors';

const PrayerScreen: FC<PrayerProps> = ({route}) => {
  const prayer = useSelector((state: RootState) =>
    selectPrayerById(state, route.params.prayerId),
  );
  const comments = useSelector((state: RootState) =>
    selectPrayerComments(state, route.params.prayerId),
  );
  const isLoading = useSelector((state: RootState) => state.comments.isLoading);
  const dispatch = useAppDispatch();

  const renderItem = ({item}: {item: CommentType}) => (
    <Comment name="Vladislav Selivanov" body={item.body} date={item.created} />
  );

  const keyExtractor = (item: CommentType) => item.id.toString();

  useEffect(() => {
    dispatch(getAllComments()).unwrap();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FlatList
            ListHeaderComponent={
              <KeyboardAvoidingView style={styles.root}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'position' : undefined}
                  style={styles.keyboardAvoiding}>
                  <View style={styles.header}>
                    <Text style={styles.title}>{prayer?.title}</Text>
                  </View>
                  <View style={styles.lastPrayed}>
                    <View style={styles.indicator} />
                    <Text style={styles.lastPrayedText}>
                      Last prayed 8 min ago
                    </Text>
                  </View>
                  <PrayerInfo date={dates.sub(Date.now(), {days: 6})} />
                  <Text style={styles.heading}>Members</Text>
                  <View style={styles.membersWrapper}>
                    <View style={styles.memberItem}>
                      <Image
                        source={require('../../../assets/images/avatar.png')}
                      />
                    </View>
                    <View style={styles.memberItem}>
                      <Image
                        source={require('../../../assets/images/avatar.png')}
                      />
                    </View>
                    <View style={styles.addMember}>
                      <PlusSmall />
                    </View>
                  </View>
                  <Text style={styles.heading}>Comments</Text>
                </KeyboardAvoidingView>
              </KeyboardAvoidingView>
            }
            data={comments}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          <View style={styles.footer}>
            <AddCommentInput prayerId={route.params.prayerId} />
          </View>
        </>
      )}
    </>
  );
};

export default PrayerScreen;

type PrayerProps = NativeStackScreenProps<ColumnStackParamList, 'PrayerScreen'>;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primaryColor,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 23,
  },
  container: {
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
  lastPrayed: {
    padding: 15,
    color: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  lastPrayedText: {
    fontSize: 18,
    marginLeft: 10,
  },
  indicator: {
    height: 22,
    width: 3,
    backgroundColor: colors.red,
  },
  heading: {
    textTransform: 'uppercase',
    color: colors.blue,
    marginTop: 20,
    marginLeft: 15,
    fontWeight: '600',
  },
  membersWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  memberItem: {
    marginRight: 15,
  },
  addMember: {
    backgroundColor: colors.primaryColor,
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comments: {
    marginTop: 15,
  },
  footer: {
    marginBottom: Platform.OS === 'ios' ? 6 : 0,
    alignSelf: 'flex-end',
    width: '100%',
  },
});
