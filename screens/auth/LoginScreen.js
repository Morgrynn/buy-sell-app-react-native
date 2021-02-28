import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
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
      <TextButton
        title={'Create Account'}
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
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
  btn: {
    marginVertical: 32,
  },
});

export default LoginScreen;
