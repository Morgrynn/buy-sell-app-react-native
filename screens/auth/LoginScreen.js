import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import FilledButton from '../../components/FilledButton';
import TextButton from '../../components/TextButton';
import Error from '../../components/Error';
import AuthContainer from '../../components/AuthContainer';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

const LoginScreen = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);

  const [username, setUsername] = useState('anakin');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContainer>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Username'}
        keyboardType={'default'}
        value={username}
        onChangeText={setUsername}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginBtn}
        onPress={async () => {
          try {
            setLoading(true);
            await login(username, password);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        }}
      />
      <View style={styles.btnContainer}>
        <TextButton
          title={'Go Back'}
          style={styles.btn1}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <TextButton
          title={'Create Account'}
          style={styles.btn2}
          onPress={() => {
            navigation.navigate('Registration');
          }}
        />
      </View>
      <Loading loading={loading} />
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
  btn1: {
    marginVertical: 22,
    marginRight: 60,
  },
  btn2: {
    marginVertical: 22,
    marginLeft: 60,
  },
});

export default LoginScreen;
