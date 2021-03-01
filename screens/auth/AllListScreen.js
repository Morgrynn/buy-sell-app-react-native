import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, FlatList, View } from 'react-native';
import HeaderIconButton from '../../components/HeaderIconButton';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import Product from '../../components/Product';
import ProductItem from '../../components/ProductItem';
import useGetAll from '../../hooks/useGetAll';
import Colors from '../../constants/Colors';

const AllListScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconButton
          name={'log-in-outline'}
          onPress={() => {
            navigation.navigate('AuthStack');
          }}
        />
      ),
    });
  }, [navigation]);

  const products = useGetAll(`/products`);

  const selectItemHandler = (id, title) => {
    navigation.navigate('ProductDetailScreen', {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      style={styles.productsList}
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
            title='View Details'
            onPress={() => {
              selectItemHandler(itemData.item.productid, itemData.item.title);
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
});

export default AllListScreen;
