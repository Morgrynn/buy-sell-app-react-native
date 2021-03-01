import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { sleep } from '../utils/sleep';
import base64 from 'react-native-base64';
import { createAction } from '../utils/createAction';
import * as SecureStore from 'expo-secure-store';

const useProduct = () => {};

const prodContext = React.useMemo(
  () => ({
    create: () => {
      console.log('create');
    },
    edit: () => {},
    delete: () => {},
    get: () => {},
  }),
  []
);

export default useProduct;
