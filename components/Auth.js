import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpCompleted from '../components/SignUpCompleted';
import LoadingScreen from '../screens/LoadingScreen';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const secureStoreTokenName = process.env.JWTKEY;

const Auth = ({ navigation }) => {
  const [isCheckingTokenStorage, setIsCheckingStorageToken] = useState(true);
  const [activeJWT, setActiveJWT] = useState(null);

  useEffect(() => {
    // Check for stored JWT when the application loads
    SecureStore.getItemAsync(secureStoreTokenName)
      .then((response) => {
        console.log('SecureStore.getItemAsync success');
        setActiveJWT(response);
        setIsCheckingStorageToken(false);
      })
      .catch((error) => {
        console.log('SecureStore.getItemAsync error');
        console.log(error);
      });
  }, []);

  const onLoginReceiveJWT = (responseJWT) => {
    // Deal with successful login by storing the token into secure store
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT).then(
      (response) => {
        console.log(response);
        setActiveJWT(responseJWT);
        setIsCheckingStorageToken(false);
      }
    );
  };

  const authLogin = () => {
    const authScreens = (
      <>
        <Stack.Screen name='Login'>
          {(props) => (
            <LoginScreen
              {...props}
              onLoginReceiveJWT={onLoginReceiveJWT}
              apiURI={props.apiURI}></LoginScreen>
          )}
        </Stack.Screen>
        <Stack.Screen
          name='Signup'
          options={{
            headerShown: false,
          }}>
          {(props) => (
            <SignUpScreen {...props} apiURI={props.apiURI}></SignUpScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name='SignupCompleted'>
          {(props) => <SignUpCompleted {...props}></SignUpCompleted>}
        </Stack.Screen>
      </>
    );

    const app = (
      <Stack.Screen
        name='UserApp'
        options={{
          headerShown: false,
        }}>
        {(props) => (
          <UserApp
            {...props}
            jwt={activeJWT}
            apiURI={props.apiURI}
            onLogout={onLogout}></UserApp>
        )}
      </Stack.Screen>
    );

    const checkingForTokenStorage = (
      <Stack.Screen name='Loading' component={LoadingScreen} />
    );

    if (isCheckingTokenStorage) {
      console.log('Checking is token stored');
      return checkingForTokenStorage;
    } else {
      if (activeJWT != null) {
        console.log('JWT Token found, displaying application logged in views');
        return app;
      } else {
        console.log(
          'JWT Token not found, displaying application authentication views'
        );
        return authScreens;
      }
    }
    console.error('Incorrect authLogic function processing');
  };

  const onLogout = () => {
    console.log('Logout clicked');
    setActiveJWT(null);
    SecureStore.deleteItemAsync(secureStoreTokenName);
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>{authLogic()}</Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Auth;
