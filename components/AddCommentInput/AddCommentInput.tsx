import React, {FC} from 'react';
import {useForm, FieldValues, Controller} from 'react-hook-form';
import styled from 'styled-components/native';

import {useAppDispatch} from '../../store/store';
import {createComment} from '../../store/ducks/comments/thunks';

import Comment from '../../assets/icons/comment.svg';

interface FormValues extends FieldValues {
  commentText: string;
}
const AddCommentInfo: FC<AddCommentInputProps> = ({prayerId}) => {
  const {control, reset, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      commentText: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    await dispatch(createComment({body: data.commentText, prayerId}));
    reset();
  };

  return (
    <Root>
      <PlusWrapper>
        <Comment strokeWidth={2} />
      </PlusWrapper>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Field
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
            selectionColor={'#72A8BC'}
            placeholder="Add a comment..."
            placeholderTextColor="#9C9C9C"
          />
        )}
        name="commentText"
      />
    </Root>
  );
};

export default AddCommentInfo;

type AddCommentInputProps = {
  prayerId: number;
};

const Root = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 13px;
  border: 1px solid #e5e5e5;
`;
const PlusWrapper = styled.View`
  padding-right: 15px;
`;
const Field = styled.TextInput`
  font-size: 18px;
  padding: 0;
`;
