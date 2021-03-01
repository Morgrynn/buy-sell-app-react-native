import React from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { BASE_URL } from '../config';
// import SecureStorage from 'react-native-secure-storage';

const useEditProduct = (endpoint, initialValue = []) => {
  const { token } = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .put(`${BASE_URL}${endpoint}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log('useEditProduct Hook ->> ', data);
            setData(data.products);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token, endpoint]);
  return data;
};

export default useEditProduct;
