import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryProductsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  });

  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>
        Category Products Screen
      </Text>
      <Button
        title='Product1'
        onPress={() =>
          navigation.navigate({ routeName: 'ProductDetailScreen' })
        }
      />
      <Button title='Go Back' onPress={() => navigation.goBack()} />
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
