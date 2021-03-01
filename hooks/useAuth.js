import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { sleep } from '../utils/sleep';
import base64 from 'react-native-base64';
import { createAction } from '../utils/createAction';
import * as SecureStore from 'expo-secure-store';

const useAuth = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            loading: false,
            user: {
              ...action.payload,
            },
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
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
        await SecureStore.setItemAsync('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
      },
      logout: async () => {
        await SecureStore.deleteItemAsync('user');
        dispatch(createAction('REMOVE_USER'));
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

  React.useEffect(() => {
    sleep(1000).then(() => {
      SecureStore.getItemAsync('user').then((user) => {
        // console.log('useAuth hook :>> ', user);
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);
  return { authContext, state };
};

export default useAuth;
