import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import routes from '../../constants/routes';
import colors from '../../constants/colors';
import {RootStackParamList} from '../RootStack/RootStack';
import {useAppDispatch, RootState} from '../../store/store';
import {login} from '../../store/ducks/auth/thunks';

import {FormField, Button} from '../../components';

interface FormValues extends FieldValues {
  email: string;
  password: string;
}

const LoginScreen: FC<LoginProps> = ({navigation}) => {
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const {control, handleSubmit} = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormValues) => {
    const {email, password} = data;
    try {
      await dispatch(login({email, password})).unwrap();
    } catch (e) {}
  };

  return (
    <View style={styles.form}>
      <FormField
        name="email"
        control={control}
        label="Email"
        placeholder="Enter your email..."
      />
      <FormField
        label="Password"
        name="password"
        control={control}
        placeholder="Enter your password..."
        secureTextEntry={true}
      />
      <Button onPress={handleSubmit(onSubmit)} isLoading={isLoading}>
        Sign in
      </Button>
      <Text style={styles.signUpText}>Don't have an account?</Text>
      <TouchableOpacity
        style={styles.signUpLinkWrapper}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(routes.signUp)}>
        <Text style={styles.signUpLink}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const styles = StyleSheet.create({
  form: {
    marginTop: '50%',
    paddingHorizontal: 30,
  },
  signUpText: {
    fontSize: 14,
    color: '#bababa',
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signUpLinkWrapper: {
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signUpLink: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryColor,
  },
});
