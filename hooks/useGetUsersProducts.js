import React from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
import { BASE_URL } from '../config';
import { sleep } from '../utils/sleep';

const useGetUsersProducts = (endpoint, initialValue = []) => {
  const { token, userId } = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get(`${BASE_URL}${endpoint}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({ data }) => {
            const result = data.products.filter(
              (product) => product.userid === userId
            );
            if (result.length === 0) {
              setData(null);
            }
            setData(result);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token, endpoint]);
  return data;
};

export default useGetUsersProducts;
