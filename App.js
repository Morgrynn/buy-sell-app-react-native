import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigaator';
import { AuthContext } from './contexts/AuthContext';
import axios from 'axios';
import { BASE_URL } from './config';
import { sleep } from './utils/sleep';
import base64 from 'react-native-base64';
import { createAction } from './utils/createAction';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {
              ...action.payload,
            },
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
    }
  );
  const authContext = React.useMemo(
    () => ({
      login: async (username, password) => {
        const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);
        const { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/login`,
          headers: { Authorization: authHeader },
        });
        const user = {
          token: data.token,
          userId: data.userId,
        };
        dispatch(createAction('SET_USER', user));
      },
      logout: () => {
        console.log('logout');
      },
      register: async (
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
      ) => {
        await sleep(1000);
        await axios({
          method: 'post',
          url: `${BASE_URL}/users/signup`,
          data: {
            email: email,
            username: username,
            password: password,
            name: {
              firstname: firstname,
              lastname: lastname,
            },
            address: {
              street: street,
              number: number,
              postcode: postcode,
              city: city,
              country: country,
            },
            phone: phone,
          },
        });
      },
    }),
    []
  );

  console.log('state.user', state.user);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
