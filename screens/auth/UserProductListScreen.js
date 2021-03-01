import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, FlatList, View } from 'react-native';
import HeaderIconButton from '../../components/HeaderIconButton';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import ProductItem from '../../components/ProductItem';
import useGetUsersProducts from '../../hooks/useGetUsersProducts';
import Colors from '../../constants/Colors';
import axios from 'axios';
import { BASE_URL } from '../../config';

const UserProductListScreen = ({ navigation }) => {
  const { logout } = React.useContext(AuthContext);
  const { userId, token } = React.useContext(UserContext);

  const products = useGetUsersProducts(`/products`);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      products;
    });
    return () => {
      // Unsubscribe for the focus Listener
      unsubscribe;
    };
  }, [navigation]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.icons}>
          <View style={{ paddingRight: 10, marginBottom: 3 }}>
            <HeaderIconButton
              name={'ios-create-outline'}
              onPress={() => {
                navigation.navigate('EditUserProductScreen', {
                  headerTitle: 'Add Product',
                });
              }}
            />
          </View>
          <View style={{ paddingRight: 8 }}>
            <HeaderIconButton
              name={'log-out-outline'}
              onPress={() => {
                logout();
              }}
            />
          </View>
        </View>
      ),
    });
  }, [navigation, logout]);

  const selectItemHandler = (id, title) => {
    navigation.navigate('ProductDetailScreen', {
      productId: id,
      productTitle: title,
    });
  };

  const editProductHandler = (
    id,
    headerTitle,
    title,
    description,
    price,
    city,
    country,
    shipping,
    category,
    pickup,
    images
  ) => {
    navigation.navigate('EditUserProductScreen', {
      productId: id,
      headerTitle: headerTitle,
      title: title,
      description: description,
      price: price,
      city: city,
      country: country,
      shipping: shipping,
      pickup: pickup,
      category: category,
      images: images,
    });
  };

  const deleteProduct = async (id) => {
    try {
      await axios
        .delete(`${BASE_URL}/products/${id}`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.ok == false) {
            throw new Error('HTTP Code ' + response.status + ' - ' + response);
          }
          console.log('res ', response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlatList
      style={styles.productsList}
      // contentContainerStyle={styles.productsListContainer}
      data={products}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={(itemData) => (
        <ProductItem
          key={itemData.item.productid}
          image={itemData.item.images[0]}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.productid, itemData.item.title);
          }}>
          <Button
            color={Colors.primaryColor}
            title='Edit'
            onPress={() => {
              editProductHandler(
                itemData.item.productid,
                'Edit Product',
                itemData.item.title,
                itemData.item.description,
                itemData.item.price,
                itemData.item.city,
                itemData.item.country,
                itemData.item.shipping,
                itemData.item.pickup,
                itemData.item.category,
                itemData.item.images
              );
            }}
          />
          <Button
            color={Colors.primaryColor}
            title='Delete'
            onPress={() => {
              deleteProduct(itemData.item.productid);
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UserProductListScreen;
