import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import { CATEGORIES, PRODUCTS } from '../data/dummy-data';

const CategoryProductsScreen = ({ navigation, route }) => {
  const renderProductItem = (itemData) => {
    return (
      <ProductItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectItem={() => {
          navigation.navigate('ProductDetailScreen', {
            productId: itemData.item.id,
          });
        }}
      />
    );
  };
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  // Only display from targeted category
  const displayProducts = PRODUCTS.filter(
    (product) => product.categoryIds.indexOf(categoryId) >= 0
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  });

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '100%', padding: 5 }}
        data={displayProducts}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryProductsScreen;
