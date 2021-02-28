import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import FilledButton from '../../components/FilledButton';
import Error from '../../components/Error';
import IconButton from '../../components/IconButton';
import AuthContainer from '../../components/AuthContainer';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

const RegistrationScreen = ({ navigation }) => {
  const { register } = React.useContext(AuthContext);

  const [username, setUsername] = useState('rick');
  const [password, setPassword] = useState('password');
  const [email, setEmail] = useState('rick@sanchez.com');
  const [firstname, setFirstName] = useState('Rick');
  const [lastname, setLastName] = useState('Sanchez');
  const [street, setStreet] = useState('street address');
  const [number, setNumber] = useState('address number');
  const [postcode, setPostCode] = useState('postcode');
  const [city, setCity] = useState('city');
  const [country, setCountry] = useState('country');
  const [phone, setPhone] = useState('0000000000');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <AuthContainer>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => navigation.pop()}
      />
      <Heading style={styles.title}>REGISTRATION</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Username'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
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
        keyboardType={'default'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Register'}
        style={styles.btn}
        onPress={async () => {
          try {
            setLoading(true);
            await register(
              email,
              username,
              password,
              firstname,
              lastname,
              street,
              number,
              postcode,
              city,
              country,
              phone
            );
            navigation.pop();
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});

export default RegistrationScreen;
