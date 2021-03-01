import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';

const useGetAll = (endpoint, initialValue = []) => {
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    axios.get(`${BASE_URL}${endpoint}`).then(({ data }) => {
      setData(data.products);
    });
  }, [endpoint]);
  return data;
};

export default useGetAll;
