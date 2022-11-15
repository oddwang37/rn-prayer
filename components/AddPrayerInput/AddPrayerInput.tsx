import React, {FC} from 'react';
import {useForm, FieldValues, Controller} from 'react-hook-form';
import styled from 'styled-components/native';

import {useAppDispatch} from '../../store/store';
import {createPrayer} from '../../store/ducks/prayers/thunks';

import Plus from '../../assets/icons/plus.svg';

interface FormValues extends FieldValues {
  prayerTitle: string;
}
const AddPrayerInput: FC<AddPrayerInputProps> = ({columnId}) => {
  const {control, reset, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      prayerTitle: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    await dispatch(createPrayer({title: data.prayerTitle, columnId}));
    reset();
  };

  return (
    <Root>
      <PlusWrapper>
        <Plus strokeWidth={2} />
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
            placeholder="Add a prayer..."
            placeholderTextColor="#9C9C9C"
          />
        )}
        name="prayerTitle"
      />
    </Root>
  );
};

export default AddPrayerInput;

type AddPrayerInputProps = {
  columnId: number;
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
