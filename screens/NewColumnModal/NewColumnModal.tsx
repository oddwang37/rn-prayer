import React, {FC} from 'react';
import styled from 'styled-components/native';
import {useForm, FieldValues} from 'react-hook-form';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import {useAppDispatch} from 'store/store';
import {Button, FormField} from '../../components';
import colors from '../../constants/colors';

interface FormValues extends FieldValues {
  title: string;
}
const NewColumnModal: FC<NameEnterProps> = ({isVisible, closeModal}) => {
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    closeModal();
  };
  return (
    <>
      {isVisible ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              closeModal();
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Enter new column title</Text>
                <FormField control={control} name="title" />
                <Button onPress={() => {}}>Done</Button>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};

export default NewColumnModal;

type NameEnterProps = {
  isVisible: boolean;
  closeModal: () => void;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    width: 300,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontWeight: '600',
    fontSize: 18,
    color: colors.textColor,
  },
});
